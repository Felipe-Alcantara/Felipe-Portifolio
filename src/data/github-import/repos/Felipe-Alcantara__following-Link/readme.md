# Following Link

🔗 Script Python para extrair os links de todos os perfis que você segue no GitHub.

## 📋 Descrição

Este script faz scraping da sua página "following" no GitHub e extrai os links de todos os perfis que você segue, salvando-os em arquivos de texto e JSON.

## 🚀 Como usar

### 1. Instalar dependências

```bash
pip install -r requirements.txt
```

### 2. Executar o script

```bash
python get_following.py
```

O script irá:
- Buscar todos os perfis que você segue (paginando automaticamente)
- Exibir o progresso no terminal
- Salvar os resultados em dois arquivos:
  - `Felipe-Alcantara_following.txt` - Lista simples de URLs
  - `Felipe-Alcantara_following.json` - Formato JSON com metadados

## 📦 Dependências

- `requests` - Para fazer requisições HTTP ao GitHub
- `beautifulsoup4` - Para parsing e extração de dados do HTML

## 🔧 Personalização

Para usar com outro usuário, edite a variável `username` no arquivo `get_following.py`:

```python
username = "seu-usuario-github"
```

## 📄 Formato dos arquivos de saída

### arquivo.txt
```
https://github.com/usuario1
https://github.com/usuario2
https://github.com/usuario3
```

### arquivo.json
```json
{
  "username": "Felipe-Alcantara",
  "total": 123,
  "profiles": [
    "https://github.com/usuario1",
    "https://github.com/usuario2"
  ]
}
```

## ⚠️ Notas

- O script adiciona um pequeno delay entre as requisições para não sobrecarregar os servidores do GitHub
- Funciona com perfis públicos do GitHub
- Os arquivos de saída são adicionados ao `.gitignore` automaticamente

## 📝 Licença

Este projeto está sob a licença que você definir.
