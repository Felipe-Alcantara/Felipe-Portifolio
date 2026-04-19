# ✅ Checklist de pendências do site (levantamento atual)

Este documento reúne o que ainda falta implementar/ajustar no site, com base no estado atual do código.

## 1) Conteúdo e links reais

- [x] Substituir projetos placeholder por projetos reais no catálogo principal.
  - Referência: `src/data/projects.jsx`
  - Status atual: o catálogo principal já usa dados importados do GitHub (`baseProjects = mergedGeneratedProjects`) quando há itens gerados.
- [ ] Trocar links de exemplo (`example.com`, `youtube.com/watch?v=demoX`, `#`) por URLs reais e válidas.
  - Referência: `src/data/projects.jsx`
- [ ] Revisar status dos projetos (`Finalizado` / `Em Desenvolvimento`) para refletir o estado real.
  - Referência: `src/data/projects.jsx`
- [ ] Completar metadados reais por projeto (`stack`, `complexity`, `properties`) para não depender de fallback genérico.
  - Referência: `src/data/projects.jsx`
- [ ] Completar READMEs específicos de todos os projetos (hoje só parte deles tem conteúdo dedicado).
  - Referência: `src/utils/readme-loader.js`, `src/assets/readmes/`
- [ ] Criar `public/favicon.png` com o favicon real do projeto (atualmente referenciado em `index.html` mas arquivo não existe).
- [ ] Criar `public/og-image.png` para Open Graph e Twitter Card (referenciado em `index.html` mas arquivo não existe).

## 2) Seções ainda em “Em breve” ou incompletas

- [ ] Implementar o Blog de fato (lista de posts, página, fonte de conteúdo) e ligar o CTA para destino real.
  - Referência: `src/sections/blog.jsx`
- [ ] Finalizar a experiência do hub FelixoVerse (conteúdo definitivo + navegação real para página dedicada).
  - Referência: `src/sections/felixoverse.jsx`, `src/pages/felixoverse-page.jsx`, `src/sections/hero.jsx`
- [ ] Ativar “Mensagem Interna” no contato (hoje está desabilitado).
  - Referência: `src/components/ui/contact-modal.jsx`
- [ ] Implementar envio real do formulário de contato (backend, provider de e-mail ou serviço externo).
  - Referência: `src/sections/contact.jsx`

## 3) Navegação e fluxo de usuário

- [ ] Implementar roteamento para suportar `/felixoverse` (atualmente não há router configurado).
  - Referência: `src/main.jsx`, `src/pages/felixoverse-page.jsx`, `src/sections/hero.jsx`
- [ ] Corrigir CTAs que hoje são “no-op” (ex.: botão do blog e botão “Saber mais” do FelixoVerse apontando para a própria seção).
  - Referência: `src/sections/blog.jsx`, `src/sections/felixoverse.jsx`
- [x] Corrigir filtro por stack na seção “Sobre”: os labels clicáveis não batiam com os IDs de tag usados no filtro.
  - Referência: `src/sections/about.jsx` — adicionado `TECH_TO_TAG` mapeando labels para tags de categoria. Corrigido em 2026-04-18.
- [ ] Definir comportamento para cards sem link real (evitar redirecionar para `#`).
  - Referência: `src/data/projects.jsx`, `src/components/ui/projects-modal.jsx`, `src/components/parts/portfolio-card.jsx`

## 4) Qualidade técnica e manutenção

- [ ] Remover/reativar código não usado (ex.: seções/páginas órfãs) para reduzir dívida técnica.
  - Referência: `src/sections/projects.jsx`, `src/pages/felixoverse-page.jsx`
- [ ] Revisar renderização de markdown do modal de projeto (atualmente via `dangerouslySetInnerHTML`).
  - Referência: `src/components/ui/project-details-modal.jsx`
- [ ] Definir estratégia de testes (hoje não há testes automatizados no repositório).
  - Referência: `package.json`

## 5) SEO, descoberta e apresentação

- [x] Melhorar metadados SEO básicos (title, description, Open Graph, Twitter Card, canonical).
  - Referência: `index.html` — implementado em 2026-04-18.
- [x] Adicionar `robots.txt` e sitemap se o objetivo for indexação pública.
  - Referência: `public/robots.txt`, `public/sitemap.xml` — criados em 2026-04-18.
- [ ] Trocar favicon padrão do Vite por ícone do projeto (`public/favicon.png`).
  - Referência: `index.html` — referência atualizada, arquivo ainda precisa ser criado.

## 6) UX, acessibilidade e polimento

- [ ] Adicionar validação de formulário (campos obrigatórios, feedback de erro/sucesso e estados de loading).
  - Referência: `src/sections/contact.jsx`, `src/components/ui/contact-modal.jsx`
- [ ] Revisar acessibilidade de componentes interativos (navegação por teclado, foco visível, labels/aria em áreas clicáveis).
  - Referência: seções e modais principais
- [x] Padronizar links externos para HTTPS (havia links de Discord em HTTP).
  - Referência: `src/sections/about.jsx`, `src/sections/contact.jsx`, `src/components/ui/contact-modal.jsx`, `src/sections/felixoverse.jsx` — corrigido em 2026-04-18.

---

## Sugestão de ordem de execução (prioridade)

> Itens com ✅ foram concluídos em 2026-04-18.

1. **Fluxo crítico**: ✅ filtro de stack | roteamento + CTAs no-op (pendentes).
2. **Conteúdo real**: projetos, links, favicon/og-image e READMEs.
3. **Contato e blog**: envio real + publicação da seção blog.
4. **SEO e acessibilidade**: ✅ metadados/robots.txt/sitemap | favicon real + validações de formulário + UX.
