# 🤖 Contexto Operacional de IA — FelixoVerse Portfolio

## 🎯 Objetivo do Projeto

Portfólio web em React para centralizar projetos, stack e identidade visual FelixoVerse com foco em experiência interativa e base reutilizável.

## 🛠️ Stack e Dependências

- Front-end: React 18 + Vite 5
- Estilo: Tailwind CSS 3
- UI/Animação: Framer Motion + Lucide React
- Lint: ESLint 8

## 📐 Decisões de Arquitetura

- Dados de projetos centralizados em `src/data/projects.jsx`.
- Sub-sistema interno de importação GitHub modularizado em `src/utils/github-import/`.
- Script de sincronização dedicado em `scripts/sync-github-repos.mjs` via `npm run sync:github`.
- Dados sincronizados persistidos em `src/data/github-import/` com upsert idempotente.
- Personalizações manuais de projeto ficam em `src/data/github-import/portfolio-items.overrides.json` e são mescladas por `repoKey`.
- Inferência de tag do importador usa termos normalizados para evitar falso positivo de automação em stacks web (ex.: JavaScript/TypeScript).
- Seções da home desacopladas em `src/sections/`.
- Componentes atômicos em `src/components/ui/`.
- `PortfolioCard` aplica line-clamp em título/descrição para manter cards de carrossel com altura previsível.
- Documentação centralizada em `docs/`.

## 🎨 Convenções

- Interface e textos em português.
- Componentes e arquivos em `kebab-case` e `.jsx`.
- Tailwind como padrão de estilização; classes utilitárias primeiro, CSS global quando necessário.

## 🧪 Estado de Qualidade

- Build de produção disponível via `npm run build`.
- Lint configurado via `.eslintrc.cjs` com script `npm run lint`.
- Sincronização GitHub trata 401/403/404/5xx explicitamente e aplica retry/backoff para falhas temporárias.

## 🔗 Documentação Relacionada

- `README.md`
- `docs/README.md`
- `docs/DOCUMENTATION.md`
- `docs/DESIGN-SYSTEM.md`
- `docs/GUIA-DOMINIO-PAGES.md`
