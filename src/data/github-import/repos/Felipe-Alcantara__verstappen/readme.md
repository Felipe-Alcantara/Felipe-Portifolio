# Verstappen - Sistema de Verificação de Cartões

## 📋 Descrição

O **Verstappen** é um sistema completo de verificação de cartões de crédito que combina uma API backend em Python (FastAPI) com uma interface web moderna em React. O sistema simula transações reais através de integração com serviços externos para validar a funcionalidade de cartões de crédito.

## 🏗️ Arquitetura

### Backend (Python/FastAPI)
- **Framework**: FastAPI com suporte assíncrono
- **Funcionalidades**:
  - Geração automática de dados pessoais fictícios
  - Integração com Firebase Authentication
  - Simulação de transações com gateway de pagamento
  - Sistema de retry automático para requisições
  - Logging detalhado de operações

### Frontend (React)
- **Framework**: React 19 com React Router
- **Funcionalidades**:
  - Tela de login com autenticação simples
  - Interface para teste de cartões
  - Exibição de resultados em tempo real
  - Design responsivo e intuitivo

## 🚀 Funcionalidades Principais

### 🔐 Autenticação
- Sistema de login básico para acesso à aplicação
- Proteção de rotas sensíveis

### 💳 Verificação de Cartões
- Entrada de dados no formato: `numero|mes|ano|cvv`
- Processamento assíncrono das verificações
- Integração com múltiplos gateways de pagamento
- Resultados detalhados com status e mensagens

### 🤖 Automação Inteligente
- Geração automática de dados pessoais para testes
- Criação de contas temporárias no Firebase
- Simulação completa do fluxo de compra
- Sistema de retry com backoff exponencial

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.8+**
- **FastAPI** - Framework web moderno e rápido
- **httpx** - Cliente HTTP assíncrono
- **Pydantic** - Validação de dados
- **asyncio** - Programação assíncrona

### Frontend
- **React 19** - Biblioteca para interfaces de usuário
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **CSS3** - Estilização

## 📦 Estrutura do Projeto

```
verstappen/
├── App.py                 # API Backend (FastAPI)
├── my-app/               # Aplicação React
│   ├── public/           # Arquivos públicos
│   ├── src/              # Código fonte React
│   │   ├── App.js        # Componente principal
│   │   ├── LoginScreen.js # Tela de login
│   │   ├── CardCheckScreen.js # Tela de verificação
│   │   └── ...
│   └── package.json      # Dependências do React
└── README.md            # Este arquivo
```

## 🚦 Como Executar

### Backend
```bash
# Instalar dependências
pip install fastapi httpx pydantic uvicorn

# Executar servidor
uvicorn App:app --reload --port 8000
```

### Frontend
```bash
# Navegar para o diretório
cd my-app

# Instalar dependências
npm install

# Executar aplicação
npm start
```

## 🔧 Configuração

### Variáveis de Ambiente
- `PROXY_URL`: URL do proxy (opcional)

### Portas
- **Backend**: http://localhost:8000
- **Frontend**: http://localhost:3000

## 📝 Uso

1. Acesse a aplicação em `http://localhost:3000`
2. Faça login com qualquer email/senha
3. Na tela de verificação, insira os dados do cartão no formato: `numero|mes|ano|cvv`
4. Clique em "Verificar" para processar
5. Visualize o resultado da verificação

## ⚠️ Aviso Legal

Este projeto é destinado exclusivamente para fins educacionais e de teste. Não deve ser utilizado para atividades ilegais ou não autorizadas. O uso inadequado é de total responsabilidade do usuário.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.
