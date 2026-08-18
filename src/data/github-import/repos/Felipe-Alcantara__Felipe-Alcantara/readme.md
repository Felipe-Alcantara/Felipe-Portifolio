<h1 align="center">Felipe Alcântara</h1>

<p align="center">
  Construo ferramentas para trabalhar com IA — e o padrão que mantém isso sustentável.
</p>

<p align="center">
  <a href="https://felixo.com.br">felixo.com.br</a> ·
  <a href="https://blog.felixo.com.br">blog</a> ·
  Volta Redonda, Brasil
</p>

---

## Quem eu sou

Desenvolvedor full-stack com foco em **backend e automação**. Hoje meu trabalho gira em torno de uma pergunta: *como fazer agentes de IA produzirem software que continue bom depois que eles saem de cena?*

A resposta que venho construindo tem três partes, e cada uma virou repositório aqui: um **ambiente** para orquestrar vários agentes ao mesmo tempo, um **padrão de qualidade** escrito para ser lido por modelo, e **ferramentas de linha de comando** que dão aos agentes acesso real às coisas — sem interface no meio.

Trabalho na **Vitis Souls**, cuidando da parte interna dos sistemas e coordenando o time de desenvolvimento: auditoria de código, padronização de projetos e a arquitetura dos serviços que o resto do time consome.

---

## Projetos principais

Estão agrupados por família, porque é assim que eles se relacionam de verdade.

### 🧠 Orquestração de agentes

**[Felixo AI Core](https://github.com/Felipe-Alcantara/Felixo-AI-Core)** — um canvas onde vários agentes de IA trabalham em paralelo, cada um no seu terminal, coordenando-se por arquivos `.md` compartilhados. Electron + React + TypeScript. Tem passagem de contexto entre agentes, biblioteca de skills no padrão Agent Skills, sincronização de repositórios embutida e um catálogo de prompts prontos.

É o projeto onde mais aprendi, porque quase todo problema dele é de **produto**, não de código: como um agente sabe o que já foi feito? Como você passa contexto sem perder o fio? O que acontece quando dois agentes mexem no mesmo arquivo?

### 📐 Padrão de qualidade

**[Felixo System Design](https://github.com/Felipe-Alcantara/Felixo-System-Design)** — os padrões que todos os meus projetos seguem: design system de frontend e backend, política de git, guia mínimo de qualidade, e o template de `IA.md` — um arquivo de memória operacional que permite a outra IA (ou outra pessoa) retomar um projeto sem reler tudo.

Foi escrito para ser **consumido por modelo**, não só lido por gente. É o repositório que melhor explica como eu trabalho.

### 🔌 Automação do Notion

**[Automações do Notion](https://github.com/Felipe-Alcantara/Automa-es-do-Notion)** — o hub de um ecossistema de quatro repositórios que transforma o Notion em base de trabalho para agentes:

| Repositório | Papel |
| --- | --- |
| [notion-starter](https://github.com/Felipe-Alcantara/notion-starter) | Biblioteca Python: cliente resiliente, schema, conteúdo, relatórios |
| [notion-tasks-cli](https://github.com/Felipe-Alcantara/notion-tasks-cli) | CLI escrita para IAs — um "MCP via CLI" |
| [notion-workspace-app](https://github.com/Felipe-Alcantara/notion-workspace-app) | API Django + SPA React + servidor MCP |

O CLI é a peça que eu mais uso: qualquer modelo com acesso a terminal opera o workspace inteiro, e o `--help` foi escrito para ser lido por ele.

### 🎙️ Conteúdo com IA

**[Audiofy Content AI](https://github.com/Felipe-Alcantara/Audiofy-Content-AI)** — transforma qualquer conteúdo escrito em podcast ou audiolivro, com pipeline verificável e **custo aparecendo em tempo real** enquanto gera. Python + Electron + OpenRouter.

### ⚡ Ferramentas de terminal

**[openia](https://github.com/Felipe-Alcantara/Openia)** — launcher de CLIs de IA: escolhe, instala e abre a ferramenta já configurada com a chave do OpenRouter. A escolha do modelo fica dentro de cada CLI; o `openia` cuida do que ninguém quer fazer duas vezes — instalar e configurar.

**[Fetch All](https://github.com/Felipe-Alcantara/Fetch-All)** — sincroniza todos os repositórios git da máquina de uma vez, mas **conservador por princípio**: varre, classifica e mostra o plano; `pull` é sempre `--ff-only`, e push ou commit exigem confirmação explícita. Cada passada gera relatório auditável.

### 🎧 Scraping e automação

**[SoundScraper](https://github.com/Felipe-Alcantara/SoundScraper-soundcloud_track_scraper_downloader)** — coleta e baixa faixas do SoundCloud (Selenium para navegar, yt-dlp para baixar). É o repositório onde a **arquitetura em camadas** fica mais visível: `core` com a regra pura, `backend` e `frontend` separados, testes próprios, e três portas de entrada para o mesmo domínio — CLI, web e o menu do `start_app.py`.

A lição que ele carrega: quando o núcleo não sabe se está sendo chamado por um terminal, por uma página ou por um menu, acrescentar a terceira interface custa quase nada.

### ✍️ Web

**[Blog](https://github.com/Felipe-Alcantara/felixo-blog)** ([blog.felixo.com.br](https://blog.felixo.com.br)) — Astro + Tailwind, e um editor desktop que publica direto de uma database do Notion, com gate de qualidade antes do commit.

---

## Como eu trabalho

Se você olhar meus repositórios, vai encontrar quatro arquivos se repetindo. Eles não são burocracia — cada um resolve um problema que já me custou caro:

- **`IA.md`** — memória operacional em linha do tempo. Decisão tomada, com o motivo e a alternativa descartada; bug cuja causa não era óbvia; número medido; validação real (o comando rodado e a saída observada). É **append-only**: registro antigo não é reescrito, porque é ele que impede alguém de refazer um caminho já descartado.

- **`AGENTS.md`** — as regras de trabalho daquele repositório, endereçadas a quem chega. Um agente que lê isso primeiro erra menos do que um agente mais inteligente que não leu.

- **`start_app.py`** — porta de entrada única. Um menu interativo onde se instala, configura e roda, sem decorar comando.

- **Gate de qualidade** — lint e testes, verdes antes do commit, com CI.

Três princípios que aplico com teimosia:

**Prefiro script a mudança manual.** Toda vez que preciso manipular dados, escrevo uma ferramenta reutilizável em vez de fazer na mão. Script vira patrimônio: modelos cada vez melhores podem lê-lo, melhorá-lo e estendê-lo. Clique manual não deixa rastro.

**Regra em documento não segura quem não leu.** Quando uma regra importa de verdade, ela vira comportamento da ferramenta. Se escrever no lugar errado é um erro comum, o comando **recusa** e explica o caminho certo — em vez de existir só um aviso no README que ninguém abriu.

**Medir antes de opinar.** "Está grande", "está lento" e "está bagunçado" não são diagnósticos. Número é.

---

## Como eu me foco

Aprendo em **hiperfocos**: janelas em que a atenção trava num assunto e absorver custa quase nada. Em vez de brigar com isso, organizei meu trabalho em volta — minha lista de tarefas tem literalmente uma prioridade chamada *Hiperfoco*, para o momento em que o contexto está fresco e existe urgência real de terminar antes que a vontade passe.

O efeito colateral bom: como assuntos diferentes entram fundo, eles acabam se conectando. Boa parte do que faço nasce de ligar duas coisas que aprendi em hiperfocos separados.

---

## Como eu programo

Sem medo de stack nova. A programação está mais perto de uma **arte mosaica** do que de uma prova com uma resposta certa por questão: existem peças disponíveis e a composição que você faz com elas.

Isso não é desculpa para bagunça — o limite é o que quebra o jogo: segurança, dado de usuário, e dívida que outra pessoa vai pagar. Dentro disso, se a ferramenta existe e resolve, ela é jogável.

---

## Stack

**Backend** Python · Django · FastAPI · Node.js
**Frontend** React · TypeScript · Astro · Tailwind · Electron
**Dados** PostgreSQL · SQLite · Prisma
**IA** OpenRouter · Claude · MCP · Agent Skills
**Infra** Railway · Vercel · GitHub Actions

---

<p align="center">
  <a href="https://felixo.com.br">Portfólio</a> ·
  <a href="https://blog.felixo.com.br">Blog</a> ·
  <a href="https://github.com/Felipe-Alcantara?tab=repositories">Todos os repositórios</a>
</p>

