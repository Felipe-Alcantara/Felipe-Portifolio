# Conversor de MKV para MP3 em Python

Este é um script Python simples e eficiente para extrair áudio de arquivos de vídeo MKV e convertê-los para o formato MP3. O projeto utiliza a biblioteca `moviepy` para realizar a conversão.

## 📋 Funcionalidades

- **Conversão Individual**: Converta um único arquivo MKV para MP3.
- **Conversão em Lote**: Converta todos os arquivos MKV de uma pasta automaticamente.
- **Bitrate Personalizável**: Escolha a qualidade do áudio de saída (padrão: 192k).
- **Detecção Automática do FFmpeg**: O script verifica se o FFmpeg está instalado no sistema ou utiliza a versão fornecida pelo `imageio-ffmpeg`.

## 🚀 Pré-requisitos

- Python 3.6 ou superior
- FFmpeg (Geralmente instalado automaticamente com as dependências, mas pode ser instalado separadamente no sistema)

## 🔧 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/Conversor-de-MKV-pra-MP3-em-Python.git
   cd Conversor-de-MKV-pra-MP3-em-Python
   ```

2. Instale as dependências necessárias:
   ```bash
   pip install -r requirements.txt
   ```

## 📖 Como Usar

1. Execute o script principal:
   ```bash
   python conversor_mkv_mp3.py
   ```

2. Um menu interativo será exibido com as seguintes opções:

   ```text
   ==================================================
   Conversor de MKV para MP3
   ==================================================

   Escolha uma opção:
   1 - Converter um único arquivo
   2 - Converter todos os arquivos de uma pasta
   3 - Sair
   ```

3. **Opção 1 (Arquivo Único)**:
   - Insira o caminho completo do arquivo MKV.
   - (Opcional) Insira a pasta de destino. Se deixar em branco, o MP3 será salvo na mesma pasta do vídeo.
   - (Opcional) Defina o bitrate (ex: 128k, 192k, 320k).

4. **Opção 2 (Pasta Inteira)**:
   - Insira o caminho da pasta contendo os arquivos MKV.
   - O script processará todos os arquivos `.mkv` encontrados na pasta.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


