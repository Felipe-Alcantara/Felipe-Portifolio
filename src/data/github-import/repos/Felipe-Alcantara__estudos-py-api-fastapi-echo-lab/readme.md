# Projeto de estudo - API de Teste Simples

Este projeto consiste em uma configuração minimalista de uma API web utilizando **FastAPI** e um script cliente em Python para teste de conectividade e envio de parâmetros.

O objetivo principal é fornecer um ambiente leve para aprender sobre requisições HTTP, funcionamento de endpoints e testes de conectividade (possivelmente via túneis como o ngrok, como sugerido pelo código do cliente).

## 📂 Estrutura do Projeto

- **servidor_api.py**: O código da aplicação servidora. Define os endpoints e a lógica de resposta.
- **teste_cliente.py**: Um script cliente que faz requisições HTTP para a API para verificar se ela está respondendo corretamente e devolvendo os parâmetros enviados.

## 🚀 Como Funciona

### 1. O Servidor (`servidor_api.py`)
Utiliza o framework `FastAPI` para criar um servidor web rápido e assíncrono.
Ele expõe dois endpoints principais:

#### `GET /status`
Um endpoint de verificação de integridade (Health Check).
- **Objetivo**: Confirmar se a API está online e acessível.
- **Retorno**: Um JSON com status de sucesso.
  ```json
  {"mensagem": "API Online", "status": "Passou no teste"}
  ```

#### `GET /ecoar-parametros`
Um endpoint de reflexão (Echo).
- **Objetivo**: Receber quaisquer parâmetros de consulta (Query Params) enviados na URL e devolvê-los como JSON. Isso é útil para verificar se os dados estão chegando corretamente ao servidor.
- **Exemplo de chamada**: `/ecoar-parametros?nome=teste&id=123`
- **Retorno**:
  ```json
  {"nome": "teste", "id": "123"}
  ```

### 2. O Cliente (`teste_cliente.py`)
Utiliza a biblioteca `requests` para simular um acesso externo.
- Define uma `URL_ALVO` (atualmente configurada para um endereço ngrok, mas pode ser localhost).
- Envia uma requisição GET com parâmetros de teste (`{'chave': 'valor', ...}`).
- Verifica o código de status HTTP (espera-se 200 OK) e imprime a resposta do servidor.

## 🛠️ Pré-requisitos e Instalação

Você precisará do Python instalado e das bibliotecas listadas abaixo:

```bash
pip install fastapi uvicorn requests
```

## ▶️ Como Executar

### 1. Iniciar o Servidor
No terminal, execute o servidor utilizando o Uvicorn:

```bash
uvicorn servidor_api:aplicacao --reload
```
A API estará rodando localmente (geralmente em `http://127.0.0.1:8000`).

### 2. Executar o Cliente
Para testar, você pode rodar o script do cliente.
**Nota:** Verifique se a variável `URL_ALVO` em `teste_cliente.py` aponta para o endereço correto (localhost ou seu túnel ngrok).

```bash
python teste_cliente.py
```

## 💡 Por que isso é útil?

- **Aprendizado**: Entender a estrutura básica de "Request -> Processing -> Response" em APIs modernas.
- **Depuração**: O endpoint `/ecoar-parametros` é uma ferramenta excelente para depurar clientes HTTP, garantindo que os parâmetros estão sendo formatados e enviados corretamente.
- **Teste de Túneis**: Como o cliente aponta para uma URL `ngrok`, este setup é ideal para testar se sua máquina local está acessível via internet pública através de tunelamento.

