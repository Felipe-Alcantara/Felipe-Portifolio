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

> As categorias (`CATEGORIES`) são geradas automaticamente a partir das `tags` existentes nos projetos normalizados. Ao criar uma nova `tag`, ajuste `ICONS` e `COLORS` se quiser mapeamento visual específico.

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

Fluxo atual de resolução do README:

1. Projetos importados via GitHub: usa `repoFolder` para buscar automaticamente `src/data/github-import/repos/<repoFolder>/readme.md` com `import.meta.glob`.
2. Projetos legados/locais: usa fallback por título no `README_CONTENT` (com markdown importado via `?raw` ou conteúdo inline).
3. Sem correspondência: retorna mensagem padrão de "README não encontrado".

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
- Manteve consistência visual conforme o Design System Frontend do `felixo-standards` (https://github.com/Felipe-Alcantara/Felixo-System-Design).
- Revisou links quebrados de projetos/documentação.
- Atualizou este guia ou o `README.md` quando houver mudança estrutural.

---

## 🔗 Referências

- [README principal](../README.md)
- [Design System Frontend (felixo-standards)](../felixo-standards/core/DESIGN_SYSTEM_FRONTEND.md)
