# 🤖 Prompt Estruturado — Sub-sistema de Importação de Repositórios GitHub

> Prompt pronto para criar, neste repositório, um sub-sistema que importa metadados de todos os repositórios do GitHub sem clonar código e já transforma os dados para o formato esperado pelo site.

---

## Contexto de referência

- Repositório alvo: `Felipe-Portifolio`
- Fonte de padrão: [`felixo-standards`](https://github.com/Felipe-Alcantara/Felixo-System-Design)
- Guia base usado: `felixo-standards/Utils/GUIA-INTEGRACAO-REUTILIZAVEL-COM-API-DO-GITHUB-PARA-COLETA-DE-REPOSITORIOS-PUBLICOS-E-PRIVADOS.md`
- Formato atual do site: `src/data/projects.jsx`

---

## Prompt (copiar e usar)

````markdown
Você é um engenheiro sênior responsável por implementar um novo sub-sistema neste repositório React (Vite) para importar meus repositórios do GitHub e transformar os dados para o formato que o site já entende.

Siga os padrões do guia:
- `felixo-standards/Utils/GUIA-INTEGRACAO-REUTILIZAVEL-COM-API-DO-GITHUB-PARA-COLETA-DE-REPOSITORIOS-PUBLICOS-E-PRIVADOS.md`

Siga também, de forma obrigatória, o padrão de qualidade do felixo-standards:
- `felixo-standards/PADRÕES DE DESIGN/DESIGN_SYSTEM_PARA_BACKEND.md`

## Objetivo
Criar um sub-sistema de sincronização que:
1. Importe todos os meus repositórios (públicos e privados quando token estiver disponível).
2. Não clone nenhum repositório localmente.
3. Crie uma subpasta para cada repositório com metadados organizados.
4. Gere uma saída final já compatível com o formato consumido pelo site em `src/data/projects.jsx`.
5. Seja um sistema de uso interno, não público, voltado apenas para facilitar a adição e atualização de projetos no site.

## Regras obrigatórias
1. Não usar `git clone`.
2. Usar API oficial do GitHub com paginação (`per_page=100` + loop de páginas).
3. Deduplicar por `html_url`.
4. Privados só podem ser coletados quando `authenticatedLogin === username`.
5. Implementar tratamento explícito para 401, 403, 404 e 5xx (com retry/backoff para falhas temporárias).
6. Não vazar token em logs.
7. Toda decisão de arquitetura, organização de módulos, tratamento de erros e manutenção deve respeitar o padrão de qualidade do `felixo-standards`.
8. Não criar interface pública, rota pública ou exposição externa deste sub-sistema; ele deve operar somente como ferramenta interna de sincronização.
9. A sincronização deve ser idempotente: ao rodar várias vezes, atualizar dados existentes sem duplicar registros e sem apagar conteúdos já importados que ainda sejam válidos.
10. Persistir repositórios por chave estável (`owner/name` ou `html_url`) e aplicar estratégia de upsert para arquivos consolidados e por-repositório.

## Estrutura esperada do sub-sistema
Crie e use esta estrutura:

`src/data/github-import/`
- `index.json` (catálogo consolidado dos repositórios importados)
- `portfolio-items.generated.json` (dados já mapeados para UI)
- `repos/`
  - `<owner>__<repo>/`
    - `metadata.json` (dados principais normalizados)
    - `languages.json` (resultado de `/languages`, quando disponível)
    - `readme.md` (README raw, quando disponível)
    - `manifest.json` (resumo interno da pasta)

## Contrato mínimo de `metadata.json`
Exemplo de objeto:
{
  "owner": "string",
  "name": "string",
  "fullName": "string",
  "description": "string",
  "private": true,
  "repoUrl": "string",
  "homepage": "string",
  "topics": ["string"],
  "language": "string",
  "stars": 0,
  "forks": 0,
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601",
  "defaultBranch": "string"
}

## Mapeamento obrigatório para o formato do site
Gerar `portfolio-items.generated.json` no formato equivalente aos itens usados no site:
- `title`
- `tag`
- `desc`
- `link`
- `createdAt`
- `status`
- `complexity`
- `stack`
- `properties`
- `links` com:
  - `github`
  - `site`
  - `demo`
  - `download`
  - `post`

Regras de mapeamento:
1. `title` = nome do repositório (normalizado para exibição).
2. `desc` = description do GitHub (fallback: `"Sem descrição"`).
3. `link` e `links.github` = URL do repositório.
4. `links.site` = homepage do repo (fallback `"#"`).
5. `createdAt` = `created_at`.
6. `status` = `"Finalizado"` para repositório arquivado; caso contrário `"Em Desenvolvimento"`.
7. `stack` = tópicos + linguagens detectadas (sem duplicação).
8. `tag` = inferência por linguagem/tópicos com fallback `"code"`.

## Entradas por ambiente
Use variáveis de ambiente:
- `GITHUB_USERNAME` (obrigatória)
- `GITHUB_TOKEN` (opcional, habilita privados e maior limite)
- `GITHUB_IMPORT_MAX_REPOS` (opcional, limite de segurança)

## Entregas esperadas
1. Código do sub-sistema em pasta dedicada (ex.: `src/utils/github-import/` + script em `scripts/`).
2. Comando npm para sincronizar (ex.: `npm run sync:github`).
3. Geração automática das pastas por repositório em `src/data/github-import/repos/`.
4. Geração do arquivo consolidado e do arquivo mapeado para UI.
5. Documentação curta de uso no `README.md` e/ou `docs/`.

## Critérios de aceite
1. Executo um único comando e os dados são sincronizados.
2. Cada repositório vira uma subpasta com seus arquivos de metadados.
3. Nenhum repositório é clonado.
4. O arquivo gerado final pode ser consumido pelo site sem ajuste manual.
5. Se um perfil falhar, o sistema registra o erro e não corrompe os dados já importados.
6. Reexecuções sucessivas atualizam metadados sem criar duplicatas.
7. Reexecuções não apagam dados já existentes de forma destrutiva; apenas atualizam, complementam ou marcam estado conforme regra definida.

## Forma de resposta que eu quero
1. Diagnóstico curto do estado atual do repositório.
2. Plano objetivo de implementação por etapas.
3. Implementação completa.
4. Lista final de arquivos criados/alterados.
````
