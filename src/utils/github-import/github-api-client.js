import {
  GitHubImportError,
  createGitHubStatusError,
  extractRateLimitInfo,
} from "./errors.js";

const GITHUB_API_BASE_URL = "https://api.github.com";
const GITHUB_API_VERSION = "2022-11-28";
const GITHUB_PAGE_SIZE = 100;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function buildApiUrl(endpoint) {
  if (endpoint.startsWith("http://") || endpoint.startsWith("https://")) {
    return endpoint;
  }

  return `${GITHUB_API_BASE_URL}${endpoint}`;
}

function buildRequestHeaders(token, acceptHeader) {
  const headers = {
    Accept: acceptHeader || "application/vnd.github+json",
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
    "User-Agent": "felixo-portfolio-github-import",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function requestWithRetry({
  endpoint,
  token,
  retryAttempts,
  retryBaseDelayMs,
  acceptHeader,
}) {
  const url = buildApiUrl(endpoint);
  let lastNetworkError = null;

  for (let attempt = 1; attempt <= retryAttempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: buildRequestHeaders(token, acceptHeader),
      });

      if (response.status >= 500 && response.status < 600) {
        if (attempt < retryAttempts) {
          await sleep(retryBaseDelayMs * 2 ** (attempt - 1));
          continue;
        }

        throw createGitHubStatusError(
          response.status,
          endpoint,
          extractRateLimitInfo(response)
        );
      }

      return response;
    } catch (error) {
      if (error instanceof GitHubImportError) {
        throw error;
      }

      lastNetworkError = error;

      if (attempt < retryAttempts) {
        await sleep(retryBaseDelayMs * 2 ** (attempt - 1));
      }
    }
  }

  throw new GitHubImportError(
    "Falha de rede ao acessar a API do GitHub após as tentativas de retry.",
    {
      code: "GITHUB_NETWORK_ERROR",
      endpoint,
      retriable: true,
      cause: lastNetworkError,
    }
  );
}

export function createGitHubApiClient({
  token,
  retryAttempts = 3,
  retryBaseDelayMs = 500,
}) {
  async function requestJson(endpoint, { allowNotFound = false } = {}) {
    const response = await requestWithRetry({
      endpoint,
      token,
      retryAttempts,
      retryBaseDelayMs,
    });

    if (!response.ok) {
      if (allowNotFound && response.status === 404) {
        return null;
      }

      throw createGitHubStatusError(
        response.status,
        endpoint,
        extractRateLimitInfo(response)
      );
    }

    return response.json();
  }

  async function requestText(
    endpoint,
    { allowNotFound = false, acceptHeader } = {}
  ) {
    const response = await requestWithRetry({
      endpoint,
      token,
      retryAttempts,
      retryBaseDelayMs,
      acceptHeader,
    });

    if (!response.ok) {
      if (allowNotFound && response.status === 404) {
        return null;
      }

      throw createGitHubStatusError(
        response.status,
        endpoint,
        extractRateLimitInfo(response)
      );
    }

    return response.text();
  }

  async function fetchPaginatedRepositories(endpointBuilder, maxRepos) {
    const repositories = [];
    let page = 1;

    while (repositories.length < maxRepos) {
      const endpoint = endpointBuilder(page);
      const responseData = await requestJson(endpoint);

      if (!Array.isArray(responseData)) {
        throw new GitHubImportError(
          "A API do GitHub retornou um formato inesperado para listagem de repositórios.",
          {
            code: "GITHUB_INVALID_PAYLOAD",
            endpoint,
          }
        );
      }

      if (responseData.length === 0) {
        break;
      }

      for (const repository of responseData) {
        repositories.push(repository);

        if (repositories.length >= maxRepos) {
          break;
        }
      }

      if (responseData.length < GITHUB_PAGE_SIZE) {
        break;
      }

      page += 1;
    }

    return repositories;
  }

  async function fetchAuthenticatedLogin() {
    if (!token) {
      return null;
    }

    const data = await requestJson("/user");
    const login = typeof data?.login === "string" ? data.login.trim() : "";

    if (!login) {
      throw new GitHubImportError(
        "Não foi possível identificar o usuário autenticado pelo token informado.",
        {
          code: "GITHUB_AUTH_USER_MISSING",
          endpoint: "/user",
        }
      );
    }

    return login;
  }

  return {
    async fetchAuthenticatedLogin() {
      return fetchAuthenticatedLogin();
    },

    async fetchPublicRepositories(username, maxRepos) {
      const encodedUsername = encodeURIComponent(username);
      return fetchPaginatedRepositories(
        (page) =>
          `/users/${encodedUsername}/repos?per_page=${GITHUB_PAGE_SIZE}&page=${page}&sort=updated&type=owner`,
        maxRepos
      );
    },

    async fetchOwnedRepositories(maxRepos) {
      return fetchPaginatedRepositories(
        (page) =>
          `/user/repos?per_page=${GITHUB_PAGE_SIZE}&page=${page}&sort=updated&visibility=public&affiliation=owner`,
        maxRepos
      );
    },

    async fetchRepositoryLanguages(owner, repositoryName) {
      const endpoint = `/repos/${encodeURIComponent(
        owner
      )}/${encodeURIComponent(repositoryName)}/languages`;
      const data = await requestJson(endpoint, { allowNotFound: true });

      if (data === null) {
        return null;
      }

      if (typeof data !== "object" || Array.isArray(data)) {
        throw new GitHubImportError(
          "Formato inválido no endpoint de linguagens do GitHub.",
          {
            code: "GITHUB_INVALID_LANGUAGES_PAYLOAD",
            endpoint,
          }
        );
      }

      return data;
    },

    async fetchRepositoryReadme(owner, repositoryName) {
      const endpoint = `/repos/${encodeURIComponent(
        owner
      )}/${encodeURIComponent(repositoryName)}/readme`;
      const readme = await requestText(endpoint, {
        allowNotFound: true,
        acceptHeader: "application/vnd.github.v3.raw",
      });

      if (readme === null) {
        return null;
      }

      const trimmedReadme = readme.trim();
      return trimmedReadme.length > 0 ? readme : null;
    },
  };
}
