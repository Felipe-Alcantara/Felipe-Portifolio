# 📊 Soma em Série - Matemática Discreta

[![Python](https://img.shields.io/badge/Python-3.x-blue)](https://www.python.org)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

_Projeto educacional desenvolvido em 2024 durante meus estudos de Matemática Discreta._

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [O que o Código Faz](#o-que-o-codigo-faz)
	- [Exemplo de Execução](#exemplo-de-execucao)
- [Como Funciona](#como-funciona)
- [Utilidades e Aplicações](#utilidades-e-aplicacoes)
- [Como Usar](#como-usar)
- [Tecnologias](#tecnologias)
- [Conceitos Matemáticos](#conceitos-matematicos)

## 📝 Sobre o Projeto

Este é um projeto educacional que desenvolvi em 2024 durante meus estudos de **Matemática Discreta** na faculdade. O código implementa o cálculo da soma de uma série aritmética da forma $(2n - 1)$, um conceito fundamental em progressões aritméticas e análise de séries.

## 🎯 O que o Código Faz

O programa calcula a soma da série:

$$\sum_{i=0}^{n} (2i - 1) = 1 + (2 \cdot 0 - 1) + (2 \cdot 1 - 1) + (2 \cdot 2 - 1) + \ldots + (2n - 1)$$

### Exemplo de Execução

Para `n = 2`, a série calculada é:
- **Início:** sum = 1
- **i = 0:** 1 + (2×0 - 1) = 1 + (-1) = 0
- **i = 1:** 0 + (2×1 - 1) = 0 + 1 = 1
- **i = 2:** 1 + (2×2 - 1) = 1 + 3 = 4

**Resultado:** 4

## 🔧 Como Funciona

1. **Definição de n:** Define a quantidade de termos da série
2. **Inicialização:** A variável `sum` começa com valor 1
3. **Iteração:** Um loop percorre de 0 até n (inclusive)
4. **Cálculo:** Para cada iteração `i`, calcula $(2i - 1)$ e adiciona ao acumulador
5. **Resultado:** Exibe a soma final da série

## 💡 Utilidades e Aplicações

Este projetinho pode ser útil para:

### 📚 **Educação e Aprendizado**
- Entender conceitos de **progressões aritméticas**
- Praticar implementação de **séries matemáticas** em Python
- Estudar **somatórios** e suas propriedades
- Exemplo didático para aulas de Matemática Discreta

### 🧮 **Aplicações Práticas**
- Base para algoritmos de **análise combinatória**
- Compreensão de **complexidade computacional** (notação Big O)
- Fundamento para problemas de **contagem** e **otimização**
- Validação de fórmulas fechadas vs. implementação iterativa

### 💻 **Desenvolvimento de Software**
- Modelo para testes de **algoritmos iterativos**
- Exemplo de código bem documentado
- Prática com estruturas de repetição em Python

## 🚀 Como Usar

```bash
python "Soma em série de (2n - 1) (Matematica discreta).py"
```

## 🛠️ Tecnologias

- **Python 3.x**
- Bibliotecas padrão (sem dependências externas)

## 📖 Conceitos Matemáticos

Este código demonstra na prática que a soma de uma série aritmética pode ser calculada iterativamente, e serve como introdução para o estudo de:
- Séries e sequências
- Indução matemática
- Fórmulas fechadas vs. soluções iterativas
- Análise de algoritmos

---

**Desenvolvido como material de estudo para a disciplina de Matemática Discreta (2024)**
