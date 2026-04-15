# Plano de otimização de performance (sem perder a identidade visual)

## Problema e abordagem
O lag atual vem principalmente de animações contínuas em excesso (partículas + glows + carrossel com muitos cards), não de uma única causa isolada.  
A estratégia será reduzir custo de renderização por frame, manter a estética neon/animada, e aplicar carregamento progressivo onde o custo visual não precisa ser imediato.

## Fases de execução

1. **Instrumentar e definir baseline**
   - Medir Lighthouse (mobile/desktop), TBT, INP, FPS em scroll e interação.
   - Registrar tamanhos de bundle/chunks e custo dos componentes críticos.
   - Definir metas de regressão aceitáveis para manter visual.

2. **Reduzir animação contínua global**
   - Consolidar `BackgroundParticles` para uma camada global (evitar múltiplas instâncias por seção).
   - Diminuir densidade e frequência das partículas.
   - Pausar/anular animação fora de viewport com `IntersectionObserver`.
   - Respeitar `prefers-reduced-motion` como fallback de baixo custo.

3. **Reprojetar o carrossel pesado**
   - Substituir estratégia de triplicar listas (`loop`) por janela/virtualização horizontal.
   - Limitar quantidade de cards ativos na árvore (renderização por faixa visível).
   - Trocar animações de `box-shadow` contínuo por efeitos baseados em `opacity/transform`.
   - Manter drag/auto-scroll, mas com throttling e pausa quando aba não está visível.

4. **Enxugar efeitos CSS caros**
   - Revisar classes com `filter`, `box-shadow` e gradientes animados infinitos.
   - Converter efeitos permanentes para:
     - estados de hover/focus;
     - animações pontuais (não contínuas);
     - pseudo-elementos mais leves.
   - Definir “níveis de intensidade” (alto/médio/baixo) por seção.

5. **Quebrar e adiar JavaScript não crítico**
   - Aplicar code-splitting para modais e conteúdos de README.
   - Garantir que blocos pesados carreguem só sob interação do usuário.
   - Revisar importações e manter chunk inicial enxuto.

6. **Ajustar imagens e mídia**
   - Garantir formatos modernos onde fizer sentido (WebP/AVIF).
   - Ajustar `loading="lazy"` e `decoding="async"` para imagens fora da dobra.
   - Reduzir tamanhos/resoluções acima da necessidade real de layout.

7. **Validação final e hardening**
   - Comparar métricas com baseline.
   - Revisar UX para confirmar manutenção da identidade visual.
   - Documentar padrões de performance para evitar regressão futura.

## Todos (execução)
- `perf-baseline`
- `perf-particles`
- `perf-carousel`
- `perf-css-effects`
- `perf-bundle-splitting`
- `perf-images`
- `perf-validate`

## Notas importantes
- Priorizar “sensação de fluidez” (scroll e clique) antes de micro-otimizações.
- Toda remoção de efeito visual deve ter substituto estético equivalente.
- Evitar mudanças de comportamento funcional; foco é custo de renderização.
