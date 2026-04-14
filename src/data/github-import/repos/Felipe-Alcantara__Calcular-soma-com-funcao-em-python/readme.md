# ➕ Calcular Soma com Função em Python

<div align="center">

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Status](https://img.shields.io/badge/Status-Finalizado-22C55E?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Projeto simples de estudo para praticar função com `def`, entrada de dados e tratamento de erro no terminal.**

[⭐ **Feature Principal**](#feature-principal) • [🚀 Como Usar](#como-usar) • [🔧 Funcionalidades Técnicas](#funcionalidades-tecnicas)

</div>

---

## 📋 Índice

- [⭐ **Feature Principal**](#feature-principal) ⭐ **DESTAQUE**
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Ferramentas / Funcionalidades Disponíveis](#-ferramentas--funcionalidades-disponíveis)
- [🎯 Como Usar](#como-usar)
- [📚 Guia Rápido](#-guia-rápido)
- [🔧 Funcionalidades Técnicas](#funcionalidades-tecnicas)
- [⚠️ Limitações](#limitacoes)
- [🛡️ Segurança](#seguranca)
- [🎯 Objetivo / Propósito](#objetivo-proposito)
- [📝 Licença](#licenca)
- [👤 Autor](#autor)
- [🤝 Contribuições](#contribuicoes)

---

<a id="feature-principal"></a>

## 🌐 Feature Principal ⭐

> **🚀 SOMAR DOIS NÚMEROS DIRETO NO TERMINAL COM VALIDAÇÃO DE ENTRADA**
>
> Execute o script, digite dois valores e receba o resultado da soma.

### 💡 Por que usar?

- **🎯 Simples para iniciantes**: foco em lógica básica com `def`.
- **✅ Validação de entrada**: trata erro quando o usuário digita valor inválido.
- **💻 Prático**: roda direto no terminal sem dependências externas.

---

## 📋 Sobre o Projeto

Este projeto foi criado como prática inicial em **Python**, com foco em **funções**, **entrada de dados via terminal** e **tratamento de exceções**.  
O script define a função de soma, solicita dois números ao usuário e mostra o resultado final de forma clara.

---

## 📁 Estrutura do Projeto

```text
Calcular-soma-com-funcao-em-python/
│
├── felixo-standards/                                        # Padrões de qualidade e documentação
├── Calcular soma com definição de função (com def) (Finalizado).py  # Script principal
├── README.md                                                # Este arquivo
└── LICENSE
```

---

## 🚀 Ferramentas / Funcionalidades Disponíveis

### ➕ Soma no Terminal (`./`)

**`Calcular soma com definição de função (com def) (Finalizado).py`**
- Define uma função para calcular soma entre dois números.
- Recebe dois valores com `input()` e converte para `float`.
- Repetição com `while` + `try/except` até o usuário digitar valores válidos.
- Exemplo: `10` e `2.5` → `12.5`.

---

<a id="como-usar"></a>

## 🎯 Como Usar

### Opção 1: Forma mais fácil (Recomendado) ✅

```bash
# Entre na pasta do projeto
cd "Calcular-soma-com-funcao-em-python"

# Execute o script principal
python "Calcular soma com definição de função (com def) (Finalizado).py"
```

### Opção 2: Para desenvolvedores

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Calcular-soma-com-funcao-em-python.git

# Entre na pasta do projeto
cd "Calcular-soma-com-funcao-em-python"
```

#### Executando

```bash
# Rode o script no terminal
python "Calcular soma com definição de função (com def) (Finalizado).py"
```

---

## 📚 Guia Rápido

### Para Iniciantes
1. Execute o arquivo Python.
2. Digite o primeiro número.
3. Digite o segundo número.
4. Veja o resultado da soma no terminal.

### Para Desenvolvedores
1. Reutilize a função `calcular_soma(a, b)` em outros scripts.
2. Adapte a lógica para outras operações matemáticas.

### Para Uso Prático
- **Somar valores decimais**: use números com ponto (ex.: `7.5`).
- **Evitar erro de digitação**: se inserir texto, o script pede novamente.

---

<a id="funcionalidades-tecnicas"></a>

## 🔧 Funcionalidades Técnicas

### Funções Principais

- **`calcular_soma(a, b)`**: retorna a soma de dois valores numéricos.

### Sistema Interno

- **`while True` + `try/except ValueError`**: valida cada entrada.
- **Conversão `float`**: permite números inteiros e decimais.
- Exemplo completo: `"3"` e `"4.2"` → `7.2`.

---

<a id="limitacoes"></a>

## ⚠️ Limitações

- Projeto focado em estudo inicial; não possui interface gráfica.
- Realiza somente a operação de soma.
- Não inclui testes automatizados.

<a id="seguranca"></a>

## 🛡️ Segurança

⚠️ **IMPORTANTE:** Este projeto é educacional e não foi desenvolvido para cenários críticos de produção.

---

<a id="objetivo-proposito"></a>

## 🎯 Objetivo / Propósito

Demonstrar, de forma simples, como criar e usar uma função em Python para somar dois números, aplicando validação básica de entrada no terminal.

---

<a id="licenca"></a>

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

<a id="autor"></a>

## 👤 Autor

**Felipe Martin**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

<a id="contribuicoes"></a>

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Melhorar a documentação

---

⭐ Se este projeto foi útil para os seus estudos, considere dar uma estrela no GitHub!

