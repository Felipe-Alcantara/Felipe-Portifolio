/**
 * Alternativa usando import dinâmico para carregar READMEs
 */

// Função para carregar README usando import dinâmico
export async function loadReadmeAlt(projectTitle) {
  const fileMap = {
    "Projeto Landing FelixoVerse": () => import("/repos/landing-felixoverse.md?raw"),
    "Projeto Mixer de Samples": () => import("/repos/mixer-de-samples.md?raw"),
    "Projeto Bots & Automação": () => import("/repos/bots-automacao.md?raw"),
    "Projeto ARG Blocks": () => import("/repos/arg-blocks.md?raw"),
    "Projeto Thumbnails para DJ": () => import("/repos/thumbnails-para-dj.md?raw"),
    "Projeto HTML": () => import("/repos/html.md?raw"),
  };

  try {
    const loader = fileMap[projectTitle];
    if (!loader) {
      return `# ${projectTitle}\n\n> README não encontrado.\n\nEste projeto ainda não possui documentação específica.`;
    }

    const module = await loader();
    return module.default;
  } catch (error) {
    console.error(`Erro ao carregar README para ${projectTitle}:`, error);
    return `# ${projectTitle}\n\n> Erro ao carregar documentação.\n\nNão foi possível carregar o README deste projeto.`;
  }
}