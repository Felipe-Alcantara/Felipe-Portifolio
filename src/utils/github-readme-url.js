const IMPORTED_REPO_METADATA = import.meta.glob(
  "../data/github-import/repos/*/metadata.json",
  {
    import: "default",
    eager: true,
  }
);

function normalizeGitHubRepoUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const match = value.trim().match(/^https?:\/\/github\.com\/([^/]+)\/([^/#?]+)/i);

  if (!match) {
    return null;
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/i, ""),
  };
}

function getImportedMetadata(project) {
  const repoFolder =
    typeof project?.repoFolder === "string" ? project.repoFolder.trim() : "";

  if (!repoFolder) {
    return null;
  }

  return IMPORTED_REPO_METADATA[`../data/github-import/repos/${repoFolder}/metadata.json`] || null;
}

export function resolveGitHubRepoContext(project) {
  const importedMetadata = getImportedMetadata(project);
  const fallbackRepo =
    normalizeGitHubRepoUrl(project?.links?.github) || normalizeGitHubRepoUrl(project?.link);

  const owner = importedMetadata?.owner || fallbackRepo?.owner;
  const repo = importedMetadata?.name || fallbackRepo?.repo;
  const branch =
    typeof importedMetadata?.defaultBranch === "string" && importedMetadata.defaultBranch.trim()
      ? importedMetadata.defaultBranch.trim()
      : "main";

  if (!owner || !repo) {
    return null;
  }

  return {
    owner,
    repo,
    branch,
    repoUrl: importedMetadata?.repoUrl || `https://github.com/${owner}/${repo}`,
  };
}

export function getGitHubReadmeUrl(project) {
  const repoContext = resolveGitHubRepoContext(project);

  if (!repoContext) {
    return null;
  }

  return `${repoContext.repoUrl}/blob/${repoContext.branch}/README.md`;
}
