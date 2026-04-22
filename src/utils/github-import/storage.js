import { promises as fs } from "node:fs";
import path from "node:path";
import { GitHubImportError } from "./errors.js";
import { buildRepositoryFolder } from "./mappers.js";

function isFileNotFound(error) {
  return Boolean(error) && error.code === "ENOENT";
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (isFileNotFound(error)) {
      return false;
    }

    throw error;
  }
}

async function readTextFile(filePath, fallbackValue = null) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (isFileNotFound(error)) {
      return fallbackValue;
    }

    throw error;
  }
}

export async function writeTextFileAtomic(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  const tempFile = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  await fs.writeFile(tempFile, content, "utf8");
  await fs.rename(tempFile, filePath);
}

export async function writeJsonFileAtomic(filePath, payload) {
  const serialized = `${JSON.stringify(payload, null, 2)}\n`;
  await writeTextFileAtomic(filePath, serialized);
}

export async function readJsonFile(filePath, fallbackValue) {
  const content = await readTextFile(filePath, null);

  if (content === null) {
    return fallbackValue;
  }

  try {
    return JSON.parse(content);
  } catch (error) {
    throw new GitHubImportError(`Arquivo JSON inválido: ${filePath}.`, {
      code: "GITHUB_IMPORT_INVALID_JSON",
      cause: error,
    });
  }
}

async function createJsonFileIfMissing(filePath, payload) {
  if (await fileExists(filePath)) {
    return;
  }

  await writeJsonFileAtomic(filePath, payload);
}

export async function ensureImportDataStructure(paths) {
  await fs.mkdir(paths.dataDir, { recursive: true });
  await fs.mkdir(paths.reposDir, { recursive: true });

  await createJsonFileIfMissing(paths.indexFile, {
    schemaVersion: 1,
    generatedAt: null,
    username: null,
    authenticatedLogin: null,
    hasToken: false,
    maxRepos: null,
    totals: {
      indexed: 0,
      active: 0,
      stale: 0,
      errors: 0,
    },
    errors: [],
    repositories: [],
  });

  await createJsonFileIfMissing(paths.portfolioItemsFile, []);
  await createJsonFileIfMissing(paths.portfolioIgnoreFile, []);
}

export async function upsertRepositoryFiles({
  reposDir,
  metadata,
  languagesUpdate,
  readmeUpdate,
  syncedAt,
  warnings = [],
}) {
  const folderName = buildRepositoryFolder(metadata.owner, metadata.name);
  const repositoryDir = path.join(reposDir, folderName);

  await fs.mkdir(repositoryDir, { recursive: true });

  const metadataFile = path.join(repositoryDir, "metadata.json");
  const languagesFile = path.join(repositoryDir, "languages.json");
  const readmeFile = path.join(repositoryDir, "readme.md");
  const manifestFile = path.join(repositoryDir, "manifest.json");

  const previousMetadata = await readJsonFile(metadataFile, {});
  const nextMetadata = {
    ...previousMetadata,
    ...metadata,
    lastSyncedAt: syncedAt,
  };
  await writeJsonFileAtomic(metadataFile, nextMetadata);

  const existingLanguages = await readJsonFile(languagesFile, {});
  let resolvedLanguages = existingLanguages;
  let languagesFileState = "kept";

  if (languagesUpdate.state === "updated") {
    resolvedLanguages = languagesUpdate.data;
    await writeJsonFileAtomic(languagesFile, resolvedLanguages);
    languagesFileState = "updated";
  } else if (!(await fileExists(languagesFile))) {
    resolvedLanguages = {};
    await writeJsonFileAtomic(languagesFile, resolvedLanguages);
    languagesFileState = "initialized";
  } else if (languagesUpdate.state === "not_found") {
    languagesFileState = "not_found_kept";
  } else if (languagesUpdate.state === "error") {
    languagesFileState = "error_kept";
  }

  const existingReadme = await readTextFile(readmeFile, null);
  let resolvedReadme = existingReadme;
  let readmeFileState = existingReadme ? "kept" : "missing";

  if (readmeUpdate.state === "updated") {
    resolvedReadme = readmeUpdate.data;
    await writeTextFileAtomic(readmeFile, `${readmeUpdate.data}\n`);
    readmeFileState = "updated";
  } else if (readmeUpdate.state === "not_found" && existingReadme) {
    readmeFileState = "not_found_kept";
  } else if (readmeUpdate.state === "error" && existingReadme) {
    readmeFileState = "error_kept";
  }

  const manifest = {
    repoKey: metadata.repoKey,
    owner: metadata.owner,
    name: metadata.name,
    repoUrl: metadata.repoUrl,
    folderName,
    files: {
      metadata: "updated",
      languages: languagesFileState,
      readme: readmeFileState,
    },
    warnings,
    lastSyncedAt: syncedAt,
  };

  await writeJsonFileAtomic(manifestFile, manifest);

  return {
    folderName,
    files: manifest.files,
    languagesByBytes: resolvedLanguages,
    readme: resolvedReadme,
  };
}
