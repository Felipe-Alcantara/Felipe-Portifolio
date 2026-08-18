# 📚 akita-articles

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-17%20passing-2ea44f?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Acesso programático aos artigos do blog [AkitaOnRails](https://akitaonrails.com): sincronização Git, busca, análise editorial e separação de texto.**

</div>

---

## 📋 Índice

- [🎯 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Como usar](#-como-usar)
- [🐍 Como biblioteca](#-como-biblioteca)
- [📁 Estrutura](#-estrutura)
- [©️ Licença do conteúdo](#️-licença-do-conteúdo)
- [🤝 Contribuições](#-contribuições)

---

## 🎯 Sobre o projeto

Este módulo isola tudo que envolve **obter e entender** os artigos do blog do Fabio Akita
(repositório oficial [`akitaonrails/akitaonrails.github.io`](https://github.com/akitaonrails/akitaonrails.github.io)):

- **Sincronização** — clona/atualiza o blog por Git (conteúdo limpo e proveniência por commit,
  sem scraping);
- **Catálogo** — lista e busca artigos por título, slug ou tag, ignorando caixa e acentos;
- **Separação de texto** — remove frontmatter e divide o corpo em seções com IDs estáveis;
- **Análise editorial** — palavras de prosa (código não conta), seções, blocos de código e links.

Ele nasceu como parte do [Audiofy Content AI](https://github.com/Felipe-Alcantara/Audiofy-Content-AI)
(geração de podcasts a partir de conteúdo) e foi extraído para ser reutilizável por qualquer
programa que precise dos artigos como dados estruturados.

## 🚀 Como usar

Requisitos: Python 3.10+ e `git`.

```bash
python3 start_app.py
```

O menu interativo permite sincronizar, listar, buscar e analisar artigos.
Atalhos diretos: `sync`, `list`, `status`, `search <termos>`, `show <AAAA-MM-DD/slug>`.

O clone local fica em `~/.local/share/akita-articles/` (configurável via
`AKITA_ARTICLES_HOME`).

## 🐍 Como biblioteca

```bash
pip install git+https://github.com/Felipe-Alcantara/akita-articles
```

```python
import akita_articles as akita

akita.sync()                                  # clona/atualiza o blog
refs = akita.search("fingerprint tiktok")     # busca por título/slug/tag
article = akita.get_article(refs[0].article_id)

print(article.ref.canonical_url)
print(article.analysis.words, "palavras de prosa")
for section in article.sections:
    print(section.section_id, section.heading)
```

## 📁 Estrutura

```text
akita-articles/
├── 📁 src/
│   └── 📁 akita_articles/
│       ├── config.py        # Origem e diretório local de dados
│       ├── repo.py          # Sincronização Git (somente leitura)
│       ├── parser.py        # Frontmatter, seções e análise editorial
│       └── catalog.py       # Listagem, busca e carga de artigos
├── 📁 tests/
│   └── 📁 unit/             # python3 -m unittest discover -s tests
├── start_app.py             # Menu interativo — porta de entrada
├── IA.md                    # Linha do tempo de decisões
├── pyproject.toml           # Instalável via pip
└── README.md
```

## ©️ Licença do conteúdo

O **código** deste módulo é MIT. Os **artigos** do blog pertencem a Fabio Akita e são
distribuídos sob **CC BY-NC-SA 4.0** — quem consumir o conteúdo por este módulo é responsável
por respeitar atribuição, uso não comercial e compartilhamento pela mesma licença.

## 🤝 Contribuições

Ideias bem-vindas: fixtures de Markdown Hugo mais representativas, suporte às traduções em
inglês (`index.en.md`), detecção de shortcodes e um índice invertido para busca em texto
integral.

## 👤 Autor

**Felipe Martin**

