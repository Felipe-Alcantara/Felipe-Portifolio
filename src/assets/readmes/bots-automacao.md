# Bots & Automação

> Coleção de scripts Python para automação de tarefas do dia a dia

## 🤖 Sobre o Projeto

Uma biblioteca de bots e scripts de automação desenvolvidos em Python para facilitar tarefas repetitivas, desde automação web até processamento de dados.

## ✨ Funcionalidades

- **Web Scraping** automatizado
- **Automação de redes sociais**
- **Processamento de arquivos** em lote
- **Monitoramento de sistemas**
- **Backup automático** de dados
- **Notificações inteligentes**

## 🛠️ Tecnologias Utilizadas

- Python 3.9+
- Selenium WebDriver
- BeautifulSoup4
- Requests
- Schedule
- Pandas

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/felixo/bots-automacao.git

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
cp .env.example .env
```

## 🚀 Scripts Disponíveis

### 1. Bot de Monitoramento
```bash
python bots/monitor.py
```

### 2. Automação de Backup
```bash
python scripts/backup_auto.py
```

### 3. Web Scraper
```bash
python scrapers/data_collector.py
```

## ⚙️ Configuração

Edite o arquivo `config.json` com suas preferências:

```json
{
  "interval": 3600,
  "notifications": true,
  "backup_path": "/path/to/backup"
}
```

## 🤝 Contribuição

Contribuições são bem-vindas! Adicione novos bots ou melhore os existentes.

## 📄 Licença

MIT License