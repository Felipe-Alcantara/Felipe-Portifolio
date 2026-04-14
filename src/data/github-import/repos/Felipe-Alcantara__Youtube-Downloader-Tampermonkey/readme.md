# YouTube Downloader Tampermonkey

Um downloader de vídeos do YouTube que combina um userscript do Tampermonkey com um servidor FastAPI local, permitindo downloads diretos através de um botão flutuante na interface do YouTube.

## 🚀 Características

- **Botão flutuante** no YouTube para downloads rápidos
- **Interface interativa** no terminal para seleção de qualidade
- **Múltiplos formatos** suportados (MP4, MP3, várias resoluções)
- **Download automático** usando yt-dlp
- **Servidor local** FastAPI para processamento
- **Fácil instalação** com gerenciamento automático de dependências

## 📋 Pré-requisitos

- Python 3.7+
- Navegador com Tampermonkey instalado
- FFmpeg (para conversão de áudio)

## 🛠️ Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/Youtube-Downloader-Tampermonkey.git
cd Youtube-Downloader-Tampermonkey
```

### 2. Instale as dependências
```bash
pip install -r requirements.txt
```

### 3. Instale o userscript
1. Abra o Tampermonkey no seu navegador
2. Clique em "Criar um novo script"
3. Copie e cole o conteúdo de `youtube_downloader.user.js`
4. Salve o script (Ctrl+S)

## 🎯 Como usar

### 1. Inicie o servidor
```bash
python server.py
```
O servidor será iniciado em `http://127.0.0.1:8000`

### 2. Acesse o YouTube
1. Vá para qualquer vídeo do YouTube
2. Você verá um botão "Download" flutuante no canto inferior direito
3. Clique no botão para iniciar o download

### 3. Selecione a qualidade
No terminal onde o servidor está rodando, você verá opções como:
```
1. Best Quality (Video + Audio)
2. 1080p (MP4/MKV)
3. 720p (MP4/MKV)
4. 480p (MP4/MKV)
5. Audio Only (MP3)
```

### 4. Aguarde o download
O arquivo será salvo na pasta onde o servidor está rodando.

## ⚙️ Configuração

### Alterar porta do servidor
Edite a linha no `server.py`:
```python
uvicorn.run(app, host="0.0.0.0", port=8000)  # Altere 8000 para sua porta
```

E no `youtube_downloader.user.js`:
```javascript
const SERVER_URL = 'http://127.0.0.1:8000';  // Altere a porta aqui também
```

### Personalizar pasta de download
Edite a opção `outtmpl` no `server.py`:
```python
'outtmpl': 'Downloads/%(title)s.%(ext)s',  # Salva na pasta Downloads
```

## 📁 Estrutura do projeto

```
Youtube-Downloader-Tampermonkey/
├── server.py                    # Servidor FastAPI principal
├── youtube_downloader.user.js   # Userscript do Tampermonkey
├── requirements.txt             # Dependências Python
├── LICENSE                      # Licença MIT
└── README.md                   # Este arquivo
```

## 🔧 Tecnologias utilizadas

- **FastAPI** - Framework web para o servidor
- **yt-dlp** - Biblioteca para download de vídeos
- **Tampermonkey** - Extensão para userscripts
- **JavaScript** - Userscript para interface do YouTube
- **Python** - Backend do servidor

## 🐛 Solução de problemas

### Botão não aparece
- Verifique se o Tampermonkey está ativo
- Confirme se o script está habilitado
- Recarregue a página do YouTube

### Erro de conexão
- Certifique-se de que o servidor Python está rodando
- Verifique se a porta 8000 não está sendo usada por outro programa
- Confirme se o URL no userscript corresponde ao servidor

### Download falha
- Verifique sua conexão com a internet
- Alguns vídeos podem ter restrições de download
- Certifique-se de que o FFmpeg está instalado para conversões de áudio

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ⚠️ Aviso legal

Este projeto é apenas para fins educacionais. Respeite os termos de serviço do YouTube e as leis de direitos autorais do seu país. Use apenas para conteúdo que você tem permissão para baixar.

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma [issue](https://github.com/seu-usuario/Youtube-Downloader-Tampermonkey/issues).

