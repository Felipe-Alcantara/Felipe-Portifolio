# Plano de otimização de performance (sem perder a identidade visual)

## Problema e abordagem

O lag atual vem principalmente de animações contínuas em excesso (partículas duplicadas + glows + carrossel com muitos cards), não de uma única causa isolada.  
A estratégia é reduzir custo de renderização por frame, manter a estética neon/animada e aplicar carregamento progressivo onde o custo visual não precisa ser imediato.

---

## Diagnóstico detalhado (auditoria 2026-04-18)

### Bug crítico: BackgroundParticles duplicado

`App.jsx:143` e `hero.jsx:30` renderizam `<BackgroundParticles />` simultaneamente. São **35 partículas animadas × 2 instâncias = 70 animações Framer Motion concorrentes** na viewport inicial — causa direta e confirmada do lag perceptível no scroll e na interação.

**Fix**: remover a instância dentro de `hero.jsx` e manter somente a global em `App.jsx`.

### Filtro de stack quebrado (bug funcional)

`about.jsx` chama `onTechClick("React")` ao clicar em tecnologias, mas o filtro em `App.jsx` compara `project.tag === activeTag`. Nenhum projeto tem `tag: "React"` — os projetos usam tags de categoria (`web`, `code`, `game`, etc.). O clique nas techs da seção Sobre retorna 0 resultados silenciosamente.

### Links Discord em HTTP

`about.jsx`, `contact.jsx`, `contact-modal.jsx` e `felixoverse.jsx` têm links `http://discord.gg/...` sem HTTPS — falha de segurança e possível bloqueio por navegadores modernos.

### SEO ausente

- `index.html` usa favicon padrão do Vite (`/vite.svg`)
- `<title>Felipe Portfolio</title>` — genérico, sem nome de marca
- Sem `<meta name="description">`, Open Graph ou Twitter Card
- Sem `public/robots.txt`

### Modais no bundle inicial

`ProjectsModal` e `ProjectDetailsModal` são importados estaticamente em `App.jsx` apesar de só serem usados sob interação do usuário. Aumentam o bundle inicial desnecessariamente.

### Partículas sem controle de viewport e motion

- Nenhum `IntersectionObserver` pausando animação fora do viewport
- Nenhum suporte a `prefers-reduced-motion` — usuários com sensibilidade a movimento recebem a experiência completa sem opt-out

---

## Fases de execução

### 1. Instrumentar e definir baseline
- Medir Lighthouse (mobile/desktop), TBT, INP, FPS em scroll e interação.
- Registrar tamanhos de bundle/chunks e custo dos componentes críticos.
- Definir metas de regressão aceitáveis para manter visual.

### 2. Reduzir animação contínua global
- **[CRÍTICO]** Remover instância duplicada de `BackgroundParticles` em `hero.jsx`.
- Adicionar `prefers-reduced-motion` como fallback — desabilitar animações quando ativo.
- Pausar/anular animação fora de viewport com `IntersectionObserver`.
- Consolidar para uma única instância global (já gerenciada em `App.jsx`).

### 3. Reprojetar o carrossel pesado
- Substituir estratégia de triplicar listas (`loop`) por janela/virtualização horizontal.
- Limitar quantidade de cards ativos na árvore (renderização por faixa visível).
- Trocar animações de `box-shadow` contínuo por efeitos baseados em `opacity/transform`.
- Manter drag/auto-scroll, mas com throttling e pausa quando aba não está visível.

### 4. Enxugar efeitos CSS caros
- Revisar classes com `filter`, `box-shadow` e gradientes animados infinitos.
- Converter efeitos permanentes para estados de hover/focus ou animações pontuais.
- Definir "níveis de intensidade" (alto/médio/baixo) por seção.

### 5. Quebrar e adiar JavaScript não crítico
- **[FEITO]** Aplicar `React.lazy` + `Suspense` nos modais (`ProjectsModal`, `ProjectDetailsModal`).
- Garantir que blocos pesados carreguem só sob interação do usuário.
- Revisar importações e manter chunk inicial enxuto.

### 6. Ajustar imagens e mídia
- Garantir formatos modernos onde fizer sentido (WebP/AVIF).
- Ajustar `loading="lazy"` e `decoding="async"` para imagens fora da dobra.
- Reduzir tamanhos/resoluções acima da necessidade real de layout.

### 7. Validação final e hardening
- Comparar métricas com baseline.
- Revisar UX para confirmar manutenção da identidade visual.
- Documentar padrões de performance para evitar regressão futura.

---

## Status atual (auditoria 2026-04-18)

| Fase | Status | Observação |
|------|--------|------------|
| **Fase 1 — Baseline** | ⬜ Pendente | Não há registro de Lighthouse/TBT/INP/FPS |
| **Fase 2a — BackgroundParticles duplicado** | ✅ Concluído | Removido de `hero.jsx` — era 2× o custo de partículas |
| **Fase 2b — prefers-reduced-motion** | ✅ Concluído | Partículas desabilitadas quando motion reduzido |
| **Fase 2c — IntersectionObserver** | ✅ Concluído | Partículas pausam fora do viewport |
| **Fase 3 — Carrossel** | ⬜ Pendente | Estratégia de triplicação ainda em uso |
| **Fase 4 — Efeitos CSS caros** | 🟡 Parcial | Utilitários de glow existem, efeitos contínuos ainda amplos |
| **Fase 5 — Code-splitting modais** | ✅ Concluído | `React.lazy` aplicado em `ProjectsModal` e `ProjectDetailsModal` |
| **Fase 6 — Imagens e mídia** | 🟡 Parcial | WebP parcial, política de `loading="lazy"` incompleta |
| **Fase 7 — Validação final** | ⬜ Pendente | Aguarda baseline |

---

## Bugs funcionais corrigidos nesta sessão (2026-04-18)

| Bug | Arquivo | Fix |
|-----|---------|-----|
| BackgroundParticles duplicado | `hero.jsx:30` | Removida instância + import |
| Links Discord em HTTP | `about.jsx`, `contact.jsx`, `contact-modal.jsx`, `felixoverse.jsx` | Trocado para HTTPS |
| Filtro de stack quebrado | `about.jsx` | Labels mapeados para tags de categoria |
| SEO ausente | `index.html`, `public/` | Meta tags, OG, favicon, robots.txt |
| Modais no bundle inicial | `App.jsx` | `React.lazy` + `Suspense` |

---

## TODOs remanescentes (execução futura)

- [ ] `perf-baseline` — medir Lighthouse antes de novas otimizações
- [ ] `perf-carousel` — virtualização horizontal do carrossel
- [ ] `perf-css-effects` — revisar `filter`/`box-shadow` contínuos (parcial)
- [ ] `perf-images` — política ampla de `loading="lazy"` (parcial)
- [ ] `perf-validate` — validação final com comparação ao baseline

---

## Notas importantes

- Priorizar "sensação de fluidez" (scroll e clique) antes de micro-otimizações.
- Toda remoção de efeito visual deve ter substituto estético equivalente.
- Evitar mudanças de comportamento funcional; foco é custo de renderização.
- O carrossel (Fase 3) é o próximo maior ganho depois das partículas.
