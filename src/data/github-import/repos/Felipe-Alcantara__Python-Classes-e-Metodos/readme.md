# 📚 Modelagem POO em Python

[![Python](https://img.shields.io/badge/python-3.8%2B-3776AB?logo=python&logoColor=white)](https://www.python.org/) [![Nível](https://img.shields.io/badge/Nível-Introductório-green)](https://en.wikipedia.org/wiki/Software_development) [![Dependências](https://img.shields.io/badge/dependencies-none-lightgrey)](https://pypi.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


Coleção didática de exemplos em Python que demonstram princípios fundamentais de Programação Orientada a Objetos (POO): classes, atributos e métodos para modelar entidades do mundo real (carros e computadores).

## Índice

- [Visão geral](#visao-geral)
- [Scripts principais (src)](#scripts)
- [Requisitos](#requisitos)
- [Como executar (Windows - cmd)](#como-executar)
- [Estrutura do projeto](#estrutura)
- [Boas práticas e sugestões](#boas-praticas)
- [Como contribuir](#contribuir)
- [Licença](#licenca)
- [Autor / Contato](#autor-contato)

<a id="visao-geral"></a>
## Visão geral

Este projeto tem finalidades educativas: mostrar como definir classes, criar instâncias (objetos), encapsular dados e implementar métodos simples que manipulam esses dados. Cada script é auto-contido e fácil de executar.

<a id="scripts"></a>
## Scripts principais (em `src/`)

- `Modelagem de Carro em Python.py`  — Exemplo básico de modelagem de um carro (atributos como cor, modelo, preço e método para "ligar").
- `Gerenciamento de Informações de Computador em Python.py` — Classe `Computador` com atributos (marca, RAM, placa gráfica) e métodos para ligar, desligar e exibir informações.
- `Gerenciamento de Informações de Carro em Python.py` — Classe `carro` com atributos (marca, portas, placa, km) e métodos utilitários para exibir e verificar informações.

> Observação: os nomes de arquivos possuem espaços por legibilidade. Ao executar no terminal, envolva o caminho entre aspas.

<a id="requisitos"></a>
## Requisitos

- Python 3.8+ (testado em Python 3.8 — 3.11)
- Nenhuma dependência externa (bibliotecas padrão apenas)

<a id="como-executar"></a>
## Como executar (Windows - cmd)

1. Abra o Prompt de Comando na raiz do repositório (onde está este `README.md`).
2. Execute um dos scripts com o comando abaixo. Substitua o nome do arquivo conforme desejado.

Exemplos:

python "src\\Modelagem de Carro em Python.py"
python "src\\Gerenciamento de Informações de Computador em Python.py"
python "src\\Gerenciamento de Informações de Carro em Python.py"

Se você preferir rodar em uma venv (recomendado para estudos):

python -m venv .venv
.venv\\Scripts\\activate
python "src\\Modelagem de Carro em Python.py"

<a id="estrutura"></a>
## Estrutura do projeto

```
Python-Classes-e-Metodos/
├─ LICENSE
├─ README.md
└─ src/
	├─ Modelagem de Carro em Python.py
	├─ Gerenciamento de Informações de Computador em Python.py
	└─ Gerenciamento de Informações de Carro em Python.py
```

<a id="boas-praticas"></a>
## Boas práticas e sugestões

- Arquivos de exemplo: mantê-los curtos e com foco em um conceito por arquivo facilita o aprendizado.
- Para transformar os exemplos em módulos reutilizáveis, remova execuções diretas (if __name__ == "__main__":) e exponha APIs via funções/classes.
- Considere renomear arquivos para usar underscores (snake_case) em projetos maiores, ex.: `modelagem_carro.py`.

<a id="contribuir"></a>
## Como contribuir

1. Fork este repositório.
2. Crie uma branch com a sua feature: `git checkout -b feat/minha-melhora`.
3. Faça commits pequenos e claros.
4. Abra um Pull Request descrevendo a mudança.

Sugestões bem-vindas: adicionar testes simples, exemplos adicionais (como uma frota de carros), ou documentação das classes.

<a id="licenca"></a>
## Licença

Este repositório inclui um arquivo `LICENSE` com os termos de licenciamento.

<a id="autor-contato"></a>
## Autor / Contato

Criado como recurso de estudo. Para sugestões ou dúvidas, abra uma issue neste repositório.

---

README gerado para tornar o projeto mais acessível e útil como material didático. Se quiser, posso:

- adicionar um arquivo `requirements.txt` (se necessário);
- renomear os arquivos para `snake_case` e atualizar exemplos de execução;
- adicionar testes unitários simples e um script de execução única.
 
Diga o que prefere que eu faça a seguir.
