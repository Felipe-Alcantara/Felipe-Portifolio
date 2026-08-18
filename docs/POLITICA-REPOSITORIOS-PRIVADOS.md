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
`allowPrivatePresentation: true`; atualmente o único caso aprovado é Alura,
que descreve estudos de um curso pago sem expor o código-fonte.

Novos repositórios privados não entram automaticamente no site. Para publicar
uma apresentação, a curadoria deve revisar o conteúdo e criar uma entrada
manual sem importar arquivos do repositório.

## Histórico

Esta alteração remove os artefatos privados do estado publicado daqui para
frente. Ela não reescreve o histórico Git do portfólio. Os commits anteriores
continuam contendo os READMEs removidos; como havia material potencialmente
confidencial de projeto de cliente, a limpeza histórica deve ser feita em uma
operação separada e coordenada, após definir a política de retenção e avisar os
colaboradores.
