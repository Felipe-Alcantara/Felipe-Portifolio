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
  Layers
} from "lucide-react";

/**
 * =============================================================================
 * ARQUIVO DE DADOS DO PORTFÓLIO
 * =============================================================================
 * 
 * Este arquivo centraliza todos os dados de projetos, categorias e ícones.
 * Atualmente, todos os projetos são placeholders e serão substituídos.
 * 
 * ESTRUTURA:
 * 1. ÍCONES: Mapeamento de categorias para ícones do Lucide.
 * 2. CATEGORIAS: Definição das tags de filtro usadas no portfólio.
 * 3. PROJETOS: Lista unificada com todos os projetos/placeholders.
 * 4. EXPORTAÇÕES COMBINADAS: Monta os dados no formato que a UI espera.
 * 
 * COMO ATUALIZAR:
 * - Para adicionar/modificar um projeto: Altere um objeto na lista `projects`.
 * - Para adicionar uma categoria: Adicione uma entrada em `CATEGORIES` e um ícone em `ICONS`.
 * 
 * Website dos Ícones: https://lucide.dev/icons
 * =============================================================================
 */

// 1. ÍCONES
// Mapeia um ID de categoria/tag para um componente de ícone específico.
const ICONS = {
  web: <Monitor size={16} />,
  music: <Music size={16} />,
  code: <Code size={16} />,
  design: <Palette size={16} />,
  game: <Puzzle size={16} />,
  automation: <Bot size={16} />,
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

// 2. CATEGORIAS DE FILTRO
// Define as tags de filtro disponíveis. O `id` deve ser único.
export const CATEGORIES = [
  { id: "all", label: "Tudo" },
  { id: "web", label: "Web" },
  { id: "code", label: "Code" },
  { id: "music", label: "Music" },
  { id: "design", label: "Design" },
  { id: "game", label: "Game" },
  { id: "automation", label: "Automação" },
];

// 3. PROJETOS (PLACEHOLDERS)
// Lista unificada de todos os projetos.
// O campo `tag` é usado para o ícone e para o filtro de categoria.
const projects = [
  // Projetos
  {
    title: "Landing FelixoVerse",
    tag: "web",
    description: "Hero, navbar e carrossel contínuo, demonstrando UI moderna.",
    link: "https://example.com/landing",
  },
  {
    title: "Mixer de Samples",
    tag: "music",
    description: "Ferramenta no navegador para combinar loops de áudio.",
    link: "https://example.com/mixer",
  },
  {
    title: "Bots & Automação",
    tag: "automation",
    description: "Coleção de scripts Python para automação de tarefas.",
    link: "https://example.com/bots",
  },
  {
    title: "ARG Blocks",
    tag: "game",
    description: "Componentes base para criar puzzles criptográficos.",
    link: "https://example.com/arg",
  },
  {
    title: "Thumbnails para DJ",
    tag: "design",
    description: "Presets de capas para sets de música no estilo neon/pastel.",
    link: "https://example.com/dj-thumbnails",
  },
  // Tecnologias
  { title: "HTML", tag: "html", description: "Projetos semânticos e estruturados." },
  { title: "CSS", tag: "css", description: "Estilização com foco em design responsivo." },
  { title: "JavaScript", tag: "js", description: "Interatividade e manipulação do DOM." },
  { title: "TypeScript", tag: "ts", description: "Código JS com tipagem estática para maior robustez." },
  { title: "Tailwind CSS", tag: "tailwind", description: "CSS utilitário para desenvolvimento rápido." },
  { title: "React", tag: "react", description: "Criação de UIs reativas e componentizadas." },
  { title: "Vite", tag: "vite", description: "Build tool moderno e ultra-rápido para front-end." },
  { title: "Python", tag: "python", description: "Scripts, automação e desenvolvimento back-end." },
  { title: "Brython", tag: "brython", description: "Python no navegador para scripting web." },
  { title: "Django", tag: "django", description: "Framework web de alto nível em Python." },
  { title: "C#", tag: "csharp", description: "Aplicações robustas no ecossistema .NET." },
  { title: "Git", tag: "git", description: "Controle de versão para gerenciamento de código." },
  { title: "GitHub", tag: "github", description: "Plataforma de hospedagem e colaboração de código." },
  { title: "VSCode", tag: "vscode", description: "Editor de código fonte com superpoderes." },
  { title: "Windows", tag: "windows", description: "Desenvolvimento e automação em ambiente Windows." },
];

// 4. EXPORTAÇÕES COMBINADAS
// A UI espera um array `items` e um array `tags`.

// Monta o array `items` final a partir da lista unificada de projetos.
export const items = projects.map(p => ({
  title: p.title.startsWith("Projetos ") ? p.title : `Projeto ${p.title}`,
  tag: p.tag,
  desc: p.description,
  link: p.link || "#",
  icon: ICONS[p.tag] || ICONS.default,
}));

// Exporta as categorias para os botões de filtro.
export const tags = CATEGORIES;
