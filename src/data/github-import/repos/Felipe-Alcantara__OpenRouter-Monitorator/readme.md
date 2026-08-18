# 📊 OpenRouter Monitorator

<div align="center">

![Python](https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.139-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Dashboard + CLI para monitorar o uso, os custos e o desempenho dos modelos da sua conta OpenRouter**

[🚀 Como Usar](#-como-usar) • [📖 Configuração](CONFIGURATION.md) • [🧩 Endpoints](#-endpoints-da-api) • [🤝 Contribuir](#-contribuições)

</div>

---

## 📋 Índice

- [🌟 Destaque Principal](#-destaque-principal) ⭐ **DESTAQUE**
- [📝 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Funcionalidades](#-funcionalidades)
- [🚀 Como Usar](#-como-usar)
- [📊 Exemplos de Uso](#-exemplos-de-uso)
- [🧩 Endpoints da API](#-endpoints-da-api)
- [🔧 Funcionamento Interno](#-funcionamento-interno)
- [⚠️ Limitações](#-limitações)
- [🔒 Segurança](#-segurança)
- [📄 Licença](#-licença)
- [👤 Autor](#-autor)
- [🤝 Contribuições](#-contribuições)

---

## 🌟 Destaque Principal

> **📊 Enxergue para onde vai o seu dinheiro na OpenRouter — sem planilha, sem adivinhação.**

O OpenRouter Monitorator sincroniza o **uso agregado de toda a sua conta** (todos os modelos, todas as chamadas) e responde as perguntas que importam:

- 💰 **Quanto gastei** — custo total e por modelo, com tendência diária
- 🔋 **Quanto ainda posso usar** — limite da chave com barra de percentual disponível
- 🔤 **Em que gastei** — tokens de entrada e saída por modelo e por dia
- 🏆 **Qual modelo vale mais a pena** — três recomendações complementares baseadas no seu uso real:
  - **Melhor custo-benefício** → mais tokens de saída por dólar
  - **Mais barato** → menor custo por requisição
  - **Mais eficiente** → mais tokens totais processados por dólar
- ⚡ **Setup em um comando** — `python start_app.py` instala, configura e roda

---

## 📝 Sobre o Projeto

**OpenRouter Monitorator** é uma aplicação full-stack (CLI + Dashboard Web) que coleta e analisa o uso da API OpenRouter. Ele busca o histórico de uso agregado da conta inteira e apresenta os dados por dois caminhos:

- **Dashboard Web** (React + Chart.js) — gráficos e tabelas que atualizam sozinhos
- **CLI Interativa** (questionary + rich) — consultas rápidas e coloridas no terminal

Tudo começa por um **menu único** (`start_app.py`) que instala, configura, roda e mostra status — pensado para funcionar bem mesmo para quem não tem familiaridade com terminal.

O projeto segue o padrão de qualidade **Felixo System Design**: arquitetura em camadas, separação de responsabilidades, segredos fora do repositório e documentação viva (veja [`IA.md`](IA.md)).

### ✨ Fonte de dados: uso da conta inteira

Os dados vêm do endpoint `GET /activity` da OpenRouter, que retorna o uso **agregado por modelo por dia**, dos últimos 30 dias corridos — ou seja, o total da conta, não uma requisição isolada. A sincronização é opcional e exige uma **Management Key** separada (veja [Configuração](#-como-usar)).

---

## 📁 Estrutura do Projeto

```
OpenRouter Monitorator/
│
├── start_app.py               # 🎯 Entrada única: menu interativo (obrigatório)
├── README.md                  # Este arquivo
├── CONFIGURATION.md           # Guia detalhado de todas as variáveis de config
├── CLAUDE.md                  # Guia de arquitetura para desenvolvimento assistido por IA
├── IA.md                      # Linha do tempo de decisões, bugs e validações
├── .env.example               # Template de configuração (copie para .env)
├── requirements.txt           # Dependências Python de execução, pinadas
├── requirements-dev.txt       # Testes, lint, tipos e auditoria, pinados
├── pyproject.toml             # Configuração central das ferramentas de qualidade
├── alembic.ini                # Configuração das migrações do SQLite
├── 📁 .github/workflows/      # Validação automática de backend e frontend
│
├── 📁 backend/                # API FastAPI + sincronização
│   ├── main.py                # Entry point do FastAPI (+ loop de sync em background)
│   ├── migrations/            # Histórico versionado do schema (Alembic)
│   └── app/
│       ├── api/               # Rotas HTTP e schemas Pydantic (sem regra de negócio)
│       ├── services/          # Lógica de negócio e orquestração
│       ├── domain/            # Regras e modelos puros, sem framework
│       ├── repositories/      # Modelos e acesso ao SQLite via SQLAlchemy
│       ├── integrations/      # Cliente da API OpenRouter
│       └── core/              # Config, banco, wizard de setup e guias
│
├── 📁 cli/                    # Interface de terminal
│   ├── main.py                # Menu e telas da CLI
│   ├── client.py              # Cliente HTTP que fala com o backend
│   └── formatters.py          # Formatação de moeda, tokens e erros
│
└── 📁 frontend/               # Dashboard web
    ├── package.json
    └── src/
        ├── App.jsx            # Componente raiz + busca de dados
        ├── components/        # SummaryCard, MetricsTable, ModelComparison, CostTrendChart
        └── main.jsx           # Bootstrap do React
```

---

## ⚙️ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Menu Interativo** | Instalar, configurar, rodar e checar status — tudo sem flags, via `start_app.py` |
| **Resumo de Custos** | Custo total e por modelo, tokens de entrada/saída, período configurável |
| **Limite da Chave** | Barra acessível com créditos e percentual ainda disponível; suporta chave ilimitada |
| **Uso Diário por Modelo** | Detalhamento real por modelo e por dia (dados sincronizados do `/activity`) |
| **Comparação de Modelos** | Tabela lado a lado + 3 recomendações (custo-benefício, mais barato, mais eficiente) |
| **Tendência de Custo** | Custo diário agregado de todos os modelos ao longo do tempo |
| **Sincronização Real** | Busca o uso de toda a conta e os créditos disponíveis na OpenRouter |
| **Dashboard Web** | Gráficos e tabelas com auto-refresh (FastAPI + React + Chart.js) |
| **CLI Interativa** | Consultas rápidas no terminal com tabelas coloridas (rich) |
| **Banco Local** | SQLite — nenhum dado sai da sua máquina, sem dependência externa |

---

## 🚀 Como Usar

### 1️⃣ Forma recomendada: menu interativo

```bash
python start_app.py
```

O menu oferece:

1. **Instalar/Configurar** — cria o ambiente virtual, instala dependências e o `.env`
2. **Configurar** — define chaves da API, intervalo de sync, caminho do banco e portas
3. **Rodar Serviços** — inicia Backend, Frontend, CLI ou tudo junto
4. **Status/Detalhes** — mostra o que está rodando e um resumo da config
5. **Sair**

A configuração fica guardada em `.env`; nas próximas vezes é só rodar `start_app.py` de novo.

> 💡 No Windows, backend e frontend abrem em **janelas de terminal próprias**, deixando o menu livre.

### 2️⃣ Setup manual (opcional)

```bash
# Criar e ativar o ambiente virtual
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate

# Instalar dependências de desenvolvimento (inclui backend/CLI)
pip install -r requirements-dev.txt

# Instalar dependências do frontend (requer Node.js)
cd frontend && npm ci && cd ..

# Criar o arquivo de configuração
cp .env.example .env              # edite e adicione suas chaves da OpenRouter
```

### 3️⃣ Rodar os serviços manualmente

```bash
# Backend (FastAPI) — http://localhost:8000  (docs em /docs)
python -m backend.main

# Frontend (Vite/React) — http://localhost:5173
cd frontend && npm run dev

# CLI interativa
python -m cli.main
```

### 🔑 Chaves da OpenRouter

O app usa **duas chaves distintas** (ambas configuráveis em "Configurar"):

| Variável | Para que serve | Obrigatória? |
|---|---|---|
| `OPENROUTER_API_KEY` | Chave de inferência — consulta limite, saldo e consumo da própria chave | Para a barra de limite |
| `OPENROUTER_MANAGEMENT_KEY` | Chave de Provisioning/Management — necessária para sincronizar uso e créditos | Opcional |

Sem a Management Key o app funciona normalmente, mas **a sincronização fica desativada** e nenhum dado novo é buscado. Crie uma em <https://openrouter.ai/settings/management-keys>. Detalhes em [CONFIGURATION.md](CONFIGURATION.md).

---

## 📊 Exemplos de Uso

### Dashboard Web

Acesse `http://localhost:5173` para ver:

- Cartões de resumo (custo total, tokens, nº de modelos)
- Barra do limite da chave e percentual disponível
- Gráfico de tendência de custo diário
- Tabela de uso diário por modelo
- Comparação de modelos com os três destaques de recomendação

### CLI

```text
$ python -m cli.main

? O que você gostaria de visualizar?
 » 1. Resumo
   2. Limite da Chave de API
   3. Uso Diário por Modelo
   4. Comparação de Modelos
   5. Tendência de Custo
   6. Sincronizar agora
   7. Sair

# Exemplo — Comparação de Modelos
🏆 Melhor custo-benefício: qwen/qwen3-30b-a3b (53.3K tokens de saída por dólar)
💲 Mais barato: qwen/qwen3-30b-a3b ($0.0037 por requisição)
⚡ Mais eficiente: qwen/qwen3-30b-a3b (7.5M tokens totais por dólar)
```

> A sincronização real requer a **Management Key**. Sem ela, o app funciona, mas nenhum dado é buscado da OpenRouter.

---

## 🧩 Endpoints da API

Servidos pelo backend FastAPI sob o prefixo `/api` (documentação interativa em `http://localhost:8000/docs`):

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/metrics/summary` | Estatísticas agregadas de custo e tokens |
| `GET` | `/api/metrics/daily` | Uso real por modelo por dia (dados sincronizados) |
| `GET` | `/api/metrics/trend` | Tendência de custo diário de todos os modelos |
| `GET` | `/api/models` | Lista de modelos com uso registrado |
| `GET` | `/api/models/comparison` | Comparação lado a lado + recomendações |
| `GET` | `/api/key/limit` | Limite, saldo e percentual disponível da chave de inferência |
| `POST` | `/api/sync` | Sincroniza uso e créditos com a OpenRouter |
| `GET` | `/api/config` | Configuração higienizada (sem segredos) |
| `GET` | `/api/metrics` | Reservado para requisições individuais (atualmente vazio, veja [Limitações](#-limitações)) |

Formato de erro consistente:

```json
{ "detail": "Mensagem amigável", "error_code": "NAO_AUTORIZADO", "timestamp": "2026-07-18T10:30:00Z" }
```

---

## 🔧 Funcionamento Interno

- **Arquitetura em camadas**: API (HTTP) → Services (regra de negócio) → Repositories (banco) → Integrations (OpenRouter). O `domain/` guarda as entidades sem dependências de framework.
- **Limite da chave no domínio**: a integração valida os campos de `GET /api/v1/key`; o domínio calcula uma única vez o percentual disponível; CLI e web apenas apresentam o resultado. Saldo ausente permanece como desconhecido, sem ser convertido em 0%.
- **Migrações versionadas**: Alembic aplica o schema no startup e permite evolução auditável do SQLite.
- **Sincronização em background**: ao subir, o backend agenda uma tarefa assíncrona que chama `sync_from_openrouter()` a cada `POLLING_INTERVAL_SECS`, pulando em silêncio se a Management Key não estiver configurada.
- **Um provedor ou vários**: quando o `/activity` retorna mais de uma linha para o mesmo modelo/dia (roteado por provedores diferentes), o repositório soma os valores por `(modelo, dia)` antes de gravar.
- **As três recomendações** vivem em `MetricService.get_model_comparison()` e só consideram modelos com um volume mínimo de requisições, para uma amostra pequena não distorcer o ranking.

Para o registro completo de decisões e validações, veja [`IA.md`](IA.md).

---

## ⚠️ Limitações

- **Sem histórico por requisição**: a OpenRouter não expõe requisições individuais retroativamente. A granularidade real é **modelo + dia**. A rota `/api/metrics` e a entidade `RequestMetric` existem, mas ficam vazias — reservadas para uma futura interceptação em tempo real.
- **Janela de 30 dias**: o `/activity` cobre os últimos 30 dias corridos (UTC).
- **Sincronização exige Management Key**: sem ela, nenhum dado novo é buscado.
- **Sem latência/qualidade**: os dados agregados não trazem latência por requisição, então a comparação foca em custo e tokens.

---

## 🔒 Segurança

- ✅ **Segredos fora do código** — chaves vivem só no `.env` (que é gitignored)
- ✅ **Validação de entrada** — Pydantic valida requisições e respostas
- ✅ **Sem log de segredos** — chaves nunca são registradas por completo
- ✅ **Persistência local** — métricas sincronizadas ficam no SQLite da própria máquina; somente as chamadas explícitas de integração vão à OpenRouter
- ✅ **Config higienizada** — `/api/config` nunca devolve chaves
- ✅ **Dependências controladas** — versões exatas, lockfile, auditoria e workflow de qualidade

---

## 📄 Licença

Este projeto está sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE).

---

## 👤 Autor

Desenvolvido por **Felipe Martin**, seguindo o padrão de qualidade **Felixo System Design**.

Documentação de apoio:
- **[CONFIGURATION.md](CONFIGURATION.md)** — todas as variáveis de configuração explicadas
- **[CLAUDE.md](CLAUDE.md)** — guia de arquitetura e workflow
- **[IA.md](IA.md)** — linha do tempo de decisões, bugs e validações

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias que o projeto poderia expandir
- Melhorar a documentação

Ideias abertas à comunidade: alertas de custo por e-mail, exportação para CSV/JSON, percentis de latência (caso a OpenRouter passe a expor), previsão de orçamento e mais tipos de gráfico.

Antes de commitar, confira o checklist em [CLAUDE.md](CLAUDE.md#checklist-before-committing) e a política de versionamento do padrão Felixo.

---

⭐ Se este projeto te ajudou a entender seus gastos na OpenRouter, considere deixar uma estrela no GitHub!

