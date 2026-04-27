import React from "react";
import {
  Rocket,
  Music,
  Code,
  Palette,
  Puzzle,
  Monitor,
  Wind,
  Bot,
  GitMerge,
  Github,
  Terminal,
  FileJson,
  Server,
  Pipette,
  Layers,
  BookOpen,
} from "lucide-react";
import { getProjectRoute } from "../utils/project-routes.js";
import generatedPortfolioItems from "./github-import/portfolio-items.generated.json";
import overridePortfolioItems from "./github-import/portfolio-items.overrides.json";

/**
 * =============================================================================
 * ARQUIVO DE DADOS DO PORTFÓLIO
 * =============================================================================
 *
 * Prioridade da fonte de dados:
 * 1. `src/data/github-import/portfolio-items.generated.json`
 * 2. `src/data/github-import/portfolio-items.overrides.json` (merge por `repoKey`)
 * 3. Lista de fallback local (placeholders)
 * =============================================================================
 */

const ICONS = {
  web: <Monitor size={16} />,
  music: <Music size={16} />,
  code: <Code size={16} />,
  design: <Palette size={16} />,
  game: <Puzzle size={16} />,
  automation: <Bot size={16} />,
  estudo: <BookOpen size={16} />,
  default: <Rocket size={16} />,
  html: <Code size={16} />,
  css: <Pipette size={16} />,
  js: <FileJson size={16} />,
  ts: <FileJson size={16} />,
  tailwind: <Wind size={16} />,
  react: <Layers size={16} />,
  vite: <Rocket size={16} />,
  python: <Code size={16} />,
  brython: <Code size={16} />,
  django: <Server size={16} />,
  csharp: <Code size={16} />,
  git: <GitMerge size={16} />,
  github: <Github size={16} />,
  vscode: <Terminal size={16} />,
  windows: <Monitor size={16} />,
};

const COLORS = {
  web: "bg-blue-700",
  music: "bg-purple-700",
  code: "bg-gray-600",
  design: "bg-pink-700",
  game: "bg-green-700",
  automation: "bg-orange-700",
  estudo: "bg-indigo-700",
  default: "bg-zinc-800",
  html: "bg-red-700",
  css: "bg-blue-600",
  js: "bg-yellow-600",
  ts: "bg-blue-700",
  tailwind: "bg-cyan-700",
  react: "bg-sky-600",
  vite: "bg-purple-600",
  python: "bg-yellow-700",
  brython: "bg-yellow-800",
  django: "bg-green-800",
  csharp: "bg-purple-700",
  git: "bg-red-600",
  github: "bg-gray-700",
  vscode: "bg-blue-800",
  windows: "bg-blue-900",
};

const CATEGORY_LABELS = {
  all: "Tudo",
  web: "Web",
  code: "Code",
  music: "Music",
  design: "Design",
  game: "Game",
  automation: "Automação",
  estudo: "Estudo",
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  ts: "TypeScript",
  tailwind: "Tailwind",
  react: "React",
  vite: "Vite",
  python: "Python",
  brython: "Brython",
  django: "Django",
  csharp: "C#",
  git: "Git",
  github: "GitHub",
  vscode: "VSCode",
  windows: "Windows",
};

const fallbackProjects = [
  {
    title: "Landing FelixoVerse",
    tag: "web",
    description: "Hero, navbar e carrossel contínuo, demonstrando UI moderna.",
    link: "https://example.com/landing",
    createdAt: "2024-01-20",
    status: "Finalizado",
    links: {
      github: "https://github.com/felixo/landing-felixoverse",
      site: "https://landing-felixoverse.vercel.app",
      demo: "https://youtube.com/watch?v=demo1",
      download: "https://github.com/felixo/landing-felixoverse/archive/main.zip",
      post: "https://blog.felixoverse.com/landing-project",
    },
  },
  {
    title: "Mixer de Samples",
    tag: "web",
    description: "Ferramenta no navegador para combinar loops de áudio.",
    link: "https://example.com/mixer",
    createdAt: "2024-02-15",
    status: "Em Desenvolvimento",
    links: {
      github: "https://github.com/felixo/mixer-samples",
      site: "https://mixer-samples.vercel.app",
      demo: "https://youtube.com/watch?v=demo2",
      download: "https://github.com/felixo/mixer-samples/releases",
      post: "https://blog.felixoverse.com/mixer-project",
    },
  },
  {
    title: "Bots & Automação",
    tag: "automation",
    description: "Coleção de scripts Python para automação de tarefas.",
    link: "https://example.com/bots",
    createdAt: "2024-03-10",
    status: "Em Desenvolvimento",
    links: {
      github: "https://github.com/felixo/bots-automacao",
      site: "https://bots.felixoverse.com",
      demo: "https://youtube.com/watch?v=demo3",
      download: "https://github.com/felixo/bots-automacao/releases",
      post: "https://blog.felixoverse.com/bots-project",
    },
  },
  {
    title: "ARG Blocks",
    tag: "game",
    description: "Componentes base para criar puzzles criptográficos.",
    link: "https://example.com/arg",
    createdAt: "2024-04-05",
    status: "Finalizado",
    links: {
      github: "https://github.com/felixo/arg-blocks",
      site: "https://arg-blocks.felixoverse.com",
      demo: "https://youtube.com/watch?v=demo4",
      download: "https://github.com/felixo/arg-blocks/releases",
      post: "https://blog.felixoverse.com/arg-project",
    },
  },
  {
    title: "Thumbnails para DJ",
    tag: "design",
    description: "Presets de capas para sets de música no estilo neon/pastel.",
    link: "https://example.com/dj-thumbnails",
    createdAt: "2024-05-20",
    status: "Em Desenvolvimento",
    links: {
      github: "https://github.com/felixo/dj-thumbnails",
      site: "https://thumbnails.felixoverse.com",
      demo: "https://youtube.com/watch?v=demo5",
      download: "https://github.com/felixo/dj-thumbnails/releases",
      post: "https://blog.felixoverse.com/thumbnails-project",
    },
  },
  {
    title: "HTML",
    tag: "html",
    description: "Projetos semânticos e estruturados.",
    createdAt: "2024-06-01",
    status: "Em Desenvolvimento",
  },
  {
    title: "CSS",
    tag: "css",
    description: "Estilização com foco em design responsivo.",
    createdAt: "2024-06-02",
    status: "Em Desenvolvimento",
  },
  {
    title: "JavaScript",
    tag: "js",
    description: "Interatividade e manipulação do DOM.",
    createdAt: "2024-06-03",
    status: "Em Desenvolvimento",
  },
  {
    title: "TypeScript",
    tag: "ts",
    description: "Código JS com tipagem estática para maior robustez.",
    createdAt: "2024-06-04",
    status: "Em Desenvolvimento",
  },
  {
    title: "Tailwind CSS",
    tag: "tailwind",
    description: "CSS utilitário para desenvolvimento rápido.",
    createdAt: "2024-06-05",
    status: "Em Desenvolvimento",
  },
  {
    title: "React",
    tag: "react",
    description: "Criação de UIs reativas e componentizadas.",
    createdAt: "2024-06-06",
    status: "Em Desenvolvimento",
  },
  {
    title: "Vite",
    tag: "vite",
    description: "Build tool moderno e ultra-rápido para front-end.",
    createdAt: "2024-06-07",
    status: "Em Desenvolvimento",
  },
  {
    title: "Python",
    tag: "python",
    description: "Scripts, automação e desenvolvimento back-end.",
    createdAt: "2024-06-08",
    status: "Em Desenvolvimento",
  },
  {
    title: "Brython",
    tag: "brython",
    description: "Python no navegador para scripting web.",
    createdAt: "2024-06-09",
    status: "Em Desenvolvimento",
  },
  {
    title: "Django",
    tag: "django",
    description: "Framework web de alto nível em Python.",
    createdAt: "2024-06-10",
    status: "Em Desenvolvimento",
  },
  {
    title: "C#",
    tag: "csharp",
    description: "Aplicações robustas no ecossistema .NET.",
    createdAt: "2024-06-11",
    status: "Em Desenvolvimento",
  },
  {
    title: "Git",
    tag: "git",
    description: "Controle de versão para gerenciamento de código.",
    createdAt: "2024-06-12",
    status: "Em Desenvolvimento",
  },
  {
    title: "GitHub",
    tag: "github",
    description: "Plataforma de hospedagem e colaboração de código.",
    createdAt: "2024-06-13",
    status: "Em Desenvolvimento",
  },
  {
    title: "VSCode",
    tag: "vscode",
    description: "Editor de código fonte com superpoderes.",
    createdAt: "2024-06-14",
    status: "Em Desenvolvimento",
  },
  {
    title: "Windows",
    tag: "windows",
    description: "Desenvolvimento e automação em ambiente Windows.",
    createdAt: "2024-06-15",
    status: "Em Desenvolvimento",
  },
];

function normalizeRepoKey(repoKey) {
  return typeof repoKey === "string" ? repoKey.trim().toLowerCase() : "";
}

function hasRenderableProjectData(project) {
  if (!project || typeof project !== "object") {
    return false;
  }

  return typeof project.title === "string" && project.title.trim().length > 0;
}

function mergeGeneratedWithOverrides(generatedItems, overrideItems) {
  const normalizedGeneratedItems = Array.isArray(generatedItems) ? generatedItems : [];
  const normalizedOverrideItems = Array.isArray(overrideItems) ? overrideItems : [];

  const overridesByRepoKey = new Map();

  for (const overrideItem of normalizedOverrideItems) {
    const repoKey = normalizeRepoKey(overrideItem?.repoKey);

    if (!repoKey) {
      continue;
    }

    overridesByRepoKey.set(repoKey, overrideItem);
  }

  const generatedRepoKeys = new Set();

  const mergedItems = normalizedGeneratedItems.map((generatedItem) => {
    const repoKey = normalizeRepoKey(generatedItem?.repoKey);

    if (repoKey) {
      generatedRepoKeys.add(repoKey);
    }

    if (!repoKey || !overridesByRepoKey.has(repoKey)) {
      return generatedItem;
    }

    return {
      ...generatedItem,
      ...overridesByRepoKey.get(repoKey),
      repoKey: generatedItem.repoKey,
    };
  });

  const overrideOnlyItems = [];

  for (const [repoKey, overrideItem] of overridesByRepoKey.entries()) {
    if (!generatedRepoKeys.has(repoKey) && hasRenderableProjectData(overrideItem)) {
      overrideOnlyItems.push(overrideItem);
    }
  }

  return [...mergedItems, ...overrideOnlyItems];
}

const hasGeneratedItems =
  Array.isArray(generatedPortfolioItems) && generatedPortfolioItems.length > 0;
const mergedGeneratedProjects = hasGeneratedItems
  ? mergeGeneratedWithOverrides(generatedPortfolioItems, overridePortfolioItems)
  : [];
const hasImportedProjects = mergedGeneratedProjects.length > 0;
const baseProjects = (hasImportedProjects ? mergedGeneratedProjects : fallbackProjects).filter(
  (p) => !p.hidden
);

function normalizeTag(tag) {
  return String(tag || "code")
    .trim()
    .toLowerCase();
}

function formatTagLabel(tag) {
  const normalizedTag = normalizeTag(tag);
  const mappedLabel = CATEGORY_LABELS[normalizedTag];

  if (mappedLabel) {
    return mappedLabel;
  }

  return normalizedTag
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function generateGitHubZipUrl(githubUrl) {
  if (typeof githubUrl !== "string" || !githubUrl.trim()) {
    return "#";
  }

  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)\/?$/);
  if (!match) {
    return "#";
  }

  const [, owner, repo] = match;
  return `https://github.com/${owner}/${repo}/archive/refs/heads/main.zip`;
}

function normalizeLinks(rawLinks, fallbackLink, projectData) {
  const links = rawLinks && typeof rawLinks === "object" ? rawLinks : {};

  const githubUrl =
    typeof links.github === "string" && links.github.trim()
      ? links.github.trim()
      : fallbackLink;

  const rawDownload = typeof links.download === "string" ? links.download.trim() : "";
  const downloadUrl =
    rawDownload && rawDownload !== "#"
      ? rawDownload
      : generateGitHubZipUrl(githubUrl);

  // Por padrão, o link de post leva para a página do projeto
  const defaultPostUrl = projectData ? getProjectRoute(projectData) : "#";
  const postUrl =
    typeof links.post === "string" && links.post.trim() ? links.post.trim() : defaultPostUrl;

  return {
    github: githubUrl,
    site:
      typeof links.site === "string" && links.site.trim() ? links.site.trim() : "#",
    demo:
      typeof links.demo === "string" && links.demo.trim() ? links.demo.trim() : "#",
    download: downloadUrl,
    post: postUrl,
  };
}

function normalizeProperties(rawProperties, fallbackTag) {
  const properties =
    rawProperties && typeof rawProperties === "object" ? rawProperties : {};

  const defaultTech = {};
  defaultTech[fallbackTag] = 100;

  return {
    timeEstimated:
      typeof properties.timeEstimated === "string" && properties.timeEstimated.trim()
        ? properties.timeEstimated.trim()
        : "2 semanas",
    size:
      typeof properties.size === "string" && properties.size.trim()
        ? properties.size.trim()
        : "Médio",
    online:
      typeof properties.online === "boolean" ? properties.online : Boolean(properties.online),
    techPercentage:
      properties.techPercentage &&
      typeof properties.techPercentage === "object" &&
      !Array.isArray(properties.techPercentage)
        ? properties.techPercentage
        : defaultTech,
  };
}

function normalizeProject(project) {
  const tag = normalizeTag(project?.tag);
  const extraTags = Array.isArray(project?.extraTags)
    ? project.extraTags.map(normalizeTag).filter(Boolean)
    : [];
  const tags = Array.from(new Set([tag, ...extraTags]));
  const rawTitle =
    typeof project?.title === "string" && project.title.trim()
      ? project.title.trim()
      : "Projeto sem título";
  const normalizedTitle = hasImportedProjects
    ? rawTitle
    : rawTitle.startsWith("Projetos ")
    ? rawTitle
    : `Projeto ${rawTitle}`;
  const description =
    typeof project?.desc === "string" && project.desc.trim()
      ? project.desc.trim()
      : typeof project?.description === "string" && project.description.trim()
      ? project.description.trim()
      : "Sem descrição";
  const fallbackLink =
    typeof project?.link === "string" && project.link.trim() ? project.link.trim() : "#";
  const normalizedLinks = normalizeLinks(project?.links, fallbackLink, project);

  const stack = Array.isArray(project?.stack) && project.stack.length > 0
    ? project.stack
    : [tag, "React", "Tailwind"];

  let status =
    typeof project?.status === "string" && project.status.trim()
      ? project.status.trim()
      : "Em Desenvolvimento";

  // Projetos com tag "estudo" não podem ter status "Finalizado" ou "Em Desenvolvimento"
  if (tag === "estudo" && (status === "Finalizado" || status === "Em Desenvolvimento")) {
    status = "";
  }

  return {
    title: normalizedTitle,
    tag,
    tags,
    desc: description,
    link:
      typeof project?.link === "string" && project.link.trim()
        ? project.link.trim()
        : normalizedLinks.github,
    createdAt:
      typeof project?.createdAt === "string" && project.createdAt.trim()
        ? project.createdAt.trim()
        : "",
    lastCommitAt:
      typeof project?.updatedAt === "string" && project.updatedAt.trim()
        ? project.updatedAt.trim()
        : typeof project?.createdAt === "string" && project.createdAt.trim()
        ? project.createdAt.trim()
        : "",
    status,
    complexity:
      typeof project?.complexity === "string" && project.complexity.trim()
        ? project.complexity.trim()
        : "Média",
    stack,
    properties: normalizeProperties(project?.properties, tag),
    links: normalizedLinks,
    repoKey: project?.repoKey,
    repoFolder: project?.repoFolder,
  };
}

const normalizedProjects = baseProjects.map(normalizeProject);
const dynamicTagIds = Array.from(
  new Set(normalizedProjects.map((project) => normalizeTag(project.tag)))
);

export const CATEGORIES = [
  { id: "all", label: "Tudo" },
  ...dynamicTagIds.map((tagId) => ({
    id: tagId,
    label: formatTagLabel(tagId),
  })),
];

export const items = normalizedProjects.map((project) => ({
  ...project,
  icon: ICONS[project.tag] || ICONS.default,
  tagColor: COLORS[project.tag] || COLORS.default,
}));

export const tags = CATEGORIES;
export const allProjects = items;
