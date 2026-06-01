# 🎨 FelixoVerse Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Portfólio interativo em React com identidade visual FelixoVerse, filtros dinâmicos, modais de projeto e documentação técnica organizada.**

[📖 Documentação](docs/README.md) • [🤖 Prompt de Importação GitHub](docs/PROMPT-SUBSISTEMA-IMPORTACAO-REPOS-GITHUB.md) • [🎨 Design System](felixo-standards/core/DESIGN_SYSTEM_FRONTEND.md) • [🚀 Como Usar](#-como-usar)

</div>

---

## 📋 Índice

- [🌐 Destaque Principal](#-destaque-principal-)
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Ferramentas Disponíveis](#-ferramentas-disponíveis)
- [📚 Documentação Completa](#-documentação-completa)
- [🎯 Como Usar](#-como-usar)
- [⚡ Guia Rápido](#-guia-rápido)
- [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [⚠️ Limitações](#️-limitações)
- [🛡️ Segurança](#️-segurança)
- [🎯 Objetivo](#-objetivo)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)
- [🤝 Contribuições](#-contribuições)

---

## 🌐 Destaque Principal ⭐

> **🚀 EXPLORE O PORTFÓLIO FELIXOVERSE LOCALMENTE EM MINUTOS**
>
> **`npm install && npm run dev`**

### 💡 Por que usar?

- **🎨 Sistema visual consistente** com padrões de tipografia, paleta e animações.
- **🔎 Navegação orientada por dados** com filtros por categoria e busca por texto.
- **🧩 Estrutura modular** com componentes reutilizáveis e documentação separada por assunto.

---

## 📋 Sobre o Projeto

O **FelixoVerse Portfolio** é uma aplicação front-end com foco em **design system próprio**, **interatividade com Framer Motion** e **estrutura reutilizável** para evolução contínua de portfólio e landing pages.

Este repositório foi organizado com base no padrão de qualidade do acervo [`felixo-standards`](https://github.com/Felipe-Alcantara/Felixo-System-Design), centralizando documentação em `docs/` e mantendo as responsabilidades separadas entre código, guias técnicos e operação de domínio.

---

## 📁 Estrutura do Projeto

```text
Felipe-Portifolio/
│
├── docs/                               # Documentação centralizada
│   ├── README.md                       # Índice da documentação
│   ├── DOCUMENTATION.md                # Guia de customização e manutenção
├── public/                             # Arquivos estáticos públicos
│   ├── CNAME
│   └── Currículo/
├── src/                                # Código-fonte da aplicação React
│   ├── components/
│   │   ├── layout/
│   │   ├── parts/
│   │   └── ui/
│   ├── data/
│   │   └── github-import/              # Saída do sincronizador interno de repositórios
│   ├── pages/
│   ├── sections/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml                  # Pipeline de deploy no GitHub Pages
├── scripts/
│   └── sync-github-repos.mjs           # Script interno de sincronização GitHub -> dados do portfólio
├── .eslintrc.cjs                       # Configuração de lint
├── package.json
├── tailwind.config.js
├── vite.config.js
└── LICENSE
```

---

## 🚀 Ferramentas Disponíveis

### 🎛️ Interface e Experiência (`src/sections/`, `src/components/`)

- Hero com busca interativa
- Carrossel e grade de projetos
- Modais de projetos e detalhes
- Fundo animado com partículas

### 🗂️ Camada de Dados (`src/data/projects.jsx`)

- Catálogo central de projetos com fallback local
- Leitura automática de `src/data/github-import/portfolio-items.generated.json`
- Merge automático com `src/data/github-import/portfolio-items.overrides.json` por `repoKey`
- Categorização por tags
- Metadados para filtros e modais

### 🧰 Utilitários (`src/utils/`)

- Loader de README dinâmico para conteúdo por projeto
- Helpers de classes e estilos visuais
- Sub-sistema interno de sincronização GitHub em `src/utils/github-import/`

---

## 📚 Documentação Completa

- 📖 [Índice da documentação](docs/README.md)
- 🤖 [Prompt do sub-sistema de importação de repositórios GitHub](docs/PROMPT-SUBSISTEMA-IMPORTACAO-REPOS-GITHUB.md)
- 🧭 [Guia de customização e manutenção](docs/DOCUMENTATION.md)
- ✅ [Checklist de pendências do site](docs/PENDENCIAS-SITE.md)
- ⚡ [Plano de otimização de performance](docs/plano-otimizacao-performance.md)
- 🤖 [Contexto operacional para IA](IA.md)
- 🎨 [Design system oficial (felixo-standards)](felixo-standards/core/DESIGN_SYSTEM_FRONTEND.md)

---

## 🎯 Como Usar

### Opção 1: Início automático com Python (Recomendado) 🚀

Um único comando instala as dependências (se necessário), sobe o servidor de desenvolvimento e abre o site no navegador:

```bash
python3 start_app.py
```

Encerre com `Ctrl+C` — o servidor é desligado automaticamente.

### Opção 2: Desenvolvimento local manual

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev
```

### Opção 3: Build de produção

```bash
# Gerar build otimizada
npm run build

# Servir build local
npm run preview
```

A saída de build é gerada em `dist/` como artefato local de compilação.

### Opção 4: Sincronizar repositórios GitHub (uso interno)

```bash
# 1) Configure as variáveis no shell (ou copie .env.example para .env local)
export GITHUB_USERNAME=Felipe-Alcantara
export GITHUB_TOKEN= # opcional (necessário para privados)
export GITHUB_IMPORT_MAX_REPOS=500 # opcional

# 2) Executar sincronização
npm run sync:github
```

Esse fluxo atualiza, com estratégia de upsert e sem clone, os arquivos:
- `src/data/github-import/index.json`
- `src/data/github-import/portfolio-items.generated.json`
- `src/data/github-import/portfolio-items.ignore.json`
- `src/data/github-import/repos/<owner>__<repo>/{metadata.json,languages.json,readme.md,manifest.json}`

Para personalizações manuais de apresentação (sem perder na próxima sync), edite:
- `src/data/github-import/portfolio-items.overrides.json`

Para ignorar repositórios específicos no catálogo gerado mesmo após nova sync, edite:
- `src/data/github-import/portfolio-items.ignore.json` (array de `repoKey`)

> ⚠️ **Remoção permanente de um projeto**: a única forma de impedir que um repositório volte ao site em uma sincronização futura é adicionar seu `repoKey` ao `portfolio-items.ignore.json`. O sync respeita essa lista e nem baixa README/metadados desses repos. Apagar o item só do `generated.json` ou do `overrides.json` **não** basta — ele reaparece no próximo sync.

#### Sincronização automática no deploy

O workflow `.github/workflows/deploy.yml` roda `node scripts/sync-github-repos.mjs` **antes** do `npm run build`, então cada deploy publica os READMEs e metadados atuais do GitHub sem nenhuma ação manual. Os arquivos sincronizados entram direto no `dist/` publicado; eles **não** são commitados de volta no repositório a cada deploy.

Pré-requisito (configurado uma única vez): um Secret `GH_SYNC_TOKEN` no repositório, com um Personal Access Token de escopo `repo` do dono do perfil. Sem ele, o sync ainda roda, mas só com repositórios públicos. O `GITHUB_USERNAME` está fixado no workflow (`felipe-alcantara`) e precisa bater com o dono do token para incluir privados.

Exemplo de override por `repoKey`:

```json
[
  {
    "repoKey": "felipe-alcantara/felipe-portifolio",
    "title": "FelixoVerse Portfolio",
    "desc": "Versão de apresentação com foco em UX e narrativa visual.",
    "tag": "web"
  }
]
```

---

## ⚡ Guia Rápido

### Para personalizar conteúdo
1. Para projetos sincronizados do GitHub, edite `src/data/github-import/portfolio-items.overrides.json` usando `repoKey`.
2. `src/data/projects.jsx` faz o merge automático entre gerado + overrides.
3. Sem dados sincronizados, o fallback local continua em `src/data/projects.jsx`.
4. Ajuste seções em `src/sections/`.
5. Atualize textos globais em `src/App.jsx` e componentes `layout/`.

### Para alterar visual
1. Consulte o [Design System Frontend (felixo-standards)](felixo-standards/core/DESIGN_SYSTEM_FRONTEND.md).
2. Ajuste classes Tailwind nos componentes `ui/`.
3. Refine tokens e tema em `tailwind.config.js` e `src/index.css`.

### Para validar o repositório
1. Execute `npm run lint`.
2. Execute `npm run build`.

---

## 🔧 Funcionalidades Técnicas

- **`filteredProjects` em `App.jsx`**: combina filtro por categoria (`activeTag`) e busca por texto (`q`).
- **`ProjectsModal` e `ProjectDetailsModal`**: expõem conteúdo detalhado sem navegação externa.
- **`loadReadme(project)`**: injeta README por projeto, incluindo READMEs importados do sincronizador GitHub.
- **Inferência de tags no importador GitHub**: classifica projetos web (React/TypeScript/JavaScript/HTML/CSS) para aparecerem na seção **Aplicações Web**.
- **`PortfolioCard`**: usa clamp em título/descrição para manter altura visual mais consistente no carrossel.

---

## ⚠️ Limitações

- Sem execução de `npm run sync:github`, o catálogo usa fallback local de placeholders.
- Não há pipeline de testes automatizados neste repositório.
- Parte dos links externos nos projetos é demonstrativa.
- `public/favicon.png` e `public/og-image.png` precisam ser criados manualmente com assets reais.

## 🛡️ Segurança

Não inclua chaves, tokens ou credenciais reais em `src/data/projects.jsx`, `docs/` ou qualquer arquivo versionado. Para integrações reais, use variáveis de ambiente e gestão segura de segredos. Para o sincronizador interno GitHub, mantenha token apenas no ambiente local (`.env` não versionado).

---

## 🎯 Objetivo

Manter uma base de portfólio com **qualidade visual consistente**, **estrutura de código previsível** e **documentação rastreável**, permitindo evolução rápida sem perda de padrão.

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

## 👤 Autor

**Felipe Martin**

- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

## 🤝 Contribuições

Contribuições são bem-vindas para melhorias em UI, arquitetura e documentação.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub.
