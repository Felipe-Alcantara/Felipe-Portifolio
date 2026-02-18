/**
 * FUNÇÕES UTILITÁRIAS
 * ===================
 */

/**
 * cx - Combina classes CSS condicionalmente
 * 
 * Uso: cx("classe-base", condicao && "classe-condicional", "outra-classe")
 * Remove valores falsy (null, undefined, false) e junta as classes com espaço
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * loop - Triplica um array para criar efeito de carrossel infinito
 * 
 * Usado na seção Portfolio para que os cards se repitam e criem
 * a ilusão de rolagem infinita
 */
export const loop = (arr) => {
  if (!arr || arr.length === 0) return [];

  // Garante itens suficientes para cobrir telas largas (evita "pulos" visuais)
  // Se a lista for pequena, repetimos ela até ter pelo menos 6 itens
  let filled = [...arr];
  while (filled.length < 6) {
    filled = [...filled, ...arr];
  }

  // Triplica o array preenchido (buffer inicial, conteúdo, buffer final)
  return [...filled, ...filled, ...filled];
};

/**
 * Retorna um objeto de estilo para aplicar uma intensidade personalizada ao glow
 * Uso: <span style={felixoGlowIntensityStyle(150)}>texto</span> // 150% intensidade
 */
export function felixoGlowIntensityStyle(percent) {
  const p = Math.max(0, Math.min(percent, 200));
  const value = p / 100;
  return { "--felixo-glow-intensity": value };
}

/**
 * Retorna uma classe utilitária existente (25/50/75/100/150) ou 100 se inválida
 * Uso: className={getFelixoGlowClass(75)}
 */
export function getFelixoGlowClass(percent) {
  const allowed = [25, 50, 75, 100, 150];
  const p = allowed.includes(percent) ? percent : 100;
  return `felixo-glow-intensity-${p}`;
}

/**
 * getTagColor - Retorna classes de cor do Tailwind com base na tag da tecnologia
 * 
 * @param {string} tag - A tag do projeto (ex: "python", "react").
 * @returns {string} Uma string de classes do Tailwind.
 */
export const getTagColor = (tag) => {
  const colors = {
    python: "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/20",
    brython: "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/20",
    js: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20",
    ts: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20",
    html: "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20",
    css: "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20",
    react: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20",
    tailwind: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
    vite: "bg-[#646CFF]/10 text-[#646CFF] border-[#646CFF]/20",
    django: "bg-[#092E20]/50 text-[#44B78B] border-[#44B78B]/20",
    csharp: "bg-[#512BD4]/10 text-[#512BD4] border-[#512BD4]/20",
    git: "bg-[#F05032]/10 text-[#F05032] border-[#F05032]/20",
    github: "bg-white/10 text-white border-white/20",
    vscode: "bg-[#007ACC]/10 text-[#007ACC] border-[#007ACC]/20",
    windows: "bg-[#0078D6]/10 text-[#0078D6] border-[#0078D6]/20",
    web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    code: "bg-green-500/10 text-green-400 border-green-500/20",
    music: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    game: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    automation: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };
  return colors[tag.toLowerCase()] || "bg-zinc-800 text-zinc-400 border-transparent";
};
