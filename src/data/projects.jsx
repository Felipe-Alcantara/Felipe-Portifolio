import React from "react";
import { Rocket, Music, Code } from "lucide-react";

/**
 * ARQUIVO DE DADOS - PROJETOS DO PORTFÓLIO
 * =========================================
 * 
 * Este arquivo contém todos os projetos que aparecem no seu portfólio.
 * 
 * COMO ADICIONAR UM NOVO PROJETO:
 * 1. Copie um objeto existente (entre { e },)
 * 2. Cole no final da lista (antes do ])
 * 3. Modifique os campos:
 *    - title: Nome do projeto
 *    - tag: Categoria (web, music, code, game, design)
 *    - desc: Descrição curta do projeto
 *    - link: URL do projeto (ou "#" se ainda não tiver)
 *    - icon: Ícone do lucide-react (<Rocket />, <Music />, <Code />, etc.)
 * 
 * ÍCONES DISPONÍVEIS:
 * Importe novos ícones adicionando na linha 2:
 * import { Rocket, Music, Code, Seu_Novo_Icone } from "lucide-react";
 * 
 * Ver todos os ícones em: https://lucide.dev/icons
 */
export const items = [
  {
    title: "Landing FelixoVerse",
    tag: "web",
    desc: "Hero, navbar e carrossel contínuo.",
    link: "https://example.com/landing",
    icon: <Rocket size={16} />,
  },
  {
    title: "Mixer de Samples",
    tag: "music",
    desc: "Ferramenta para combinar loops no navegador.",
    link: "https://example.com/mixer",
    icon: <Music size={16} />,
  },
  {
    title: "Bots & Automação",
    tag: "code",
    desc: "Coleção de scripts Python úteis.",
    link: "https://example.com/bots",
    icon: <Code size={16} />,
  },
  {
    title: "ARG Blocks",
    tag: "game",
    desc: "Blocos base para puzzles criptográficos.",
    link: "https://example.com/arg",
    icon: <Rocket size={16} />,
  },
  {
    title: "Thumbnails DJ",
    tag: "design",
    desc: "Presets de capa no estilo neon/pastel.",
    link: "https://example.com/dj",
    icon: <Music size={16} />,
  },
  // Placeholders para Tags Tecnológicas
  { title: "Projetos HTML", tag: "HTML", desc: "Demonstração de projetos utilizando HTML.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos CSS", tag: "CSS", desc: "Demonstração de projetos utilizando CSS.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos JS", tag: "JS", desc: "Demonstração de projetos utilizando JS.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos TypeScript", tag: "TypeScript", desc: "Demonstração de projetos utilizando TypeScript.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Tailwind", tag: "Tailwind", desc: "Demonstração de projetos utilizando Tailwind.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos React", tag: "React", desc: "Demonstração de projetos utilizando React.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Vite", tag: "Vite", desc: "Demonstração de projetos utilizando Vite.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Python", tag: "Python", desc: "Demonstração de projetos utilizando Python.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Brython", tag: "Brython", desc: "Demonstração de projetos utilizando Brython.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Django", tag: "Django", desc: "Demonstração de projetos utilizando Django.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos C#", tag: "C#", desc: "Demonstração de projetos utilizando C#.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Git", tag: "Git", desc: "Demonstração de projetos utilizando Git.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos GitHub", tag: "GitHub", desc: "Demonstração de projetos utilizando GitHub.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos VSCode", tag: "VSCode", desc: "Demonstração de projetos utilizando VSCode.", link: "#", icon: <Code size={16} /> },
  { title: "Projetos Windows", tag: "Windows", desc: "Demonstração de projetos utilizando Windows.", link: "#", icon: <Code size={16} /> },
];

/**
 * TAGS DE FILTRO
 * ==============
 * 
 * Lista de categorias para filtrar os projetos.
 * Cada tag tem:
 * - id: Identificador único (deve corresponder ao campo "tag" dos projetos)
 * - label: Texto que aparece no botão de filtro
 * 
 * COMO ADICIONAR UMA NOVA CATEGORIA:
 * 1. Adicione um novo objeto: { id: "sua-categoria", label: "Seu Label" }
 * 2. Use o mesmo "id" no campo "tag" dos projetos que pertencem a essa categoria
 */
export const tags = [
  { id: "all", label: "Tudo" },
  { id: "web", label: "Web" },
  { id: "code", label: "Code" },
  { id: "music", label: "Music" },
  { id: "design", label: "Design" },
  { id: "game", label: "Game" },
];
