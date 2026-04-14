import path from "node:path";
import { GitHubImportConfigError } from "./errors.js";

const DEFAULT_MAX_REPOS = 500;
const DEFAULT_RETRY_ATTEMPTS = 3;
const DEFAULT_RETRY_BASE_DELAY_MS = 500;

function parsePositiveInteger(rawValue, variableName, defaultValue) {
  if (rawValue === undefined || rawValue === null || rawValue === "") {
    return defaultValue;
  }

  const parsed = Number.parseInt(String(rawValue), 10);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new GitHubImportConfigError(
      `${variableName} precisa ser um inteiro positivo.`
    );
  }

  return parsed;
}

export function loadGitHubImportConfig(env = process.env, cwd = process.cwd()) {
  const username = String(env.GITHUB_USERNAME || "").trim();

  if (!username) {
    throw new GitHubImportConfigError(
      "A variável GITHUB_USERNAME é obrigatória para executar a sincronização."
    );
  }

  const tokenValue = String(env.GITHUB_TOKEN || "").trim();
  const maxRepos = parsePositiveInteger(
    env.GITHUB_IMPORT_MAX_REPOS,
    "GITHUB_IMPORT_MAX_REPOS",
    DEFAULT_MAX_REPOS
  );

  const dataDir = path.resolve(cwd, "src/data/github-import");
  const reposDir = path.resolve(dataDir, "repos");

  return {
    username,
    usernameNormalized: username.toLowerCase(),
    token: tokenValue || null,
    hasToken: Boolean(tokenValue),
    maxRepos,
    retryAttempts: DEFAULT_RETRY_ATTEMPTS,
    retryBaseDelayMs: DEFAULT_RETRY_BASE_DELAY_MS,
    paths: {
      dataDir,
      reposDir,
      indexFile: path.resolve(dataDir, "index.json"),
      portfolioItemsFile: path.resolve(
        dataDir,
        "portfolio-items.generated.json"
      ),
    },
  };
}
