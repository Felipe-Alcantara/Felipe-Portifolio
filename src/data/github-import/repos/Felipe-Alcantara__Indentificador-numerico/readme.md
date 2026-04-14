# 🔢 Identificador Numérico

<div align="center">

![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![CLI](https://img.shields.io/badge/Interface-CLI-222222?style=for-the-badge&logo=gnometerminal&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Validador simples em Python para verificar se uma entrada de texto é numérica.**

[📋 Sobre](#-sobre-o-projeto) • [📁 Estrutura](#-estrutura-do-projeto) • [🚀 Como Usar](#-como-usar) • [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)

</div>

---

## 📋 Índice

- [🔢 **Feature Principal**](#-feature-principal) ⭐ **DESTAQUE**
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Ferramentas Disponíveis](#-ferramentas-disponíveis)
- [📖 Documentação Completa Disponível](#-documentação-completa-disponível)
- [🎯 Como Usar](#-como-usar)
- [📚 Guia Rápido](#-guia-rápido)
- [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [⚠️ Limitações](#-limitações)
- [🎯 Objetivo](#-objetivo)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)
- [🤝 Contribuições](#-contribuições)

---

## 🔢 Feature Principal

> **🚀 VALIDE ENTRADAS NUMÉRICAS NO TERMINAL EM SEGUNDOS**
>
> **[👉 EXECUTAR AGORA 👈](#-como-usar)**

### 💡 Por que usar?

- **⚡ Simples e direto**: executa com Python puro, sem dependências externas
- **🧠 Lógica clara**: separa função de validação (`eh_numerico`) do fluxo de CLI
- **🔁 Reutilizável**: pode ser importado em outros scripts Python

---

## 📋 Sobre o Projeto

Este projeto implementa um verificador de entrada numérica com foco em clareza e organização.  
O código foi estruturado em módulo (`src/identificador_numerico/`) para facilitar manutenção e reaproveitamento da função de validação.

---

## 📁 Estrutura do Projeto

```text
Indentificador-numerico/
│
├── 📁 src/                              # Código-fonte do projeto
│   └── 📁 identificador_numerico/       # Módulo principal
│       ├── __init__.py
│       ├── main.py
│       └── README.md
│
├── 📁 felixo-standards/                 # Referências de padrão usadas no projeto
├── README.md                            # Este arquivo
└── LICENSE
```

---

## 🚀 Ferramentas Disponíveis

### 🔢 Identificador Numérico (`src/identificador_numerico/`)

**`main.py`**
- Lê uma entrada digitada pelo usuário no terminal
- Verifica se o conteúdo é numérico com `str.isnumeric()`
- Exibe o resultado em formato booleano
- Exemplo: `"2026"` → `True`

📖 [Ver documentação detalhada](src/identificador_numerico/README.md)

---

## 📖 Documentação Completa Disponível

- 📘 [README do módulo principal](src/identificador_numerico/README.md)
- 📚 [Padrões de README do Felixo](felixo-standards/PADRÕES%20DE%20DESIGN/DESIGN_SYSTEM_PARA_README.md)

---

## 🎯 Como Usar

### Opção 1: Execução direta (Recomendado)

```bash
# Execute o script principal
python src/identificador_numerico/main.py
```

### Opção 2: Importar em outro script Python

```python
from src.identificador_numerico.main import eh_numerico

print(eh_numerico("123"))   # True
print(eh_numerico("12ab"))  # False
```

---

## 📚 Guia Rápido

### Para Iniciantes
1. Abra o terminal na pasta do projeto.
2. Execute `python src/identificador_numerico/main.py`.
3. Digite um valor e veja se o resultado é `True` ou `False`.

### Para Desenvolvedores
1. Reutilize `eh_numerico(valor)` em validações de formulário.
2. Encapsule o retorno em regras de negócio do seu sistema.

### Para Uso Prático
- **Validação rápida no terminal:** rode o script principal
- **Validação em código:** importe a função `eh_numerico`

---

## 🔧 Funcionalidades Técnicas

### Funções Principais

- **`eh_numerico(valor: str) -> bool`**: retorna `True` se a string for composta apenas por caracteres numéricos
- **`main() -> None`**: executa interação via terminal (`input` + `print`)

### Fluxo Interno

- **Entrada:** texto livre digitado pelo usuário
- **Processamento:** chamada para `str.isnumeric()`
- **Saída:** valor booleano exibido no console

Exemplo completo: `"789"` → `True`

---

## ⚠️ Limitações

- `isnumeric()` valida caracteres numéricos Unicode; dependendo do caso, isso pode incluir mais do que apenas dígitos `0-9`
- O projeto é CLI simples e não inclui interface gráfica ou API

---

## 🎯 Objetivo

Fornecer um utilitário mínimo, didático e reutilizável para validação de entradas numéricas em Python.

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

## 👤 Autor

**Felipe Martin**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias de estrutura e documentação
- Aprimorar exemplos de uso

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!

