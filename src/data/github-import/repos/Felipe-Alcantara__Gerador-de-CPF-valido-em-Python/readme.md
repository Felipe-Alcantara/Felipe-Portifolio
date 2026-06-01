# 🎲 Gerador de CPF Válido em Python

<div align="center">

![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Brython](https://img.shields.io/badge/Brython-3.12-FFD43B?style=for-the-badge&logo=python&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Gerador educacional de CPF com validação algorítmica e seleção por região fiscal**

[🌐 Demo Online](https://cpf.felixo.com.br/) • [📖 Documentação Web](docs/README.md) • [🚀 Como Usar](#-como-usar) • [🗺️ Regiões Fiscais](#️-tabela-de-regiões-fiscais)

</div>

---

## 📋 Índice

- [🌐 **Versão Web**](#-versão-web-) ⭐ **DESTAQUE**
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Ferramentas Disponíveis](#-ferramentas-disponíveis)
- [🎯 Como Usar](#-como-usar)
- [🛠️ Como Funciona o Algoritmo](#️-como-funciona-o-algoritmo)
- [🗺️ Tabela de Regiões Fiscais](#️-tabela-de-regiões-fiscais)
- [📊 Exemplos de Saída](#-exemplos-de-saída)
- [⚠️ Considerações Legais](#️-considerações-legais)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)

---

## 🌐 Versão Web ⭐

> **🚀 USE DIRETO NO NAVEGADOR, SEM INSTALAR NADA!**
> 
> **[👉 ABRIR GERADOR DE CPF WEB 👈](https://cpf.felixo.com.br/)**

### 💡 Por que usar?

- **🎯 Sem instalação**: Funciona 100% no navegador
- **🌙 Design Dark Mode**: Interface moderna no padrão FelixoVerse
- **📱 Responsivo**: Funciona em desktop, tablet e smartphone
- **🗺️ Regiões Fiscais**: Selecione a região visualmente
- **🔍 Validador**: Verifique se um CPF é algoritmicamente válido

Tecnologias da Interface: **HTML5** + **CSS3** + **Python (Brython)**

---

## 📋 Sobre o Projeto

Este projeto foi criado em **2024** como um dos primeiros códigos em Python para entender o algoritmo de validação de CPF brasileiro. Em **2025**, foi completamente refatorado com boas práticas, versão web e organização profissional.

### ✨ **NOVO: Redesign FelixoVerse!**
- ✅ Interface dark mode com glow roxo respirante
- ✅ Partículas flutuantes no fundo
- ✅ Tipografia Space Grotesk
- ✅ Cards glassmorphism com bordas sutis

### 🎯 Propósito

O objetivo principal é **educacional**:
- 📚 Entender como funciona o algoritmo de validação de CPF brasileiro
- 💡 Aprender sobre dígitos verificadores e sua importância
- 🔢 Praticar lógica de programação com cálculos matemáticos
- ✨ Demonstrar evolução de código desde iniciante até práticas avançadas

> **⚠️ IMPORTANTE:** Os CPFs gerados são válidos **apenas algoritmicamente**. NÃO são CPFs reais e NÃO devem ser utilizados para fins oficiais ou fraudulentos.

---

## 📁 Estrutura do Projeto

```
Gerador-de-CPF-valido-em-Python/
│
├── 📁 docs/                           # Versão web (GitHub Pages)
│   ├── index.html
│   ├── style.css
│   ├── gerador.py
│   ├── CNAME
│   └── README.md
│
├── 📁 Versão no terminal/             # Scripts para terminal
│   ├── cpf_core.py
│   ├── Gerador de CPF.py
│   ├── Gerador de CPF por Região.py
│   └── Validador de CPF.py
│
├── 📁 System Design/                  # Padrões de design e documentação
│   ├── GUIA_DE_BACKEND_PARA_CPF_TESTES_E_DADOS_REAIS.md
│   └── GUIA_DOCUMENTACAO_README.md
│
├── 📁 tests/                          # Testes automatizados
│   └── test_cpf_core.py
│
├── IA.md                              # Contexto operacional do projeto
├── README.md                          # Este arquivo
└── LICENSE
```

---

## 🚀 Ferramentas Disponíveis

### 🌐 Versão Web (`docs/`)

**`index.html`** + **`gerador.py`**
- Interface completa no navegador com Python rodando via Brython
- Gerador aleatório, gerador por região e validador de CPF
- Exemplo: clique em `🎲 Gerar CPF Aleatório` → `123.456.789-09`

📖 [Ver documentação detalhada](docs/README.md)

---

### 🎲 Gerador Aleatório (`Versão no terminal/`)

**`Gerador de CPF.py`**
- Gera um CPF completamente aleatório com região fiscal automática
- Exibe o processo completo de geração com dígitos verificadores
- Exemplo: execução → `747.506.782-36` (região AC, AM, AP, PA, RO, RR)

---

### 🗺️ Gerador por Região (`Versão no terminal/`)

**`Gerador de CPF por Região.py`**
- Menu interativo para escolher a região fiscal (0-9)
- Gera CPFs com o 9º dígito correspondente à região escolhida
- Exemplo: região `8` → `388.757.828-73` (São Paulo)

---

### 🔍 Validador de CPF (`Versão no terminal/`)

**`Validador de CPF.py`**
- Verifica se um CPF é algoritmicamente válido
- Aceita CPF com ou sem formatação
- Exemplo: `123.456.789-09` → `✅ Válido` ou `❌ Inválido`

---

## 🎯 Como Usar

### Opção 1: Versão Web (Recomendado!) 🌐

**🚀 Link direto:** [Abrir Gerador Web](https://cpf.felixo.com.br/)

### Opção 2: Para Desenvolvedores

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Gerador-de-CPF-valido-em-Python.git

# Entre na pasta
cd Gerador-de-CPF-valido-em-Python
```

#### Executando no Terminal

```bash
# Gerador aleatório
python "Versão no terminal/Gerador de CPF.py"

# Gerador por região
python "Versão no terminal/Gerador de CPF por Região.py"

# Validador
python "Versão no terminal/Validador de CPF.py"
```

#### Executando a Versão Web Localmente

```bash
# Na pasta docs, inicie um servidor local
cd docs
python -m http.server 8000

# Acesse: http://localhost:8000
```

---

## 🛠️ Como Funciona o Algoritmo

### 1️⃣ Geração dos Nove Primeiros Dígitos
- Gera 9 números aleatórios entre 0 e 9
- Exemplo: `1 2 3 4 5 6 7 8 9`

### 2️⃣ Cálculo do Primeiro Dígito Verificador
- Multiplica cada dígito por uma sequência decrescente (10 a 2)
- Soma todos os resultados
- Calcula o resto da divisão por 11
- Se resto < 2: dígito = 0, senão: dígito = 11 - resto

**Exemplo:**
```
(1×10) + (2×9) + (3×8) + (4×7) + (5×6) + (6×5) + (7×4) + (8×3) + (9×2) = 210
210 % 11 = 1 (resto menor que 2)
Primeiro dígito = 0
```

### 3️⃣ Cálculo do Segundo Dígito Verificador
- Multiplica os 9 dígitos + primeiro verificador por sequência (11 a 2)
- Repete o processo de cálculo

### 4️⃣ Formatação Final
- Formato: `XXX.XXX.XXX-XX`
- Exemplo: `123.456.789-09`

---

## 🗺️ Tabela de Regiões Fiscais

| Dígito | Estados | Região |
|--------|---------|--------|
| **0** | RS | Rio Grande do Sul |
| **1** | DF, GO, MT, MS, TO | Centro-Oeste + Tocantins |
| **2** | AC, AM, AP, PA, RO, RR | Região Norte |
| **3** | CE, MA, PI | Nordeste (Parte 1) |
| **4** | AL, PB, PE, RN | Nordeste (Parte 2) |
| **5** | BA, SE | Nordeste (Parte 3) |
| **6** | MG | Minas Gerais |
| **7** | ES, RJ | Sudeste (ES/RJ) |
| **8** | SP | São Paulo |
| **9** | PR, SC | Região Sul (PR/SC) |

---

## 📊 Exemplos de Saída

### Gerador Simples

```
======================================================================
               🎲 GERADOR DE CPF VÁLIDO 🎲
======================================================================

📋 Processo de Geração:
   ├─ Dígitos aleatórios gerados: 7 4 7 5 0 6 7 8 2
   ├─ Primeiro dígito verificador calculado: 3
   └─ Segundo dígito verificador calculado: 6

✅ CPF GERADO COM SUCESSO!

   📄 Seu CPF válido é: 747.506.782-36

🗺️  Informação da Região Fiscal:
   └─ 9º dígito (2): AC, AM, AP, PA, RO, RR

======================================================================
```

### Gerador por Região

```
======================================================================
          🗺️  SELECIONE A REGIÃO FISCAL DO CPF  🗺️
======================================================================

   [0] - RS (Rio Grande do Sul)
   [1] - DF, GO, MT, MS, TO
   [2] - AC, AM, AP, PA, RO, RR
   [3] - CE, MA, PI
   [4] - AL, PB, PE, RN
   [5] - BA, SE
   [6] - MG (Minas Gerais)
   [7] - ES, RJ
   [8] - SP (São Paulo)
   [9] - PR, SC

======================================================================
Digite o número da região desejada (0-9): 8

✅ RESULTADO FINAL:

   📄 Seu CPF válido é: 388.757.828-73

🗺️  Região Fiscal Selecionada:
   └─ Dígito 8: SP (São Paulo)

======================================================================
```

---

## ⚠️ Considerações Legais

🚨 **ATENÇÃO**: Este projeto é **exclusivamente educacional**.

- ❌ NÃO use os CPFs gerados para cadastros reais
- ❌ NÃO use para fins comerciais ou fraudulentos
- ❌ NÃO são CPFs registrados na Receita Federal
- ✅ Use apenas para aprendizado e testes

O uso indevido de CPFs pode configurar crime conforme o Código Penal Brasileiro.

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

---

## 👤 Autor

**Felipe Alcântara**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)
- Repositório: [Gerador-de-CPF-valido-em-Python](https://github.com/Felipe-Alcantara/Gerador-de-CPF-valido-em-Python)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!

---

<div align="center">

**Feito com 💙 e Python**

*De um iniciante em 2024 para um código mais maduro em 2025* 🚀

</div>

