# 💸 Desconto de Salário em Python

<div align="center">

![Python](https://img.shields.io/badge/Python-3.8%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![CLI](https://img.shields.io/badge/Interface-CLI-000000?style=for-the-badge&logo=gnubash&logoColor=white)
![Status](https://img.shields.io/badge/Status-Estudo-2084FF?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Script simples em Python para calcular salário líquido com desconto em folha, com validação básica de entrada.**

[📋 Sobre](#-sobre-o-projeto) • [📁 Estrutura](#-estrutura-do-projeto) • [🚀 Como Usar](#-como-usar) • [📝 Licença](#-licença)

</div>

---

## 📋 Índice

- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Ferramenta Disponível](#-ferramenta-disponível)
- [🎯 Como Usar](#-como-usar)
- [📚 Guia Rápido](#-guia-rápido)
- [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [⚠️ Limitações](#%EF%B8%8F-limitações)
- [🛡️ Segurança](#%EF%B8%8F-segurança)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)

---

## 📋 Sobre o Projeto

Este projeto é um exercício prático de **lógica de programação em Python** para calcular o salário líquido a partir de dois dados informados via terminal: **salário bruto** e **desconto em folha**.

O script roda em **modo interativo (CLI)**, valida entradas numéricas com `try/except` e exibe o resultado final formatado.

---

## 📁 Estrutura do Projeto

```text
Desconto-de-salario-em-python/
│
├── felixo-standards/              # Referências de padrões e documentação
├── Desconto de salário.py         # Script principal de cálculo
├── README.md                      # Este arquivo
└── LICENSE
```

---

## 🚀 Ferramenta Disponível

### 💰 Calculadora de Salário Líquido (`./`)

**`Desconto de salário.py`**
- Solicita o valor do salário bruto no terminal
- Solicita o valor de desconto em folha
- Calcula o salário líquido com arredondamento em 3 casas decimais
- Exibe resultado no formato: `salário bruto - desconto = salário líquido`

Exemplo: `2500` e `350` → `2150.0`

---

## 🎯 Como Usar

### Opção 1: Execução local (Recomendado) 💻

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Desconto-de-salario-em-python.git

# Entre na pasta do projeto
cd Desconto-de-salario-em-python
```

#### Execução

```bash
# Execute o script principal
python3 "Desconto de salário.py"
```

---

## 📚 Guia Rápido

### Para Iniciantes
1. Execute `python3 "Desconto de salário.py"`.
2. Digite seu salário bruto quando solicitado.
3. Digite o desconto em folha para ver o salário líquido.

### Para Desenvolvedores
1. Abra o arquivo `Desconto de salário.py`.
2. Ajuste mensagens, cálculo ou formatação conforme necessidade.
3. Rode novamente no terminal para validar o comportamento.

---

## 🔧 Funcionalidades Técnicas

### Fluxo principal

- **Entrada validada** com `try/except ValueError` para evitar texto em campos numéricos
- **Cálculo direto** do salário líquido: `salario_bruto - descontos`
- **Arredondamento** com `round(..., 3)` para exibição com 3 casas
- **Saída textual** com `str.format()` no resultado final

Exemplo completo: `salário_bruto=3200` e `descontos=480` → `liquido=2720.0`

---

## ⚠️ Limitações

- Não há validação para impedir valores negativos
- Não há validação para desconto maior que o salário bruto
- O script não salva histórico de cálculos
- O texto `olá mundo` é exibido no início independentemente do fluxo

## 🛡️ Segurança

⚠️ **IMPORTANTE:** Este projeto é didático e não deve ser usado como base única para cálculos financeiros oficiais.

Para uso real, adicione:
- Regras de validação de negócio (faixas e limites)
- Tratamento de moeda e formatação regional consistente
- Testes automatizados para cenários de borda

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

## 👤 Autor

**Felipe Martin**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

---

⭐ Se este projeto foi útil para seus estudos, considere dar uma estrela no GitHub!

