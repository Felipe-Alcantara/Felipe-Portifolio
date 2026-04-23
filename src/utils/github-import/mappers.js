const KEYWORD_TAG_RULES = [
  {
    tag: "automation",
    keywords: [
      "automation",
      "automacao",
      "bot",
      "workflow",
      "crawler",
      "scraper",
      "cli",
      "cron",
      "pipeline",
    ],
  },
  {
    tag: "game",
    keywords: ["game", "jogo", "unity", "godot", "gamedev"],
  },
  {
    tag: "music",
    keywords: ["music", "audio", "sound", "dj", "midi"],
  },
  {
    tag: "design",
    keywords: ["design", "ui", "ux", "figma", "theme", "branding"],
  },
  {
    tag: "web",
    keywords: [
      "web",
      "website",
      "frontend",
      "site",
      "landing",
      "react",
      "reactjs",
      "next",
      "nextjs",
      "vue",
      "vuejs",
      "angular",
      "svelte",
      "html",
      "css",
      "javascript",
      "typescript",
      "jsx",
      "tsx",
    ],
  },
];

const LANGUAGE_TAG_MAP = {
  javascript: "js",
  typescript: "ts",
  html: "html",
  css: "css",
  python: "python",
  brython: "brython",
  django: "django",
  "c#": "csharp",
  csharp: "csharp",
  "c++": "code",
  "c": "code",
  java: "code",
  kotlin: "code",
  ruby: "code",
  php: "code",
  go: "code",
  rust: "code",
  swift: "code",
  shell: "automation",
  powershell: "automation",
};

function normalizeToken(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function buildTokenTerms(tokens) {
  const terms = new Set();

  for (const token of tokens) {
    const normalizedToken = normalizeToken(token);

    if (!normalizedToken) {
      continue;
    }

    terms.add(normalizedToken);

    const splitTerms = normalizedToken.split(/[^a-z0-9+#]+/g).filter(Boolean);
    for (const splitTerm of splitTerms) {
      terms.add(splitTerm);
    }
  }

  return terms;
}

function dedupeCaseInsensitive(values) {
  const seen = new Set();
  const uniqueValues = [];

  for (const value of values) {
    const normalized = normalizeToken(value);

    if (!normalized || seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    uniqueValues.push(String(value).trim());
  }

  return uniqueValues;
}

function normalizeTopics(topics) {
  if (!Array.isArray(topics)) {
    return [];
  }

  return topics
    .filter((topic) => typeof topic === "string" && topic.trim().length > 0)
    .map((topic) => topic.trim());
}

function normalizeLanguageListFromBytes(languagesByBytes) {
  if (!languagesByBytes || typeof languagesByBytes !== "object") {
    return [];
  }

  return Object.entries(languagesByBytes)
    .filter(
      ([language, bytes]) =>
        typeof language === "string" &&
        language.trim().length > 0 &&
        Number.isFinite(Number(bytes)) &&
        Number(bytes) >= 0
    )
    .sort(([, aBytes], [, bBytes]) => Number(bBytes) - Number(aBytes))
    .map(([language]) => language.trim());
}

function inferTagFromKeywords(tokens) {
  const terms = buildTokenTerms(tokens);

  for (const rule of KEYWORD_TAG_RULES) {
    const hasKeyword = rule.keywords.some((keyword) =>
      terms.has(normalizeToken(keyword))
    );

    if (hasKeyword) {
      return rule.tag;
    }
  }

  return null;
}

function inferTagFromLanguage(language) {
  const normalizedLanguage = normalizeToken(language);

  if (!normalizedLanguage) {
    return null;
  }

  return LANGUAGE_TAG_MAP[normalizedLanguage] || null;
}

function normalizeProjectTitle(repositoryName) {
  const baseName = String(repositoryName || "")
    .trim()
    .replace(/[_-]+/g, " ");

  if (!baseName) {
    return "Projeto sem nome";
  }

  return baseName
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (word.length <= 2) {
        return word.toUpperCase();
      }

      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(" ");
}

function inferSizeLabel(sizeKb) {
  if (!Number.isFinite(sizeKb) || sizeKb <= 0) {
    return "Desconhecido";
  }

  if (sizeKb < 500) {
    return "Pequeno";
  }

  if (sizeKb < 5000) {
    return "Médio";
  }

  return "Grande";
}

function inferComplexityLabel(metadata, languagesByBytes) {
  const languageCount = normalizeLanguageListFromBytes(languagesByBytes).length;
  const score =
    metadata.stars * 2 +
    metadata.forks * 2 +
    metadata.topics.length * 5 +
    languageCount * 4;

  if (score >= 250) {
    return "Alta";
  }

  if (score >= 70) {
    return "Média";
  }

  return "Baixa";
}

function buildStack(metadata, languagesByBytes) {
  const languages = normalizeLanguageListFromBytes(languagesByBytes);
  const stack = dedupeCaseInsensitive([
    ...metadata.topics,
    ...languages,
    metadata.language,
  ]);

  return stack.length > 0 ? stack : ["code"];
}

function inferTechnologyPercentages(languagesByBytes) {
  const entries = Object.entries(languagesByBytes || {}).filter(
    ([language, bytes]) =>
      typeof language === "string" &&
      language.trim().length > 0 &&
      Number.isFinite(Number(bytes)) &&
      Number(bytes) > 0
  );

  if (entries.length === 0) {
    return {};
  }

  const total = entries.reduce(
    (accumulator, [, bytes]) => accumulator + Number(bytes),
    0
  );

  if (total <= 0) {
    return {};
  }

  const percentages = {};
  let accumulated = 0;

  entries.forEach(([language, bytes], index) => {
    let currentValue = Math.round((Number(bytes) / total) * 100);

    if (index === entries.length - 1) {
      currentValue = Math.max(0, 100 - accumulated);
    }

    percentages[language] = currentValue;
    accumulated += currentValue;
  });

  return percentages;
}

export function buildRepositoryKey(owner, repositoryName) {
  const ownerPart = normalizeToken(owner);
  const repositoryPart = normalizeToken(repositoryName);

  return `${ownerPart}/${repositoryPart}`;
}

export function buildRepositoryFolder(owner, repositoryName) {
  const sanitize = (value) =>
    String(value || "")
      .trim()
      .replace(/[^a-zA-Z0-9._-]/g, "-");

  return `${sanitize(owner)}__${sanitize(repositoryName)}`;
}

export function normalizeGitHubRepositoryMetadata(repository) {
  const owner =
    typeof repository?.owner?.login === "string"
      ? repository.owner.login.trim()
      : "";
  const name = typeof repository?.name === "string" ? repository.name.trim() : "";

  return {
    owner,
    name,
    fullName:
      typeof repository?.full_name === "string" && repository.full_name.trim()
        ? repository.full_name.trim()
        : `${owner}/${name}`,
    description:
      typeof repository?.description === "string"
        ? repository.description
        : "",
    private: Boolean(repository?.private),
    repoUrl: typeof repository?.html_url === "string" ? repository.html_url : "",
    homepage:
      typeof repository?.homepage === "string" ? repository.homepage.trim() : "",
    topics: normalizeTopics(repository?.topics),
    language:
      typeof repository?.language === "string" ? repository.language.trim() : "",
    stars: Number.isFinite(Number(repository?.stargazers_count))
      ? Number(repository.stargazers_count)
      : 0,
    forks: Number.isFinite(Number(repository?.forks_count))
      ? Number(repository.forks_count)
      : 0,
    createdAt:
      typeof repository?.created_at === "string" ? repository.created_at : "",
    updatedAt:
      typeof repository?.updated_at === "string" ? repository.updated_at : "",
    defaultBranch:
      typeof repository?.default_branch === "string" &&
      repository.default_branch.trim()
        ? repository.default_branch.trim()
        : "main",
    archived: Boolean(repository?.archived),
    sizeKb: Number.isFinite(Number(repository?.size)) ? Number(repository.size) : 0,
  };
}

export function inferRepositoryTag(metadata, languagesByBytes) {
  const stackLanguages = normalizeLanguageListFromBytes(languagesByBytes);
  const tokens = [
    ...metadata.topics.map((topic) => normalizeToken(topic)),
    ...stackLanguages.map((language) => normalizeToken(language)),
    normalizeToken(metadata.language),
  ].filter(Boolean);

  const tagByKeywords = inferTagFromKeywords(tokens);

  if (tagByKeywords) {
    return tagByKeywords;
  }

  const tagByPrimaryLanguage = inferTagFromLanguage(metadata.language);

  if (tagByPrimaryLanguage) {
    return tagByPrimaryLanguage;
  }

  for (const language of stackLanguages) {
    const languageTag = inferTagFromLanguage(language);

    if (languageTag) {
      return languageTag;
    }
  }

  return "code";
}

export function mapRepositoryToPortfolioItem({
  metadata,
  languagesByBytes,
  repoFolder,
}) {
  const tag = inferRepositoryTag(metadata, languagesByBytes);
  const stack = buildStack(metadata, languagesByBytes);

  return {
    title: normalizeProjectTitle(metadata.name),
    tag,
    desc: metadata.description || "Sem descrição",
    link: metadata.repoUrl,
    createdAt: metadata.createdAt,
    updatedAt: metadata.updatedAt,
    status: metadata.archived ? "Finalizado" : "Em Desenvolvimento",
    complexity: inferComplexityLabel(metadata, languagesByBytes),
    stack,
    properties: {
      timeEstimated: metadata.archived ? "Concluído" : "Em evolução",
      size: inferSizeLabel(metadata.sizeKb),
      online: Boolean(metadata.homepage),
      techPercentage: inferTechnologyPercentages(languagesByBytes),
    },
    links: {
      github: metadata.repoUrl,
      site: metadata.homepage || "#",
      demo: "#",
      download: "#",
      post: "#",
    },
    repoKey: buildRepositoryKey(metadata.owner, metadata.name),
    repoFolder,
  };
}
