/**
 * Utilitário para carregar arquivos README dinamicamente
 */

// Importa READMEs estáticos legados como strings
import landingReadme from "../assets/readmes/landing-felixoverse.md?raw";
import mixerReadme from "../assets/readmes/mixer-de-samples.md?raw";
import botsReadme from "../assets/readmes/bots-automacao.md?raw";
import argReadme from "../assets/readmes/arg-blocks.md?raw";
import djReadme from "../assets/readmes/thumbnails-para-dj.md?raw";
import htmlReadme from "../assets/readmes/html.md?raw";

// Importa READMEs gerados pelo sincronizador interno do GitHub.
const IMPORTED_READMES = import.meta.glob(
  "../data/github-import/repos/*/readme.md",
  {
    query: "?raw",
    import: "default",
  }
);

const README_CONTENT = {
  "Projeto Landing FelixoVerse": landingReadme,
  "Projeto Mixer de Samples": mixerReadme,
  "Projeto Bots & Automação": botsReadme,
  "Projeto ARG Blocks": argReadme,
  "Projeto Thumbnails para DJ": djReadme,
  "Projeto HTML": htmlReadme,
  "Projeto CSS": `# Projeto CSS\n\n> Estilização com foco em design responsivo\n\nProjetos focados em CSS moderno e responsivo.`,
  "Projeto JavaScript": `# Projeto JavaScript\n\n> Interatividade e manipulação do DOM\n\nProjetos com JavaScript vanilla e moderno.`,
  "Projeto TypeScript": `# Projeto TypeScript\n\n> Código JS com tipagem estática\n\nProjetos TypeScript para maior robustez.`,
  "Projeto Tailwind CSS": `# Projeto Tailwind CSS\n\n> CSS utilitário para desenvolvimento rápido\n\nProjetos usando Tailwind CSS.`,
  "Projeto React": `# Projeto React\n\n> Criação de UIs reativas\n\nProjetos React modernos.`,
  "Projeto Vite": `# Projeto Vite\n\n> Build tool moderno\n\nProjetos usando Vite.`,
  "Projeto Python": `# Projeto Python\n\n> Scripts e automação\n\nProjetos Python diversos.`,
  "Projeto Brython": `# Projeto Brython\n\n> Python no navegador\n\nProjetos Brython.`,
  "Projeto Django": `# Projeto Django\n\n> Framework web Python\n\nProjetos Django.`,
  "Projeto C#": `# Projeto C#\n\n> Aplicações .NET\n\nProjetos C#.`,
  "Projeto Git": `# Projeto Git\n\n> Controle de versão\n\nProjetos Git.`,
  "Projeto GitHub": `# Projeto GitHub\n\n> Hospedagem de código\n\nProjetos GitHub.`,
  "Projeto VSCode": `# Projeto VSCode\n\n> Editor de código\n\nProjetos VSCode.`,
  "Projeto Windows": `# Projeto Windows\n\n> Desenvolvimento Windows\n\nProjetos Windows.`,
};

function resolveProjectTitle(projectOrTitle) {
  if (typeof projectOrTitle === "string") {
    return projectOrTitle.trim();
  }

  if (
    projectOrTitle &&
    typeof projectOrTitle === "object" &&
    typeof projectOrTitle.title === "string"
  ) {
    return projectOrTitle.title.trim();
  }

  return "";
}

async function resolveImportedReadme(projectOrTitle) {
  if (!projectOrTitle || typeof projectOrTitle !== "object") {
    return null;
  }

  const repoFolder =
    typeof projectOrTitle.repoFolder === "string"
      ? projectOrTitle.repoFolder.trim()
      : "";

  if (!repoFolder) {
    return null;
  }

  const readmePath = `../data/github-import/repos/${repoFolder}/readme.md`;
  const loader = IMPORTED_READMES[readmePath];

  if (typeof loader !== "function") {
    return null;
  }

  const content = await loader();

  if (typeof content !== "string" || !content.trim()) {
    return null;
  }

  return content;
}

function resolveLegacyReadme(projectTitle) {
  const candidates = [
    projectTitle,
    `Projeto ${projectTitle}`,
    projectTitle.replace(/^Projeto\s+/i, "").trim(),
  ].filter(Boolean);

  for (const candidate of candidates) {
    const content = README_CONTENT[candidate];
    if (content) {
      return content;
    }
  }

  return null;
}

/**
 * Carrega o conteúdo do README para um projeto
 * @param {string|object} projectOrTitle - Título do projeto ou objeto do projeto
 * @returns {Promise<string>} Conteúdo do README
 */
export async function loadReadme(projectOrTitle) {
  const importedReadme = await resolveImportedReadme(projectOrTitle);

  if (importedReadme) {
    return importedReadme;
  }

  const projectTitle = resolveProjectTitle(projectOrTitle);
  const legacyReadme = resolveLegacyReadme(projectTitle);

  if (legacyReadme) {
    return legacyReadme;
  }

  const displayTitle = projectTitle || "Projeto";
  return `# ${displayTitle}\n\n> README não encontrado para este projeto.\n\nEste projeto ainda não possui documentação específica.`;
}

/**
 * Carrega README de forma síncrona (placeholder até o async carregar)
 * @param {string|object} projectOrTitle - Título do projeto ou objeto do projeto
 * @returns {string} README placeholder
 */
export function getReadmePlaceholder(projectOrTitle) {
  const projectTitle = resolveProjectTitle(projectOrTitle) || "Projeto";
  return `# ${projectTitle}\n\n> Carregando documentação...\n\nO README está sendo carregado dinamicamente.`;
}
