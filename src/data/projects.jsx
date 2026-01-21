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
  Database,
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
 * 
 * ESTRUTURA:
 * 1. ÍCONES: Mapeamento de categorias para ícones do Lucide.
 * 2. CATEGORIAS: Definição das tags de filtro usadas no portfólio.
 * 3. PROJETOS PRINCIPAIS: Lista dos seus projetos em destaque.
 * 4. PROJETOS DE TECNOLOGIA: Placeholders para tecnologias específicas.
 * 5. EXPORTAÇÕES COMBINADAS: Junta tudo nos formatos que a UI espera (`items`, `tags`).
 * 
 * COMO ATUALIZAR:
 * - Para adicionar um projeto: Adicione um objeto na lista `mainProjects`.
 * - Para adicionar uma categoria: Adicione uma entrada em `CATEGORIES` e um ícone em `ICONS`.
 * 
 * Website dos Ícones: https://lucide.dev/icons
 * =============================================================================
 */

// 1. ÍCONES
// Mapeia um ID de categoria para um componente de ícone específico.
const ICONS = {
  web: <Monitor size={16} />,
  music: <Music size={16} />,
  code: <Code size={16} />,
  design: <Palette size={16} />,
  game: <Puzzle size={16} />,
  automation: <Bot size={16} />,
  default: <Rocket size={16} />,

  // Ícones para tecnologias específicas
  html: <Code size={16} />,
  css: <Pipette size={16} />,
  js: <FileJson size={16} />,
  ts: <FileJson size={16} />, // Similar ao JS
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

// 2. CATEGORIAS
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

// 3. PROJETOS PRINCIPAIS
// Lista de projetos em destaque. O `category` deve corresponder a um `id` das CATEGORIES.
const mainProjects = [
  {
    title: "Landing FelixoVerse",
    category: "web",
    description: "Hero, navbar e carrossel contínuo, demonstrando UI moderna.",
    link: "https://example.com/landing",
  },
  {
    title: "Mixer de Samples",
    category: "music",
    description: "Ferramenta no navegador para combinar loops de áudio.",
    link: "https://example.com/mixer",
  },
  {
    title: "Bots & Automação",
    category: "automation",
    description: "Coleção de scripts Python para automação de tarefas.",
    link: "https://example.com/bots",
  },
  {
    title: "ARG Blocks",
    category: "game",
    description: "Componentes base para criar puzzles criptográficos e jogos de realidade alternativa.",
    link: "https://example.com/arg",
  },
  {
    title: "Thumbnails para DJ",
    category: "design",
    description: "Presets de capas para sets de música no estilo neon/pastel.",
    link: "https://example.com/dj-thumbnails",
  },
];

// 4. PROJETOS DE TECNOLOGIA (Placeholders)
// Usado para exibir cartões de tecnologias. O `tag` aqui é usado como ID.
const techDemos = [
  { title: "HTML", tag: "html", description: "Projetos semânticos e estruturados." },
  { title: "CSS", tag: "css", description: "Estilização com foco em design responsivo." },
  { title: "JavaScript", tag: "js", description: "Interatividade e manipulação do DOM." },
  { title: "TypeScript", tag: "ts", description: "Código JS com tipagem estática para maior robustez." },
  { title: "Tailwind", tag: "tailwind", description: "CSS utilitário para desenvolvimento rápido." },
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

// 5. EXPORTAÇÕES COMBINADAS
// A UI espera um array `items` com `tag`, `desc`, `icon`, etc.
// E um array `tags` para os botões de filtro.

// Monta o array `items` final, juntando os projetos principais e os de tecnologia.
export const items = [
  // Mapeia os projetos principais para o formato esperado
  ...mainProjects.map(p => ({
    title: p.title,
    tag: p.category, // A UI usa 'tag' para filtrar
    desc: p.description,
    link: p.link || "#",
    icon: ICONS[p.category] || ICONS.default,
  })),
  
  // Mapeia os demos de tecnologia para o formato esperado
  ...techDemos.map(t => ({
    title: `Projetos ${t.title}`,
    tag: t.tag,
    desc: t.description,
    link: "#",
    icon: ICONS[t.tag] || ICONS.code,
  })),
];

// Exporta as categorias para os botões de filtro.
// O componente de filtro pode adicionar "all" se necessário.
export const tags = CATEGORIES;
