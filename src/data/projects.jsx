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
 * 4. EXPORTAÇÕES COMBINadas: Monta os dados no formato que a UI espera.
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

// Mapeia um ID de categoria/tag para uma classe de cor Tailwind CSS.
const COLORS = {
  web: 'bg-blue-500',
  music: 'bg-purple-500',
  code: 'bg-gray-500',
  design: 'bg-pink-500',
  game: 'bg-green-500',
  automation: 'bg-orange-500',
  default: 'bg-zinc-800',
  html: 'bg-red-500',
  css: 'bg-blue-600',
  js: 'bg-yellow-500',
  ts: 'bg-blue-700',
  tailwind: 'bg-cyan-500',
  react: 'bg-sky-500',
  vite: 'bg-purple-600',
  python: 'bg-yellow-600',
  brython: 'bg-yellow-700',
  django: 'bg-green-700',
  csharp: 'bg-purple-700',
  git: 'bg-red-600',
  github: 'bg-gray-700',
  vscode: 'bg-blue-800',
  windows: 'bg-blue-900',
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
    createdAt: "2024-01-20",
    status: "Finalizado",
  },
  {
    title: "Mixer de Samples",
    tag: "web",
    description: "Ferramenta no navegador para combinar loops de áudio.",
    link: "https://example.com/mixer",
    createdAt: "2024-02-15",
    status: "Em Desenvolvimento",
  },
  {
    title: "Bots & Automação",
    tag: "automation",
    description: "Coleção de scripts Python para automação de tarefas.",
    link: "https://example.com/bots",
    createdAt: "2024-03-10",
    status: "Em Desenvolvimento",
  },
  {
    title: "ARG Blocks",
    tag: "game",
    description: "Componentes base para criar puzzles criptográficos.",
    link: "https://example.com/arg",
    createdAt: "2024-04-05",
    status: "Finalizado",
  },
  {
    title: "Thumbnails para DJ",
    tag: "design",
    description: "Presets de capas para sets de música no estilo neon/pastel.",
    link: "https://example.com/dj-thumbnails",
    createdAt: "2024-05-20",
    status: "Em Desenvolvimento",
  },
  // Tecnologias
  { title: "HTML", tag: "html", description: "Projetos semânticos e estruturados.", createdAt: "2024-06-01", status: "Em Desenvolvimento" },
  { title: "CSS", tag: "css", description: "Estilização com foco em design responsivo.", createdAt: "2024-06-02", status: "Em Desenvolvimento" },
  { title: "JavaScript", tag: "js", description: "Interatividade e manipulação do DOM.", createdAt: "2024-06-03", status: "Em Desenvolvimento" },
  { title: "TypeScript", tag: "ts", description: "Código JS com tipagem estática para maior robustez.", createdAt: "2024-06-04", status: "Em Desenvolvimento" },
  { title: "Tailwind CSS", tag: "tailwind", description: "CSS utilitário para desenvolvimento rápido.", createdAt: "2024-06-05", status: "Em Desenvolvimento" },
  { title: "React", tag: "react", description: "Criação de UIs reativas e componentizadas.", createdAt: "2024-06-06", status: "Em Desenvolvimento" },
  { title: "Vite", tag: "vite", description: "Build tool moderno e ultra-rápido para front-end.", createdAt: "2024-06-07", status: "Em Desenvolvimento" },
  { title: "Python", tag: "python", description: "Scripts, automação e desenvolvimento back-end.", createdAt: "2024-06-08", status: "Em Desenvolvimento" },
  { title: "Brython", tag: "brython", description: "Python no navegador para scripting web.", createdAt: "2024-06-09", status: "Em Desenvolvimento" },
  { title: "Django", tag: "django", description: "Framework web de alto nível em Python.", createdAt: "2024-06-10", status: "Em Desenvolvimento" },
  { title: "C#", tag: "csharp", description: "Aplicações robustas no ecossistema .NET.", createdAt: "2024-06-11", status: "Em Desenvolvimento" },
  { title: "Git", tag: "git", description: "Controle de versão para gerenciamento de código.", createdAt: "2024-06-12", status: "Em Desenvolvimento" },
  { title: "GitHub", tag: "github", description: "Plataforma de hospedagem e colaboração de código.", createdAt: "2024-06-13", status: "Em Desenvolvimento" },
  { title: "VSCode", tag: "vscode", description: "Editor de código fonte com superpoderes.", createdAt: "2024-06-14", status: "Em Desenvolvimento" },
  { title: "Windows", tag: "windows", description: "Desenvolvimento e automação em ambiente Windows.", createdAt: "2024-06-15", status: "Em Desenvolvimento" },
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
  createdAt: p.createdAt,
  status: p.status,
  tagColor: COLORS[p.tag] || COLORS.default, // Adiciona a cor da tag
  // Novos campos para o modal de detalhes
  complexity: p.complexity || "Média",
  stack: p.stack || [p.tag, "React", "Tailwind"], // Placeholder se não houver
  properties: p.properties || {
    timeEstimated: "2 semanas",
    size: "Médio",
    online: true,
    techPercentage: { [p.tag]: 100 }
  },
  links: p.links || {
    github: "#",
    site: p.link || "#",
    demo: "#",
    download: "#",
    post: "#"
  },
  readme: p.readme || `# ${p.title}\n\n> Descrição detalhada do projeto.\n\nEste é um arquivo README placeholder. Aqui você pode descrever como instalar, usar e contribuir para o projeto.\n\n## Funcionalidades\n- Feature 1\n- Feature 2\n- Feature 3`
}));

// Exporta as categorias para os botões de filtro.
export const tags = CATEGORIES;

// Exporta items como allProjects para compatibilidade com App.jsx
export const allProjects = items;
