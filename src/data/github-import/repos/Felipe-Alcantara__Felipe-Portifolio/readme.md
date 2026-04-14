# 🎨 FelixoVerse Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Portfólio interativo em React com identidade visual FelixoVerse, filtros dinâmicos, modais de projeto e documentação técnica organizada.**

[📖 Documentação](docs/README.md) • [🎨 Design System](docs/DESIGN-SYSTEM.md) • [🚀 Como Usar](#-como-usar)

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
│   ├── DESIGN-SYSTEM.md                # Sistema de design oficial
│   └── GUIA-DOMINIO-PAGES.md           # Configuração de domínio no GitHub Pages
├── public/                             # Arquivos estáticos públicos
│   ├── CNAME
│   └── Currículo/
├── src/                                # Código-fonte da aplicação React
│   ├── components/
│   │   ├── layout/
│   │   ├── parts/
│   │   └── ui/
│   ├── data/
│   ├── pages/
│   ├── sections/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
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

- Catálogo central de projetos
- Categorização por tags
- Metadados para filtros e modais

### 🧰 Utilitários (`src/utils/`)

- Loader de README dinâmico para conteúdo por projeto
- Helpers de classes e estilos visuais

---

## 📚 Documentação Completa

- 📖 [Índice da documentação](docs/README.md)
- 🧭 [Guia de customização e manutenção](docs/DOCUMENTATION.md)
- 🎨 [Design system oficial](docs/DESIGN-SYSTEM.md)
- 🌍 [Guia de domínio no GitHub Pages](docs/GUIA-DOMINIO-PAGES.md)

---

## 🎯 Como Usar

### Opção 1: Desenvolvimento local (Recomendado)

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev
```

### Opção 2: Build de produção

```bash
# Gerar build otimizada
npm run build

# Servir build local
npm run preview
```

---

## ⚡ Guia Rápido

### Para personalizar conteúdo
1. Edite `src/data/projects.jsx` para atualizar projetos e categorias.
2. Ajuste seções em `src/sections/`.
3. Atualize textos globais em `src/App.jsx` e componentes `layout/`.

### Para alterar visual
1. Consulte `docs/DESIGN-SYSTEM.md`.
2. Ajuste classes Tailwind nos componentes `ui/`.
3. Refine tokens e tema em `tailwind.config.js` e `src/index.css`.

---

## 🔧 Funcionalidades Técnicas

- **`filteredProjects` em `App.jsx`**: combina filtro por categoria (`activeTag`) e busca por texto (`q`).
- **`ProjectsModal` e `ProjectDetailsModal`**: expõem conteúdo detalhado sem navegação externa.
- **`loadReadme(projectTitle)`**: injeta README por projeto de forma dinâmica via `?raw`.

---

## ⚠️ Limitações

- Dados de projetos ainda usam placeholders em parte do catálogo.
- Não há pipeline de testes automatizados neste repositório.
- Parte dos links externos nos projetos é demonstrativa.

## 🛡️ Segurança

Não inclua chaves, tokens ou credenciais reais em `src/data/projects.jsx`, `docs/` ou qualquer arquivo versionado. Para integrações reais, use variáveis de ambiente e gestão segura de segredos.

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

