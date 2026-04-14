function formatRateLimitReset(resetEpochSeconds) {
  if (!Number.isFinite(resetEpochSeconds) || resetEpochSeconds <= 0) {
    return null;
  }

  return new Date(resetEpochSeconds * 1000).toISOString();
}

function buildForbiddenHint(rateLimitInfo) {
  if (!rateLimitInfo) {
    return "";
  }

  const remainingPart =
    Number.isInteger(rateLimitInfo.remaining) && rateLimitInfo.remaining >= 0
      ? `remaining=${rateLimitInfo.remaining}`
      : "remaining=desconhecido";
  const limitPart =
    Number.isInteger(rateLimitInfo.limit) && rateLimitInfo.limit > 0
      ? `limit=${rateLimitInfo.limit}`
      : "limit=desconhecido";
  const resetAt = formatRateLimitReset(rateLimitInfo.reset);
  const resetPart = resetAt ? `reset=${resetAt}` : "reset=desconhecido";

  return ` (${remainingPart}, ${limitPart}, ${resetPart})`;
}

export class GitHubImportError extends Error {
  constructor(
    message,
    {
      code = "GITHUB_IMPORT_ERROR",
      status = null,
      endpoint = null,
      rateLimitInfo = null,
      retriable = false,
      cause = null,
    } = {}
  ) {
    super(message);
    this.name = "GitHubImportError";
    this.code = code;
    this.status = status;
    this.endpoint = endpoint;
    this.rateLimitInfo = rateLimitInfo;
    this.retriable = retriable;

    if (cause) {
      this.cause = cause;
    }
  }
}

export class GitHubImportConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "GitHubImportConfigError";
  }
}

export function extractRateLimitInfo(response) {
  const remainingHeader = response.headers.get("x-ratelimit-remaining");
  const limitHeader = response.headers.get("x-ratelimit-limit");
  const resetHeader = response.headers.get("x-ratelimit-reset");

  return {
    remaining:
      remainingHeader !== null ? Number.parseInt(remainingHeader, 10) : null,
    limit: limitHeader !== null ? Number.parseInt(limitHeader, 10) : null,
    reset: resetHeader !== null ? Number.parseInt(resetHeader, 10) : null,
  };
}

export function createGitHubStatusError(
  status,
  endpoint,
  rateLimitInfo = null
) {
  if (status === 401) {
    return new GitHubImportError(
      "GitHub retornou 401: token inválido, expirado ou sem permissão.",
      {
        code: "GITHUB_UNAUTHORIZED",
        status,
        endpoint,
        rateLimitInfo,
      }
    );
  }

  if (status === 403) {
    return new GitHubImportError(
      `GitHub retornou 403: acesso negado ou limite de taxa atingido${buildForbiddenHint(
        rateLimitInfo
      )}.`,
      {
        code: "GITHUB_FORBIDDEN",
        status,
        endpoint,
        rateLimitInfo,
      }
    );
  }

  if (status === 404) {
    return new GitHubImportError(
      "GitHub retornou 404: recurso não encontrado para o endpoint solicitado.",
      {
        code: "GITHUB_NOT_FOUND",
        status,
        endpoint,
        rateLimitInfo,
      }
    );
  }

  if (status >= 500 && status < 600) {
    return new GitHubImportError(
      `GitHub retornou ${status}: falha temporária do servidor após as tentativas de retry.`,
      {
        code: "GITHUB_SERVER_ERROR",
        status,
        endpoint,
        rateLimitInfo,
        retriable: true,
      }
    );
  }

  return new GitHubImportError(`GitHub retornou ${status}.`, {
    code: "GITHUB_HTTP_ERROR",
    status,
    endpoint,
    rateLimitInfo,
  });
}
