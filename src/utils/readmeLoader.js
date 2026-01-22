/**
 * Utilitário para carregar arquivos README dinamicamente
 */

// Importa todos os READMEs como strings
import landingReadme from '../assets/readmes/landing-felixoverse.md?raw';
import mixerReadme from '../assets/readmes/mixer-de-samples.md?raw';
import botsReadme from '../assets/readmes/bots-automacao.md?raw';
import argReadme from '../assets/readmes/arg-blocks.md?raw';
import djReadme from '../assets/readmes/thumbnails-para-dj.md?raw';
import htmlReadme from '../assets/readmes/html.md?raw';

// Mapeamento de projetos para conteúdo README
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
  "Projeto Windows": `# Projeto Windows\n\n> Desenvolvimento Windows\n\nProjetos Windows.`
};

/**
 * Carrega o conteúdo do README para um projeto
 * @param {string} projectTitle - Título do projeto
 * @returns {Promise<string>} Conteúdo do README
 */
export async function loadReadme(projectTitle) {
  const content = README_CONTENT[projectTitle];
  
  if (!content) {
    return `# ${projectTitle}\n\n> README não encontrado para este projeto.\n\nEste projeto ainda não possui documentação específica.`;
  }

  return content;
}

/**
 * Carrega README de forma síncrona (placeholder até o async carregar)
 * @param {string} projectTitle - Título do projeto  
 * @returns {string} README placeholder
 */
export function getReadmePlaceholder(projectTitle) {
  return `# ${projectTitle}\n\n> Carregando documentação...\n\nO README está sendo carregado dinamicamente.`;
}