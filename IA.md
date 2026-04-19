# 🤖 Contexto Operacional de IA — FelixoVerse Portfolio

> Memória técnica acumulada do projeto para uso por IAs em novas sessões.  
> Baseado no template padrão de [`felixo-standards/IA.md`](felixo-standards/IA.md).

---

## 🎯 Objetivo do Projeto

[2026-04-18] Portfólio interativo pessoal de Felipe Martin com identidade visual FelixoVerse (dark + neon roxo).  
Exibe projetos com filtros dinâmicos, modais de detalhe e busca por texto.  
Deploy em produção: https://felixo.com.br (GitHub Pages).

---

## 🏁 METAS & MILESTONES

| Data | Status | Descrição |
|------|--------|-----------|
| [2026-04-18] | ✅ | Bug crítico de BackgroundParticles duplicado removido |
| [2026-04-18] | ✅ | SEO básico implementado (meta, OG, Twitter Card, robots.txt, sitemap) |
| [2026-04-18] | ✅ | Filtro de stack corrigido — labels mapeados para tags de categoria |
| [2026-04-18] | ✅ | Code-splitting de modais com React.lazy |
| [2026-04-18] | ✅ | prefers-reduced-motion e IntersectionObserver nas partículas |
| [2026-04-18] | ✅ | Breathing animations ajustadas (3s→5s) e partículas aumentadas (35→55) |
| — | ⬜ | Virtualização do carrossel (Fase 3 do plano de performance) |
| — | ⬜ | React Router + rota `/felixoverse` |
| — | ⬜ | Formulário de contato com envio real |
| — | ⬜ | Seção Blog com conteúdo real |
| — | ⬜ | Links e status reais em todos os projetos |

---

## 🛠️ Stack e Dependências

[2026-04-18] Front-end: React 18 + Vite 5  
[2026-04-18] Estilo: Tailwind CSS 3  
[2026-04-18] UI/Animação: Framer Motion 10 + Lucide React + react-icons (FaWhatsapp, FaDiscord, FaTwitter, TbBrand*)  
[2026-04-18] Build: Vite. Deploy: GitHub Pages via `.github/workflows/deploy.yml`  
[2026-04-18] Lint: ESLint 8 via `.eslintrc.cjs`  
[2026-04-18] Fontes: Space Grotesk via Google Fonts  
[2026-04-18] Sem roteamento configurado (main.jsx sem React Router)  
[2026-04-18] Sem testes automatizados

---

## 📐 Decisões de Arquitetura

[2026-04-18] SPA sem router — portfólio é uma única página longa com scroll; `/felixoverse` ainda não funciona como rota real.  
[2026-04-18] `BackgroundParticles` global em `App.jsx` — instância única gerencia todas as partículas do fundo. Não duplicar em seções filhas.  
[2026-04-18] Dados de projetos centralizados em `src/data/projects.jsx` — merge automático entre `portfolio-items.generated.json` (sync GitHub) e `portfolio-items.overrides.json` (personalizações manuais por `repoKey`).  
[2026-04-18] Sub-sistema de importação GitHub modularizado em `src/utils/github-import/`. Script em `scripts/sync-github-repos.mjs`.  
[2026-04-18] Modais (`ProjectsModal`, `ProjectDetailsModal`) carregados via `React.lazy` — fora do bundle inicial.  
[2026-04-18] Seções desacopladas em `src/sections/`; componentes atômicos em `src/components/ui/`.  
[2026-04-18] `PortfolioCard` aplica line-clamp em título/descrição para manter cards de carrossel com altura previsível.  
[2026-04-18] Documentação centralizada em `docs/`.

---

## 🎨 Decisões de Design & Convenções

[2026-04-18] Paleta: Zinc 950 fundo, `#C084FC` roxo de marca, Space Grotesk como fonte global.
[2026-04-18] Breathing animations em `5s` — ritmo preferido pelo usuário. Não voltar para 3s (ficava rápido demais).
[2026-04-18] Partículas: 55 unidades. Era 35 antes do ajuste; 70 era o valor bugado (2 instâncias). 55 é o equilíbrio visual mantendo performance.  
[2026-04-18] Design System documentado em `felixo-standards/PADRÕES DE DESIGN/DESIGN_SYSTEM_PARA_FRONTEND.md`.  
[2026-04-18] Tags de categoria dos projetos: `web` | `code` | `music` | `design` | `game` | `automation`.  
[2026-04-18] Interface e textos em português. Componentes e arquivos em `kebab-case` e `.jsx`.  
[2026-04-18] Tailwind como padrão de estilização; CSS global quando necessário.  
[2026-04-18] Commits seguem Conventional Commits: `feat/fix/perf/docs/refactor`.

---

## 🧪 Estado de Qualidade

[2026-04-18] Build de produção disponível via `npm run build`.  
[2026-04-18] Lint configurado via `.eslintrc.cjs` com script `npm run lint`.  
[2026-04-18] Sem testes automatizados — estratégia de testes não definida.  
[2026-04-18] Sincronização GitHub trata 401/403/404/5xx e aplica retry/backoff.

---

## 🐛 Bugs & Fixes Relevantes

[2026-04-18] **BUG**: `BackgroundParticles` renderizado duas vezes (App.jsx + hero.jsx) = 70 animações Framer Motion simultâneas na carga inicial.  
**CAUSA**: Instância duplicada por engano em hero.jsx.  
**FIX**: Removido import e JSX de `hero.jsx`; mantida apenas a instância global em `App.jsx`.

[2026-04-18] **BUG**: Filtro de stack na seção Sobre retornava 0 resultados silenciosamente.  
**CAUSA**: `onTechClick` passava o label bruto ("React") como `activeTag`, mas `project.tag` nunca é "React" — são categorias ("web", "code").  
**FIX**: Adicionado `TECH_TO_TAG` em `about.jsx` mapeando labels para tags de categoria reais.

[2026-04-18] **BUG**: Links Discord usando HTTP em 4 arquivos.  
**FIX**: Substituídos todos por HTTPS em `about.jsx`, `contact.jsx`, `contact-modal.jsx`, `felixoverse.jsx`.

---

## 🔗 Integrações & Serviços Externos

[2026-04-18] GitHub API — `scripts/sync-github-repos.mjs` coleta repos públicos/privados. Requer `GITHUB_TOKEN` em `.env` local (não versionado).  
[2026-04-18] GitHub Pages — deploy automático via `deploy.yml`. Branch: `main`. Domínio: `felixo.com.br` (CNAME em `public/`).  
[2026-04-18] Google Fonts — Space Grotesk carregada via `<link>` no `index.html`.

---

## 📝 Notas Gerais

[2026-04-18] `public/favicon.png` e `public/og-image.png` ainda precisam ser criados com assets reais (`index.html` já os referencia).  
[2026-04-18] O carrossel (`PortfolioSection`) ainda usa triplicação de lista para loop — próxima otimização de maior impacto (ver `docs/plano-otimizacao-performance.md` Fase 3).  
[2026-04-18] Parte dos links de projetos em `src/data/projects.jsx` ainda é placeholder (`#`, `example.com`).  
[2026-04-18] Seção Blog (`src/sections/blog.jsx`) exibe "Em breve" — sem conteúdo real.  
[2026-04-18] Modal de contato tem "Mensagem Interna" desabilitado e sem backend para envio real.

---

## 🧠 Chain of Thought

[2026-04-18] **CONTEXTO**: Auditoria completa de performance e bugs do portfólio (sessão Claude Code).  
**PENSAMENTO**: Identificado `BackgroundParticles` em dois lugares — App.jsx e hero.jsx — cada um com 35 partículas = 70 animações Framer Motion simultâneas na carga inicial.  
**PENSAMENTO**: O filtro da seção Sobre chamava `onTechClick("React")` mas `project.tag` nunca é "React" — são categorias. Bug silencioso (tela vazia sem erro).  
**PENSAMENTO**: Modais pesados importados estaticamente aumentavam bundle inicial sem necessidade — só abertos sob interação.  
**RESULTADO**: 5 fixes aplicados, 6 commits entregues. Maior ganho imediato: remoção da instância duplicada de partículas.

---

## 🔗 Documentação Relacionada

- [`README.md`](README.md)
- [`docs/README.md`](docs/README.md)
- [`docs/DOCUMENTATION.md`](docs/DOCUMENTATION.md)
- [`docs/PENDENCIAS-SITE.md`](docs/PENDENCIAS-SITE.md)
- [`docs/plano-otimizacao-performance.md`](docs/plano-otimizacao-performance.md)
- [`felixo-standards/PADRÕES DE DESIGN/DESIGN_SYSTEM_PARA_FRONTEND.md`](felixo-standards/PADRÕES%20DE%20DESIGN/DESIGN_SYSTEM_PARA_FRONTEND.md)
