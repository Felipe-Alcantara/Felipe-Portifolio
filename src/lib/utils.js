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
export const loop = (arr) => [...arr, ...arr, ...arr];

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
