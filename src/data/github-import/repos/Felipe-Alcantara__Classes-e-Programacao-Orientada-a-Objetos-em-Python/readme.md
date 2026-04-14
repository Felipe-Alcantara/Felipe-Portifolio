<div align="center">
	<h1>🤖 Classes e Programação Orientada a Objetos em Python</h1>
	<p>
		<img src="https://img.shields.io/badge/python-3.8%2B-3776AB?logo=python&logoColor=white" alt="Python" />
		<img src="https://img.shields.io/badge/POO-educacional-brightgreen" alt="POO" />
		<img src="https://img.shields.io/badge/license-MIT-yellow" alt="License" />
	</p>
	<em>Série de exemplos didáticos para aprender POO — scripts pequenos e fáceis de adaptar.</em>
</div>

Um repositório de exemplos e exercícios para aprender e praticar Programação Orientada a Objetos (POO) em Python. O objetivo é fornecer pequenos projetos didáticos que demonstrem conceitos como classes, objetos, encapsulamento, métodos, e interação entre objetos.
## Índice

- [Visão geral](#visão-geral)
- [Funcionalidades / Exemplos](#funcionalidades--exemplos)
- [Requisitos](#requisitos)
- [Como executar (Windows - cmd.exe)](#como-executar-windows---cmdexe)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Boas práticas e ideias de evolução](#boas-práticas-e-ideias-de-evolução)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

> Use o índice acima para navegar rapidamente pelas seções do README.

## Visão geral

Este repositório contém exemplos simples e autoexplicativos que servem como base para quem está começando com POO em Python. Cada arquivo representa um exemplo prático (vendedores, controle remoto, canecas etc.) com classes e métodos básicos.

Público-alvo: estudantes, instrutores e desenvolvedores iniciantes que queiram entender POO com exemplos práticos e fáceis de adaptar.

## Funcionalidades / Exemplos

- `Vendedor` (em `classes.py` / `main.py`): modelo simples para gerenciar vendas e verificar metas.
- `ControleRemoto` (em `Plus.py`): exemplo que modela um controle remoto com troca de canais.
- `Caneca` (em `Poo canecas.py`): exemplo de um objeto físico (caneca) com operações de encher e beber.

Cada exemplo foca em mostrar a definição de classe, atributos, métodos e como instanciar e usar esses objetos em um pequeno script.

## Requisitos

- Python 3.8 ou superior (recomendado).
- Não há dependências externas obrigatórias para os exemplos fornecidos.

## Como executar (Windows - cmd.exe)

1. Garanta que você tenha Python instalado e no PATH.
2. (Opcional) Crie e ative um ambiente virtual:

```cmd
python -m venv venv
venv\\Scripts\\activate
```

3. Execute um dos exemplos. Exemplo: rodar o script principal (`main.py`):

```cmd
python main.py
```

Ou execute diretamente qualquer outro arquivo exemplo, por exemplo:

```cmd
python "Poo canecas.py"
python Plus.py
```

Observação: se o seu sistema ou IDE interpretar espaços em nomes de arquivos, use aspas ao chamar o arquivo (como no exemplo `"Poo canecas.py"`).

## Estrutura do repositório

- `classes.py` — definição da classe `Vendedor` e métodos associados.
- `main.py` — script que demonstra o uso da classe `Vendedor` e verifica metas.
- `Plus.py` — exemplo com a classe `ControleRemoto` (troca de canais).
- `Poo canecas.py` — exemplo com a classe `Caneca` (encher, beber).
- `README.md` — este arquivo.
- `LICENSE` — licença do projeto.

> Nota: nomes de arquivos podem variar; abra-os para ver detalhes e adaptações. Os exemplos são intencionais para estudo e podem ser refatorados para produção.

## Boas práticas e ideias de evolução

- Refatorar nomes de arquivos para seguir um padrão sem espaços (ex.: `poo_canecas.py`).
- Adicionar docstrings nas classes e métodos e tipos com hints (type hints).
- Incluir testes unitários (pytest) para cada classe.
- Criar um pequeno pacote (com `setup.py` ou `pyproject.toml`) se for estender os exemplos.

## Contribuição

Contribuições são bem-vindas. Boas formas de contribuir:

- Abrir issues sugerindo melhorias ou correções.
- Submeter pull requests com pequenas melhorias (corrigir bugs, adicionar docstrings, adicionar testes).

Guia rápido:

1. Fork do repositório
2. Criar uma branch com uma descrição curta
3. Commit e push
4. Abrir um Pull Request descrevendo a mudança

## Licença

Este repositório inclui um arquivo `LICENSE`. Verifique-o para os termos de uso.

## Contato

Se quiser entrar em contato sobre este projeto ou sugerir melhorias, abra uma issue no GitHub ou envie uma mensagem ao autor do repositório.

---

Obrigado por conferir os exemplos — espero que sejam úteis para aprender e praticar POO em Python.
