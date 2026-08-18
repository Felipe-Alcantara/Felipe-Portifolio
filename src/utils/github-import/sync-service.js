import { loadGitHubImportConfig } from "./config.js";
import { createGitHubApiClient } from "./github-api-client.js";
import { GitHubImportError } from "./errors.js";
import {
  buildRepositoryKey,
  mapRepositoryToPortfolioItem,
  normalizeGitHubRepositoryMetadata,
} from "./mappers.js";
import {
  ensureImportDataStructure,
  readJsonFile,
  upsertRepositoryFiles,
  writeJsonFileAtomic,
} from "./storage.js";

function log(logger, level, message) {
  if (logger && typeof logger[level] === "function") {
    logger[level](message);
    return;
  }

  if (logger && typeof logger.log === "function") {
    logger.log(message);
  }
}

function toDateValue(dateString) {
  const parsed = Date.parse(dateString || "");
  return Number.isFinite(parsed) ? parsed : 0;
}

function resolveRepositoryRecordKey(record) {
  if (record && typeof record.key === "string" && record.key.trim()) {
    return record.key.trim().toLowerCase();
  }

  if (record && typeof record.repoUrl === "string" && record.repoUrl.trim()) {
    return record.repoUrl.trim().toLowerCase();
  }

  return null;
}

function resolvePortfolioItemKey(item) {
  if (item && typeof item.repoKey === "string" && item.repoKey.trim()) {
    return item.repoKey.trim().toLowerCase();
  }

  const githubLink = item?.links?.github;

  if (typeof githubLink === "string" && githubLink.trim()) {
    return githubLink.trim().toLowerCase();
  }

  if (typeof item?.link === "string" && item.link.trim()) {
    return item.link.trim().toLowerCase();
  }

  return null;
}

function normalizeIgnoreRepoKeys(rawIgnoreList) {
  if (!Array.isArray(rawIgnoreList)) {
    return new Set();
  }

  return new Set(
    rawIgnoreList
      .map((value) => (typeof value === "string" ? value.trim().toLowerCase() : ""))
      .filter(Boolean)
  );
}

function createSerializableError(error, { stage, repoKey } = {}) {
  if (error instanceof GitHubImportError) {
    return {
      stage,
      repoKey: repoKey || null,
      code: error.code,
      status: Number.isInteger(error.status) ? error.status : null,
      message: error.message,
      endpoint: error.endpoint || null,
      rateLimit: error.rateLimitInfo || null,
      retriable: Boolean(error.retriable),
    };
  }

  return {
    stage,
    repoKey: repoKey || null,
    code: "UNKNOWN_ERROR",
    status: null,
    message: error instanceof Error ? error.message : "Erro desconhecido.",
    endpoint: null,
    rateLimit: null,
    retriable: false,
  };
}

function mergeRepositoryRecords(existingRecords, freshRecords, syncedAt) {
  const mergedByKey = new Map();
  const activeKeys = new Set();

  for (const record of existingRecords) {
    if (record?.private === true) {
      continue;
    }
    const key = resolveRepositoryRecordKey(record);

    if (!key) {
      continue;
    }

    mergedByKey.set(key, record);
  }

  for (const record of freshRecords) {
    const key = resolveRepositoryRecordKey(record);

    if (!key) {
      continue;
    }

    activeKeys.add(key);
    mergedByKey.set(key, {
      ...record,
      key,
      syncState: "active",
      lastSeenAt: syncedAt,
    });
  }

  for (const [key, record] of mergedByKey.entries()) {
    if (activeKeys.has(key)) {
      continue;
    }

    mergedByKey.set(key, {
      ...record,
      key,
      syncState: "stale",
      lastSeenAt: record.lastSeenAt || record.lastSyncedAt || null,
    });
  }

  return Array.from(mergedByKey.values()).sort((a, b) => {
    if (a.syncState !== b.syncState) {
      return a.syncState === "active" ? -1 : 1;
    }

    return toDateValue(b.updatedAt || b.lastSeenAt) - toDateValue(a.updatedAt || a.lastSeenAt);
  });
}

function mergePortfolioItems(existingItems, freshItems, ignoredKeys = new Set()) {
  const mergedByKey = new Map();

  for (const item of existingItems) {
    const key = resolvePortfolioItemKey(item);

    if (
      !key ||
      ignoredKeys.has(key) ||
      (item?.private === true && item?.allowPrivatePresentation !== true)
    ) {
      continue;
    }

    mergedByKey.set(key, item);
  }

  for (const item of freshItems) {
    const key = resolvePortfolioItemKey(item);

    if (
      !key ||
      ignoredKeys.has(key) ||
      (item?.private === true && item?.allowPrivatePresentation !== true)
    ) {
      continue;
    }

    mergedByKey.set(key, item);
  }

  return Array.from(mergedByKey.values()).sort(
    (a, b) => toDateValue(b.createdAt) - toDateValue(a.createdAt)
  );
}

export async function runGitHubImport({
  env = process.env,
  cwd = process.cwd(),
  logger = console,
} = {}) {
  const config = loadGitHubImportConfig(env, cwd);

  await ensureImportDataStructure(config.paths);

  const apiClient = createGitHubApiClient({
    token: config.token,
    retryAttempts: config.retryAttempts,
    retryBaseDelayMs: config.retryBaseDelayMs,
  });

  log(
    logger,
    "info",
    `[github-import] Iniciando sincronização para "${config.username}" (token configurado: ${
      config.hasToken ? "sim" : "não"
    }).`
  );

  const repositoriesByUrl = new Map();

  const publicRepositories = await apiClient.fetchPublicRepositories(
    config.username,
    config.maxRepos
  );

  for (const repository of publicRepositories) {
    if (repository?.html_url) {
      repositoriesByUrl.set(repository.html_url, repository);
    }
  }

  let authenticatedLogin = null;

  if (config.hasToken) {
    authenticatedLogin = await apiClient.fetchAuthenticatedLogin();

    if (authenticatedLogin.toLowerCase() === config.usernameNormalized) {
      const ownedRepositories = await apiClient.fetchOwnedRepositories(
        config.maxRepos
      );

      for (const repository of ownedRepositories) {
        const ownerLogin = repository?.owner?.login;

        if (
          repository?.html_url &&
          typeof ownerLogin === "string" &&
          ownerLogin.toLowerCase() === config.usernameNormalized
        ) {
          repositoriesByUrl.set(repository.html_url, repository);
        }
      }
    } else {
      log(
        logger,
        "warn",
        `[github-import] Login autenticado "${authenticatedLogin}" é diferente de "${config.username}". Repositórios privados não serão importados.`
      );
    }
  }

  const repositories = Array.from(repositoriesByUrl.values())
    .filter(
      (repository) =>
        typeof repository?.owner?.login === "string" &&
        typeof repository?.name === "string" &&
        typeof repository?.html_url === "string"
    )
    .sort((a, b) => toDateValue(b.updated_at) - toDateValue(a.updated_at))
    .slice(0, config.maxRepos);

  const ignoredRepoKeysRaw = await readJsonFile(
    config.paths.portfolioIgnoreFile,
    []
  );
  const ignoredRepoKeys = normalizeIgnoreRepoKeys(ignoredRepoKeysRaw);
  const repositoriesFilteredByIgnore = repositories.filter((repository) => {
    if (repository?.private === true) {
      return false;
    }
    const owner = typeof repository?.owner?.login === "string" ? repository.owner.login : "";
    const name = typeof repository?.name === "string" ? repository.name : "";
    const repoKey = buildRepositoryKey(owner, name);
    return !ignoredRepoKeys.has(repoKey);
  });

  const syncedAt = new Date().toISOString();
  const syncErrors = [];
  const freshRecords = [];
  const freshPortfolioItems = [];

  for (const repository of repositoriesFilteredByIgnore) {
    const metadata = normalizeGitHubRepositoryMetadata(repository);
    const repoKey = buildRepositoryKey(metadata.owner, metadata.name);
    metadata.repoKey = repoKey;

    let languagesUpdate = { state: "not_found", data: null };
    let readmeUpdate = { state: "not_found", data: null };
    const warnings = [];

    try {
      const languagesByBytes = await apiClient.fetchRepositoryLanguages(
        metadata.owner,
        metadata.name
      );

      if (languagesByBytes) {
        languagesUpdate = {
          state: "updated",
          data: languagesByBytes,
        };
      }
    } catch (error) {
      languagesUpdate = { state: "error", data: null };
      const serializableError = createSerializableError(error, {
        stage: "languages",
        repoKey,
      });
      syncErrors.push(serializableError);
      warnings.push(serializableError.message);
    }

    try {
      const readmeContent = await apiClient.fetchRepositoryReadme(
        metadata.owner,
        metadata.name
      );

      if (readmeContent) {
        readmeUpdate = {
          state: "updated",
          data: readmeContent,
        };
      }
    } catch (error) {
      readmeUpdate = { state: "error", data: null };
      const serializableError = createSerializableError(error, {
        stage: "readme",
        repoKey,
      });
      syncErrors.push(serializableError);
      warnings.push(serializableError.message);
    }

    const snapshot = await upsertRepositoryFiles({
      reposDir: config.paths.reposDir,
      metadata,
      languagesUpdate,
      readmeUpdate,
      syncedAt,
      warnings,
    });

    freshRecords.push({
      key: repoKey,
      owner: metadata.owner,
      name: metadata.name,
      fullName: metadata.fullName,
      repoUrl: metadata.repoUrl,
      private: metadata.private,
      createdAt: metadata.createdAt,
      updatedAt: metadata.updatedAt,
      defaultBranch: metadata.defaultBranch,
      folder: snapshot.folderName,
      syncState: "active",
      lastSyncedAt: syncedAt,
      files: snapshot.files,
      warnings,
    });

    freshPortfolioItems.push(
      mapRepositoryToPortfolioItem({
        metadata,
        languagesByBytes: snapshot.languagesByBytes,
        repoFolder: snapshot.folderName,
      })
    );
  }

  const existingIndex = await readJsonFile(config.paths.indexFile, {
    repositories: [],
  });
  const existingRecords = Array.isArray(existingIndex?.repositories)
    ? existingIndex.repositories
    : [];

  const mergedRecords = mergeRepositoryRecords(
    existingRecords,
    freshRecords,
    syncedAt
  );
  const staleCount = mergedRecords.filter(
    (record) => record.syncState === "stale"
  ).length;

  const existingPortfolioItems = await readJsonFile(
    config.paths.portfolioItemsFile,
    []
  );
  const normalizedExistingPortfolioItems = Array.isArray(existingPortfolioItems)
    ? existingPortfolioItems
    : [];
  const mergedPortfolioItems = mergePortfolioItems(
    normalizedExistingPortfolioItems,
    freshPortfolioItems,
    ignoredRepoKeys
  );

  const consolidatedIndex = {
    schemaVersion: 1,
    generatedAt: syncedAt,
    username: config.username,
    authenticatedLogin,
    hasToken: config.hasToken,
    maxRepos: config.maxRepos,
    totals: {
      indexed: mergedRecords.length,
      active: freshRecords.length,
      stale: staleCount,
      errors: syncErrors.length,
    },
    errors: syncErrors,
    repositories: mergedRecords,
  };

  await writeJsonFileAtomic(config.paths.indexFile, consolidatedIndex);
  await writeJsonFileAtomic(config.paths.portfolioItemsFile, mergedPortfolioItems);

  log(
    logger,
    "info",
    `[github-import] Sincronização concluída. Ativos: ${freshRecords.length}, stale: ${staleCount}, erros: ${syncErrors.length}.`
  );

  return {
    generatedAt: syncedAt,
    authenticatedLogin,
    totals: consolidatedIndex.totals,
  };
}
