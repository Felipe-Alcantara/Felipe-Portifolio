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
