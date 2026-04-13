# 📚 Guia de Customização e Manutenção — FelixoVerse Portfolio

> Guia prático para evoluir conteúdo, layout e comportamento da aplicação com segurança e consistência.

---

## 📁 Estrutura técnica relevante

```text
src/
├── components/
│   ├── layout/                # Navbar e Footer
│   ├── parts/                 # Partes compostas de UI
│   └── ui/                    # Button, Card, Input, Modal e afins
├── data/
│   └── projects.jsx           # Fonte principal de projetos e categorias
├── pages/
│   └── felixoverse-page.jsx   # Página complementar do hub
├── sections/                  # Seções da página principal
├── utils/
│   ├── utils.js               # Helpers gerais
│   └── readme-loader.js       # Loader de READMEs por projeto
├── App.jsx                    # Orquestra estado global e seções
└── main.jsx                   # Entry point do React
```

---

## 🎯 Fluxos de alteração mais comuns

### 1. Adicionar ou editar um projeto

Arquivo: `src/data/projects.jsx`

Campos importantes por item:

- `title`: nome exibido
- `tag`: categoria usada no filtro
- `description`: texto curto
- `createdAt`, `status`
- `links`: GitHub, site, demo, download e post

> Ao criar uma nova categoria, adicione em `CATEGORIES` e configure ícone/cor em `ICONS` e `COLORS`.

---

### 2. Ajustar filtros e busca

Arquivo: `src/App.jsx`

Pontos principais:

- `activeTag`: controla filtro por categoria.
- `q`: controla busca textual.
- `filteredProjects` (`useMemo`): aplica os dois filtros combinados.

---

### 3. Alterar layout e seções

Arquivos:

- `src/sections/*.jsx` para conteúdo por seção
- `src/components/layout/*.jsx` para estrutura global

Ordem de renderização principal está em `src/App.jsx`.

---

### 4. Atualizar documentação por projeto no modal

Arquivo: `src/utils/readme-loader.js`

Adicione o título do projeto em `README_CONTENT` e associe:

1. Um arquivo markdown importado via `?raw`; ou
2. Um conteúdo inline temporário.

---

## 🧰 Comandos de desenvolvimento

```bash
# Dependências
npm install

# Desenvolvimento
npm run dev

# Lint
npm run lint

# Build de produção
npm run build

# Preview da build
npm run preview
```

---

## ✅ Checklist para mudanças

- Atualizou conteúdo em `src/data/projects.jsx` quando necessário.
- Manteve consistência visual conforme `docs/DESIGN-SYSTEM.md`.
- Revisou links quebrados de projetos/documentação.
- Atualizou este guia ou o `README.md` quando houver mudança estrutural.

---

## 🔗 Referências

- [README principal](../README.md)
- [Design System](./DESIGN-SYSTEM.md)
- [Guia de domínio](./GUIA-DOMINIO-PAGES.md)
