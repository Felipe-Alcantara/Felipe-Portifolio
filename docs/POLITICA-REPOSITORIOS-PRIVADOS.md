# Política de repositórios privados no portfólio

## Estado da correção

Em 18/08/2026, a sincronização foi alterada para consultar somente repositórios
públicos. O endpoint autenticado usa `visibility=public` e o serviço mantém uma
guarda defensiva antes de buscar linguagens ou README. Snapshots antigos com
`private: true` também são removidos do índice e dos itens gerados.

O workflow ainda pode usar um token para autenticação e limite de API, mas não
precisa de acesso a conteúdo privado. O segredo `GH_SYNC_TOKEN` deve ser
rotacionado e substituído por um token com o menor escopo necessário, idealmente
somente leitura de recursos públicos (ou removido se a API pública atender o
limite de uso).

## Curadoria manual

Privacidade do repositório não decide sozinha se a apresentação é inadequada.
Um projeto privado pode ter uma ficha editorial pública quando isso fizer
sentido e não publicar código, README ou metadados sensíveis. Esse caso precisa
ser explícito em `portfolio-items.overrides.json` com
`allowPrivatePresentation: true`. A revisão de 18/08/2026 aprovou fichas para
Alura, Aprendendo-a-fazer-bots-do-discord, Cardshot-Roulette,
Curso-em-Video---Curso-de-HTML, Curso-de-HTML-Completo-Programacao-Web,
Exemplos_Clean_Code, Meu-jogo e Podcast-organizer. Elas são manuais e não
possuem `repoFolder`, portanto o carregador não empacota README privado.

Ficaram fora do site FelixoVerse (planejamento interno, conversas e orçamento),
LM-consultoria-imobili-ria-Controle-de-Captacao (sistema interno de cliente e
credenciais de demonstração), Verstappen (fluxo de verificação de cartões),
Presente-de-anivers-rio-Gemini-2.0 (conteúdo pessoal), Trabalho-da-faculdade
(entrega acadêmica com identificação de equipe) e desktop-tutorial (tutorial
genérico sem apresentação de portfólio). Novos repositórios privados não entram
automaticamente no site; uma apresentação futura exige a mesma revisão e uma
entrada manual sem importar arquivos do repositório.

## Histórico

Esta alteração remove os artefatos privados do estado publicado daqui para
frente. Ela não reescreve o histórico Git do portfólio. Os commits anteriores
continuam contendo os READMEs removidos; como havia material potencialmente
confidencial de projeto de cliente, a limpeza histórica deve ser feita em uma
operação separada e coordenada, após definir a política de retenção e avisar os
colaboradores.
