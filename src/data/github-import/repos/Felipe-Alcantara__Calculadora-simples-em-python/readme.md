<div align="center">

# 🧮 Calculadora Científica Pro

### Uma calculadora científica moderna e elegante desenvolvida em Python

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![Tkinter](https://img.shields.io/badge/GUI-Tkinter-green.svg)](https://docs.python.org/3/library/tkinter.html)
[![Brython](https://img.shields.io/badge/Web-Brython-orange.svg)](https://brython.info/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-Online-success.svg)](https://felipe-alcantara.github.io/Calculadora-simples-em-python/)

[🌐 Demo Online](https://felipe-alcantara.github.io/Calculadora-simples-em-python/) • [🚀 Instalação](#-instalação) • [💻 Uso](#-uso) • [🌟 Features](#-features)

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="80" height="80"/>

---

</div>

## 📖 Sobre o Projeto

Este projeto é uma **calculadora científica completa** desenvolvida em Python, disponível em **duas versões**:

- **🖥️ Desktop**: Interface gráfica usando Tkinter com design moderno
- **🌐 Web**: Versão Brython que roda diretamente no navegador

O projeto começou como um exercício de aprendizado e evoluiu para uma aplicação profissional com funções científicas avançadas, demonstrando conceitos de GUI, tratamento de eventos, operações matemáticas complexas e design responsivo.

---

## ✨ Features

### 🎨 Interface Moderna
- ✅ Design dark mode elegante com gradientes
- ✅ **Tema claro e escuro alternáveis** 🌙☀️
- ✅ **Preferência de tema salva automaticamente**
- ✅ Cores vibrantes e intuitivas para diferentes tipos de botões
- ✅ Display de alta legibilidade com fonte personalizada
- ✅ Efeitos visuais e animações suaves
- ✅ Histórico de cálculos com timestamps

### 🔧 Funcionalidades Básicas
- ➕ Operações básicas: adição, subtração, multiplicação e divisão
- 🔢 Suporte para números decimais
- 📊 Suporte para parênteses
- 🧹 Botão de limpeza (Clear)
- ⌨️ Suporte completo para teclado
- ⏮️ Função backspace (apagar último dígito)

### 🔬 Funções Científicas
- **√** Raiz quadrada
- **x²** Potência ao quadrado
- **xʸ** Potência customizada
- **%** Porcentagem
- **1/x** Inverso
- **sin/cos/tan** Funções trigonométricas (em graus)
- **log** Logaritmo base 10
- **ln** Logaritmo natural
- **π** Constante Pi (3.14159...)
- **e** Constante de Euler (2.71828...)

### 📜 Histórico de Cálculos
- 💾 Registro automático de todos os cálculos
- ⏰ Timestamp de cada operação (HH:MM:SS)
- 📊 Visualização organizada e scrollável
- 🗑️ Botão para limpar histórico
- 💾 **Salvamento automático local** (persiste entre sessões)
- 📤 **Exportar histórico em arquivo .txt**
- 🎨 Interface com cards e animações
- 💻 **Desktop**: Salvo em `calculator_history.json`
- 🌐 **Web**: Salvo em `localStorage` do navegador

### � Regra de 3 Simples
- ✨ Janela dedicada para cálculos de regra de 3
- 🎯 Interface intuitiva com 3 valores de entrada
- 🔢 Cálculo automático do valor X
- 📝 Exemplos práticos inclusos
- 💾 Resultado adicionado ao histórico
- ⌨️ Suporte para tecla Enter

### �📱 Responsividade
- 📐 Layout adaptativo para diferentes tamanhos de tela
- 🖱️ Botões com feedback visual ao clicar
- 💡 Interface intuitiva e fácil de usar
- 📱 Funciona perfeitamente em dispositivos móveis

---

## 🚀 Instalação

### Versão Desktop (Tkinter)

#### Pré-requisitos
- Python 3.8 ou superior
- Tkinter (geralmente já vem com Python)

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Calculadora-simples-em-python.git

# Entre na pasta do projeto
cd Calculadora-simples-em-python

# Execute a calculadora
python "Calculadora (Editado e finalizado).py"
```

### Versão Web (Brython)

#### Opção 1: Abrir diretamente no navegador

```bash
# Navegue até a pasta docs
cd docs

# Abra o arquivo index.html no navegador
# Windows:
start index.html

# Linux/Mac:
open index.html
```

#### Opção 2: Servidor local (Recomendado)

```bash
# Entre na pasta docs
cd docs

# Inicie um servidor HTTP simples
python -m http.server 8000

# Acesse no navegador
# http://localhost:8000
```

---

## 💻 Uso

### Versão Desktop

1. Execute o arquivo Python:
   ```bash
   python "Calculadora (Editado e finalizado).py"
   ```

2. Use o mouse para clicar nos botões ou digite diretamente

3. **Operações disponíveis:**
   
   **Básicas:**
   - **Números**: 0-9
   - **Operadores**: +, -, ×, ÷
   - **Decimal**: .
   - **Parênteses**: ( )
   - **Limpar**: C
   - **Apagar**: ← (backspace)
   - **Calcular**: =
   
   **Científicas:**
   - **√**: Raiz quadrada do número atual
   - **x²**: Eleva ao quadrado
   - **xʸ**: Potência (digite o número, clique xʸ, digite o expoente)
   - **%**: Converte para porcentagem (divide por 100)
   - **1/x**: Calcula o inverso
   - **sin/cos/tan**: Funções trigonométricas (ângulo em graus)
   - **log**: Logaritmo base 10
   - **ln**: Logaritmo natural
   - **π**: Insere o valor de Pi
   - **e**: Insere o valor de Euler

4. **Regra de 3:**
   - Clique no botão "📐 Regra de 3"
   - Preencha os valores A, B e C
   - O valor X será calculado automaticamente
   - Fórmula: A/B = C/X → X = (B×C)/A

5. **Alternar Tema:**
   - Clique no botão "☀️ Modo Claro" ou "🌙 Modo Escuro"
   - O tema será salvo automaticamente
   - Escolha entre interface clara ou escura

6. **Histórico:**
   - Visualize todos os cálculos realizados
   - 🗑️ **Limpar**: Remove todo o histórico
   - 💾 **Exportar**: Salva em arquivo .txt
   - **Desktop**: Histórico salvo em `calculator_history.json` (mesmo diretório do script)
   - **Web**: Histórico salvo no `localStorage` do navegador
   - Persiste entre sessões (desktop e web)

### Versão Web

1. Acesse a calculadora no navegador

2. **Atalhos de teclado**:
   - `0-9`: Números
   - `+`, `-`, `*`, `/`: Operadores
   - `Enter`: Calcular resultado
   - `Backspace`: Apagar último dígito
   - `Escape`: Limpar tudo

**Regra de 3:**
- Preencha A, B e C nos campos
- Pressione Enter ou clique em "Calcular"
- O resultado X aparece automaticamente
- Use "Limpar" para nova operação

---

## 📁 Estrutura do Projeto

```
Calculadora-simples-em-python/
├── 📄 Calculadora (Editado e finalizado).py  # Versão Desktop (Tkinter)
├── 📁 docs/                                   # Versão Web (Brython)
│   ├── 📄 index.html                         # Página principal
│   ├── 📄 regra-de-3.html                    # Página de Regra de 3
│   ├── 🎨 style.css                          # Estilos e design
│   ├── 🐍 calculator.py                      # Lógica em Python
│   └── 📝 README.md                          # Documentação web
├── 📜 LICENSE                                 # Licença MIT
└── 📖 README.md                               # Este arquivo
```

---

## 🎨 Paleta de Cores

A calculadora utiliza dois esquemas de cores:

### Tema Escuro (Padrão)

| Elemento | Cor | Código |
|----------|-----|--------|
| Background Principal | Cinza Escuro | `#1e1e2e` |
| Display | Cinza Médio | `#2e2e3e` |
| Texto Display | Verde Neon | `#00ff88` |
| Botões Numéricos | Roxo Escuro | `#3e3e5e` |
| Botões Operadores | Laranja | `#ff6b35` |
| Botão Clear | Roxo Claro | `#6b5eff` |
| Botão Igual | Verde Vibrante | `#00ff88` |
| Botões Científicos | Verde | `#2ecc71` |
| Botão Regra de 3 | Roxo | `#9b59b6` |

### Tema Claro

| Elemento | Cor | Código |
|----------|-----|--------|
| Background Principal | Branco Suave | `#f5f5f5` |
| Display | Cinza Claro | `#ecf0f1` |
| Texto Display | Azul Escuro | `#2c3e50` |
| Botões Numéricos | Cinza Claro | `#ecf0f1` |
| Botões Operadores | Vermelho | `#e74c3c` |
| Botão Clear | Azul | `#3498db` |
| Botão Igual | Verde | `#2ecc71` |
| Botões Científicos | Verde Escuro | `#27ae60` |
| Botão Regra de 3 | Roxo | `#9b59b6` |

---

## 🌐 Demo Online

Você pode testar a versão web da calculadora diretamente no GitHub Pages:

👉 **[https://felipe-alcantara.github.io/Calculadora-simples-em-python/](https://felipe-alcantara.github.io/Calculadora-simples-em-python/)**

🎮 **Experimente agora mesmo sem instalar nada!**

---

## 🛠️ Tecnologias Utilizadas

### Desktop
- **Python 3.x**: Linguagem de programação
- **Tkinter**: Framework para interface gráfica
- **Font**: Módulo para fontes personalizadas
- **Math**: Biblioteca para operações matemáticas avançadas
- **Datetime**: Para timestamps no histórico

### Web
- **HTML5**: Estrutura da página
- **CSS3**: Estilização e responsividade
- **Brython 3.12**: Python no navegador
- **JavaScript**: Carregamento do Brython
- **Math (Python)**: Funções científicas

---

## 🎯 Aprendizados

Este projeto demonstra:

- ✅ Criação de interfaces gráficas com Tkinter
- ✅ Manipulação de eventos e callbacks
- ✅ Tratamento de exceções em Python
- ✅ Design de UI/UX moderno
- ✅ Conversão de aplicações desktop para web
- ✅ Uso do Brython para executar Python no navegador
- ✅ CSS Grid e Flexbox para layouts responsivos
- ✅ Boas práticas de organização de código
- ✅ Implementação de funções matemáticas avançadas
- ✅ Uso da biblioteca Math do Python
- ✅ Sistema de histórico com timestamps
- ✅ Gerenciamento de estado global
- ✅ Criação de janelas modais (Toplevel)
- ✅ Validação de formulários e entrada de dados
- ✅ Aplicação de regra de 3 programaticamente
- ✅ Sistema de temas com alternância dinâmica
- ✅ Persistência de dados (localStorage no navegador)
- ✅ CSS customizado com transições suaves

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---
## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">

**Desenvolvido por dj_felixo**

Projeto criado durante meus estudos de Python, com ajuda de um amigo que me ensinou os fundamentos. 💙

[![GitHub](https://img.shields.io/badge/GitHub-Felipe--Alcantara-black?style=flat&logo=github)](https://github.com/Felipe-Alcantara)

---

### ⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Made with 💚 and Python**

</div>
