# 🎬 Backup de Vídeos para Membros

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![yt-dlp](https://img.shields.io/badge/yt--dlp-Motor%20de%20download-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-Remux%20MKV-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)
![Rich](https://img.shields.io/badge/Rich%20%2B%20Questionary-Menu%20interativo-00d7af?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Preserve localmente os vídeos exclusivos para membros de um canal do YouTube ao qual sua conta tem acesso — backup incremental, em um único MKV por vídeo, com tudo embutido.**

[🚀 Como Usar](#-como-usar) • [🍪 Cookies (importante!)](#-autenticação-por-cookies) • [🔧 Funcionalidades](#-funcionalidades-técnicas) • [⚠️ Limitações](#%EF%B8%8F-limitações)

</div>

---

## 📋 Índice

- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 **Como Usar**](#-como-usar) ⭐ **DESTAQUE**
- [🍪 Autenticação por Cookies](#-autenticação-por-cookies)
- [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [⚠️ Limitações](#%EF%B8%8F-limitações)
- [🛡️ Segurança e Uso Responsável](#%EF%B8%8F-segurança-e-uso-responsável)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)
- [🤝 Contribuições](#-contribuições)

---

## 📋 Sobre o Projeto

Programa que faz **backup local dos vídeos exclusivos para membros** de um canal do YouTube, usando o [yt-dlp](https://github.com/yt-dlp/yt-dlp) como motor de download.

Caso de uso típico: o dono de um canal pede a um membro de confiança uma cópia de preservação do conteúdo exclusivo. A autenticação usa **os cookies da sua própria conta** (logada e com a assinatura de membro ativa) — nenhuma senha, token ou cookie é gravado no repositório.

O que torna este backup confiável:

- **🎯 Só vídeos de membros**: a descoberta filtra por `availability=subscriber_only`, e o download repete o filtro como cinto de segurança — vídeos públicos nunca entram.
- **🔄 Incremental**: um arquivo de progresso registra cada vídeo concluído; rodar de novo só baixa o que falta. Rode periodicamente para capturar vídeos novos.
- **📦 Arquivo único por vídeo**: título, descrição, capítulos, thumbnail (capa), legendas e o `info.json` completo ficam **embutidos dentro do MKV** — nada de arquivos soltos.
- **🧹 Autoconsolidação**: vídeos baixados por versões antigas (com metadados em arquivos soltos) são convertidos automaticamente para o formato de arquivo único, via remux local sem perda.

## 📁 Estrutura do Projeto

```
Backup Vídeos para membros/
│
├── start_app.py               # ⭐ Porta de entrada: menu interativo
│
├── 📁 src/
│   └── 📁 backup_membros/     # Lógica do programa, separada do menu
│       ├── config.py          # Configuração em config.json
│       ├── downloader.py      # Descoberta + download via yt-dlp
│       ├── embedder.py        # Consolidação: embute metadados no MKV
│       └── status.py          # Checagens reais do ambiente
│
├── config.example.json        # Modelo de configuração (copie os valores pelo menu)
├── requirements.txt           # Dependências Python
├── IA.md                      # Memória operacional: decisões, bugs e validações
├── README.md                  # Este arquivo
└── LICENSE
```

## 🚀 Como Usar

### Opção única (e a mais fácil): o menu interativo 🌐

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Backup-Videos-Para-Membros.git

# Entre na pasta
cd Backup-Videos-Para-Membros

# Abra o menu (ele instala as próprias dependências na primeira vez)
python start_app.py
```

No menu você escolhe: **Iniciar backup**, **Instalar/Setup**, **Configurar** e **Status/Sair**. Cada opção explica o que faz — não é preciso decorar comando nenhum.

### Primeira vez, passo a passo

1. **Instalar/Setup** — instala o yt-dlp e confere o **FFmpeg** e um **runtime JavaScript** (Deno ou Node, exigido pelo YouTube atual); se faltar algo, o menu mostra como instalar.
2. **Configurar** — informe a URL da aba de vídeos do canal (ex.: `https://www.youtube.com/@canal/videos`), a origem dos cookies, a pasta de destino e a qualidade máxima.
3. **Iniciar backup** — o programa lista os vídeos de membros, testa o acesso com seus cookies e baixa só o que falta, mostrando o progresso.

> 💡 A URL pode ser a aba `/videos` normal: o filtro de disponibilidade garante que **apenas** os vídeos de membros serão baixados.

## 🍪 Autenticação por Cookies

Você precisa estar com a conta **membro do canal** logada. Duas formas de fornecer os cookies:

| Origem | Quando usar |
|--------|-------------|
| **Arquivo `cookies.txt`** (recomendado no Windows) | Sempre funciona. Exporte com a extensão [Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc). |
| **Direto do navegador** | Prático no Firefox. No Windows, navegadores Chromium (Chrome/Brave/Edge) costumam falhar com erro de DPAPI — a criptografia deles impede a leitura externa. |

**Como exportar o `cookies.txt` do jeito certo** (senão o YouTube invalida os cookies no meio do backup, com o erro `cookies are no longer valid... rotated in the browser`):

1. Abra uma **janela anônima/privada** e faça login no YouTube com a conta membro;
2. Na página do YouTube, exporte o `cookies.txt` (habilite a extensão no modo anônimo);
3. **Feche a janela anônima** antes de rodar o backup — sessão fechada não rotaciona cookies;
4. Salve como `cookies.txt` na pasta do projeto e escolha "Arquivo cookies.txt" em Configurar.

Detalhes na [wiki do yt-dlp](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies).

## 🔧 Funcionalidades Técnicas

### Fluxo do backup (`downloader.py`)

- **`discover_member_videos(config)`**: lista a aba do canal em modo leve (`--flat-playlist`) e separa só `availability=subscriber_only`.
- **`check_member_access(config, video)`**: testa 1 vídeo pendente antes de iniciar — se os cookies não abrem, o backup nem começa (falha rápida e explicada).
- **`build_download_command(config, batch_file)`**: baixa apenas a lista pendente com `--download-archive` (incremental), `bestvideo+bestaudio` remuxado em **MKV**, e `--embed-metadata --embed-thumbnail --embed-subs`.

### Consolidação (`embedder.py`)

Converte vídeos de rodadas antigas para o formato de arquivo único, com garantias:

- Só **remux local** (`-c copy`): rápido, sem recomprimir, nada é rebaixado;
- **Troca atômica**: escreve em temporário e só substitui o original após sucesso + verificação de tamanho;
- **Idempotente**: vídeo já consolidado é ignorado; downloads em andamento (`.part`) são pulados;
- Redeclara `filename`/`mimetype` dos anexos existentes via ffprobe (o FFmpeg não propaga essas tags em remux).

Exemplo do resultado: `video.mkv + video.info.json + video.webp` → `video.mkv` (com `info.json` e `cover.webp` como anexos internos, extraíveis com `ffmpeg -dump_attachment`).

### Robustez

- Executa o yt-dlp via `python -m yt_dlp` — sempre a versão que o Setup instalou, nunca uma cópia velha do PATH;
- Nomes de arquivo seguros no Windows (`--windows-filenames`) e sem uso de glob interno (títulos contêm `[ ]`);
- `--sleep-requests` e `--retries` para ser educado com o servidor e tolerar falhas pontuais.

## ⚠️ Limitações

- **Cookies expiram**: o YouTube rotaciona cookies de sessões ativas; use o método da janela anônima ([acima](#-autenticação-por-cookies)).
- **Chromium no Windows**: a leitura direta de cookies do Chrome/Brave/Edge falha por criptografia (DPAPI); use `cookies.txt` ou Firefox.
- **Qualidade fixada no momento do download**: vídeos já registrados no progresso não são rebaixados se você aumentar a qualidade depois; para rebaixar, apague o vídeo e a linha correspondente do `download_archive.txt`.
- **Dependências externas**: FFmpeg e um runtime JavaScript (Deno/Node) precisam estar instalados — o menu Status confere e o Setup orienta.

## 🛡️ Segurança e Uso Responsável

⚠️ **IMPORTANTE:** cookies são credenciais da sua conta.

- `config.json`, `cookies.txt` e as pastas de download são **ignorados pelo git** — nunca versione cookies;
- Use somente com canais cujo dono **autorizou o backup** e com uma conta que tenha, legitimamente, acesso de membro;
- O backup é para **preservação local**, não para redistribuição de conteúdo pago.

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

## 👤 Autor

**Felipe Martin (Felipe Alcantara)**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)
- Padrão de qualidade: [Felixo System Design](https://github.com/Felipe-Alcantara/Felixo-System-Design)

## 🤝 Contribuições

Contribuições são bem-vindas! Ideias abertas à comunidade:

- Agendamento do backup (rodar automaticamente uma vez por dia/semana);
- Verificação de integridade periódica dos arquivos baixados;
- Notificação (e-mail/Discord) quando novos vídeos forem preservados;
- Testes unitários de `build_download_command`, `validate_config` e `embedder`.

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!

