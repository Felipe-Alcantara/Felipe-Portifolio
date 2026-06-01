# 🎙️ Podcast Organizer — Template

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Template para criar um site de exploração e organização de episódios de qualquer podcast.**

[Sobre](#sobre-o-template) • [Como Usar](#como-usar) • [Estrutura](#estrutura-do-projeto) • [Fontes](#adicionando-fontes-de-podcasts) • [Schema](#schema-dos-dados)

</div>

---

## Índice

- [Sobre o Template](#sobre-o-template)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Adicionando Fontes de Podcasts](#adicionando-fontes-de-podcasts)
- [Schema dos Dados](#schema-dos-dados)
- [Ecossistema de Podcasts](#ecossistema-de-podcasts)
- [Limitações](#limitações)
- [Licença](#licença)
- [Autor](#autor)

---

## Sobre o Template

O **Podcast Organizer** é um template completo para criar sites de exploração de podcasts. Cada instância é um site independente com:

- Listagem de episódios com filtros (programa, tema, convidado, período)
- Checklist local de episódios ouvidos
- Likes e playlists pessoais salvas no navegador
- Comentários e anotações por episódio
- Exportação/importação de playlists (arquivo JSON, link compartilhável)
- Backup completo dos dados locais
- Agregação de **múltiplas fontes** (sites Podcast Organizer, RSS, YouTube, Spotify) em um feed cronológico unificado
- Cache no navegador (IndexedDB) com estratégia *stale-while-revalidate* — visitas seguintes carregam instantâneo e revalidam em segundo plano
- Zero backend, zero login — tudo em `localStorage`

Baseado e evoluído a partir do [NerdCast Explorer](https://nerdcast.felixo.com.br).

---

## Estrutura do Projeto

```text
podcast-organizer/
│
├── 📁 data/                   # JSONs gerados pelos coletores (saída local)
├── 📁 docs/                   # Documentação técnica
│   └── PODCAST_SCHEMA.md      # Schema canônico dos dados
├── 📁 scripts/                # Coletores de dados (Python, sem dependências externas)
│   ├── fetch_api.py           # ADAPTAR: coleta da API própria do podcast
│   ├── fetch_rss.py           # Coleta de um feed RSS (sem credenciais)
│   ├── fetch_spotify.py       # Coleta de um show do Spotify (Client Credentials)
│   ├── fetch_youtube.py       # Coleta de um canal do YouTube (API key)
│   └── requirements.txt       # Dependências opcionais (openpyxl)
├── 📁 site/                   # Frontend React + TypeScript + Tailwind
│   ├── public/                # JSONs servidos pelo Vite (uma pasta por fonte inline)
│   └── src/
│       ├── App.tsx            # ADAPTAR: nome, emoji, storagePrefix e accentClasses
│       ├── sources.ts         # Lista de fontes agregadas (remote/local/inline)
│       ├── components/        # UI (cards, filtros, playlists, backup)
│       ├── hooks/             # useEpisodeData, useChecklist, useLikes, usePlaylists…
│       └── utils/             # episodeCache (IndexedDB), dataBackup, formatação…
│
├── IA.md                      # Contexto operacional para IA (decisões, coletas)
├── railway.json               # Configuração de deploy (Railway)
├── start.py                   # ADAPTAR: nome do podcast
├── README.md                  # Este arquivo
└── LICENSE
```

> A pasta `felixo-standards/` (padrões de qualidade) é versionada à parte e
> fica fora deste repositório (`.gitignore`).

---

## Como Usar

### Início rápido

```bash
# 1. Clone ou copie este repositório
# 2. Adapte os arquivos marcados com "TEMPLATE:" (ver seção abaixo)
# 3. Execute:
python start.py
```

### Rodando manualmente

```bash
# Coleta os dados do podcast
python scripts/fetch_api.py

# Copia os JSONs para o site
cp data/*.json site/public/

# Instala e roda o frontend
cd site
npm install
npm run dev
```

### Validação

```bash
cd site
npm run lint
npm run test
npm run build
```

---

## Adicionando Fontes de Podcasts

O site agrega múltiplos podcasts em um feed cronológico unificado. Cada podcast é uma **fonte** configurada em [site/src/sources.ts](site/src/sources.ts).

### Adicionar um podcast existente

Cada site Podcast Organizer publicado expõe seus dados em `https://dominio/episodes.json`. Para incluir um podcast no agregador:

```ts
// site/src/sources.ts
export const PODCAST_SOURCES: PodcastSource[] = [
  {
    id: 'nerdcast',
    name: 'NerdCast',
    emoji: '🎙️',
    type: 'remote',
    url: 'https://nerdcast.felixo.com.br',
    accent: 'violet',
  },
  {
    id: 'mrg',
    name: 'Matando Robôs Gigantes',
    emoji: '🤖',
    type: 'remote',
    url: 'https://mrg.felixo.com.br',
    accent: 'amber',
  },
]
```

O frontend faz fetch das três URLs (`episodes.json`, `programs.json`, `themes.json`) de cada fonte, prefixa os IDs para evitar colisão e mostra tudo em ordem cronológica unificada. O header exibe um badge para cada fonte com a contagem de episódios.

### Adicionar dados locais

Se o podcast ainda não tem site publicado, use `type: 'local'` e gere os JSONs com `scripts/fetch_api.py`:

```ts
{
  id: 'meu-podcast',
  name: 'Meu Podcast',
  emoji: '🎧',
  type: 'local',
  accent: 'emerald',
}
```

### Adicionar um canal do YouTube

Canais do YouTube entram como fonte `inline`: um script gera os JSONs no mesmo
schema canônico (em um subdiretório de `site/public/`) e o feed mescla os vídeos
cronologicamente com os demais podcasts. A reprodução acontece no próprio
YouTube — o site só guarda o link externo (sem player/embed).

**1. Gere os dados** com a [YouTube Data API v3](https://console.cloud.google.com/apis/library/youtube.googleapis.com) (crie uma chave em *APIs & Services → Credentials*):

```bash
export YOUTUBE_API_KEY="sua-chave"   # nunca commite a chave — só do ambiente
python scripts/fetch_youtube.py --handle @flowpodcast --out site/public/flow
# ou por ID do canal:
python scripts/fetch_youtube.py --channel-id UCxxxxxxxx --out site/public/flow
# teste sem gravar:
python scripts/fetch_youtube.py --handle @flowpodcast --out site/public/flow --dry-run
```

O script usa a playlist de uploads do canal (barato em quota: ~60 unidades das
10.000 diárias para ~1000 vídeos). Lives já encerradas (VOD) são incluídas.

> **Estourou a quota diária?** O script salva o progresso parcial
> (`<out>/.youtube_checkpoint.json`) e grava os episódios já coletados. Basta
> rodar o **mesmo comando** após a renovação da quota (meia-noite no horário do
> Pacífico) que ele continua de onde parou. Ao concluir, o checkpoint é apagado.

**2. Registre a fonte** em [site/src/sources.ts](site/src/sources.ts), apontando `path` para o subdiretório gerado:

```ts
{
  id: 'flow-yt',
  name: 'Flow (YouTube)',
  emoji: '▶️',
  type: 'inline',
  path: 'flow',
  accent: 'rose',
}
```

### Adicionar um podcast por RSS

Shows com feed RSS público (Anchor, Omny, Acast, etc.) entram como fonte
`inline` sem nenhuma credencial. O coletor é um parser offline (`xml.etree`,
zero dependências externas).

> **Dica:** muitos shows que só divulgam o link do Spotify têm RSS público.
> Descubra o feed pela [iTunes Search API](https://itunes.apple.com/search?term=NOME&media=podcast)
> e confirme a identidade pelo casamento de título + autor antes de coletar.

```bash
# Coleta um feed RSS para um subdiretório de site/public/
python scripts/fetch_rss.py \
    --feed https://anchor.fm/s/XXXXXXXX/podcast/rss \
    --out site/public/meu-podcast \
    --program-slug meu-podcast --program-name "Meu Podcast"
# teste sem gravar:
python scripts/fetch_rss.py --feed <url> --out site/public/meu-podcast --limit 10 --dry-run
```

### Adicionar um show do Spotify

Para shows **exclusivos do Spotify** (sem RSS público), use `fetch_spotify.py`.
Ele usa o *Client Credentials Flow* — crie um app em
[developer.spotify.com/dashboard](https://developer.spotify.com/dashboard) e
exporte as credenciais (nunca as commite):

```bash
export SPOTIFY_CLIENT_ID="..."         # só do ambiente
export SPOTIFY_CLIENT_SECRET="..."
python scripts/fetch_spotify.py \
    --show-id 0PotM85Af5JaXZvb2tFGpV \
    --out site/public/meu-show \
    --program-slug meu-show --program-name "Meu Show"
```

> A coleta é retomável (`<out>/.spotify_checkpoint.json`) e respeita os limites
> de taxa da API (`Retry-After` em 429, backoff em 5xx). O áudio fica vazio — o
> campo `url` aponta para o episódio no Spotify.

Depois registre a fonte em [site/src/sources.ts](site/src/sources.ts) com
`type: 'inline'` e `path` apontando para o subdiretório gerado (igual ao exemplo
do YouTube acima).

### Cores disponíveis (campo `accent`)

`violet`, `amber`, `emerald`, `rose`, `cyan`, `fuchsia`, `sky`, `orange`,
`green`, `teal`, `yellow`.

Para outras cores, adicione uma entrada na função `accentClasses` em
[site/src/App.tsx](site/src/App.tsx) (o mapa é explícito porque o Tailwind faz
purge de classes geradas dinamicamente).

---

## Schema dos Dados

Consulte [docs/PODCAST_SCHEMA.md](docs/PODCAST_SCHEMA.md) para a especificação completa dos campos obrigatórios de `episodes.json`.

**Resumo dos arquivos em `data/` e `site/public/`:**

| Arquivo | Obrigatório | Descrição |
|---|---|---|
| `episodes.json` | ✅ | Lista de episódios no schema canônico |
| `programs.json` | ✅ | Lista de programas/séries |
| `themes.json` | ✅ | Lista de temas/categorias |
| `guests.json` | ⬜ | Lista de convidados (enriquece os episódios) |

---

## Ecossistema de Podcasts

Este template é a base para uma família de sites independentes. Cada podcast tem seu próprio repositório e deploy, mas todos compartilham o mesmo formato de dados — permitindo que um agregador futuro consuma todos os `episodes.json` em ordem cronológica.

```
nerdcast-explorer/data/episodes.json  ─┐
mrg-explorer/data/episodes.json       ─┼──► agregador (feed unificado)
flow-explorer/data/episodes.json      ─┘
```

O campo `storagePrefix` em `App.tsx` garante que os dados de cada instância ficam isolados no `localStorage`, mesmo que um usuário abra vários sites no mesmo browser.

---

## Limitações

- Checklist, likes e comentários ficam no navegador — não sincronizam entre dispositivos automaticamente.
- Playlists podem ser exportadas e importadas manualmente entre dispositivos.
- A descrição completa dos episódios depende de API externa configurada em `episode-content.ts`.

---

## Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE).

---

## Autor

**Felipe Martin**

- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

---

⭐ Se o template foi útil, considere deixar uma estrela no GitHub!

