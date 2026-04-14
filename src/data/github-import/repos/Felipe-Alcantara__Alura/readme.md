# 🎓 Alura — Projetos de Lógica com JavaScript

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Coleção de projetos e desafios da Alura para prática de lógica de programação com JavaScript, HTML e CSS.**

[🌐 Destaque Principal](#-destaque-principal-) • [📋 Sobre](#-sobre-o-projeto) • [🚀 Como Usar](#-como-usar) • [🧩 Projetos](#-ferramentas--funcionalidades-disponíveis)

</div>

---

## 📋 Índice

- [🌐 **Destaque Principal**](#-destaque-principal-) ⭐ **DESTAQUE**
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🧩 Ferramentas / Funcionalidades Disponíveis](#-ferramentas--funcionalidades-disponíveis)
- [📖 Documentação Completa Disponível](#-documentação-completa-disponível)
- [🚀 Como Usar](#-como-usar)
- [📚 Guia Rápido](#-guia-rápido)
- [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)
- [⚠️ Limitações](#️-limitações)
- [🛡️ Segurança](#️-segurança)
- [🎯 Objetivo](#-objetivo)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)
- [🤝 Contribuições](#-contribuições)

---

## 🌐 Destaque Principal ⭐

> **🚀 ACESSE O PROJETO RAIZ PUBLICADO NA VERCEL**
>
> **[👉 Abrir projeto principal 👈](https://alura-gamma.vercel.app/)**

### 💡 Por que usar?

- **🧠 Prática de lógica**: exercícios progressivos de estruturas condicionais, laços, funções e listas.
- **🛠️ Aprendizado prático**: exemplos executáveis em **HTML + CSS + JavaScript**.
- **📚 Organização por trilha**: cursos separados por módulos e desafios.

---

## 📋 Sobre o Projeto

Este repositório reúne projetos feitos durante cursos da **Alura** com foco em **lógica de programação com JavaScript**. A estrutura está organizada por trilhas e módulos, com exemplos de interface web e resolução prática de desafios.

Além do conteúdo dos cursos, o projeto também mantém uma pasta com o **Felixo System Design** para padronização de qualidade e documentação.

---

## 📁 Estrutura do Projeto

```text
Alura/
│
├── 📁 Cursos/                                              # Projetos e desafios por trilha da Alura
│   ├── 📁 Curso de Lógica de programação...                # Fundamentos e exercícios iniciais
│   ├── 📁 Lógica de programação explore funções e listas...# Módulos focados em funções/listas
│   └── 📁 Lógica de programação praticando com desafios/   # Projetos práticos (sorteador, amigo secreto, etc.)
│
├── 📁 img/                     # Assets do projeto raiz
├── 📁 felixo-standards/        # Guias de padrão de qualidade e documentação
├── app.js                      # Lógica principal do jogo no projeto raiz
├── style.css                   # Estilos do projeto raiz
├── index.html                  # Página principal do projeto raiz
├── vercel.json                 # Configuração de deploy na Vercel
├── README.md                   # Este arquivo
└── LICENSE
```

---

## 🧩 Ferramentas / Funcionalidades Disponíveis

### 🎯 Projeto raiz — Jogo do número secreto (`./`)

**`app.js`**
- Implementa o fluxo do jogo com tentativas e dicas (`maior` / `menor`).
- Controla reinício de rodada e bloqueio de ações ao finalizar números disponíveis.
- Usa síntese de voz via navegador para feedback em português.
- Exemplo: `chute=7` → `mensagem de acerto ou dica para próximo palpite`.

### 📚 Trilhas e projetos de curso (`Cursos/`)

**Projetos incluídos**
- Curso de lógica com JavaScript (fundamentos).
- Funções e listas com interações em HTML.
- Projetos práticos como sorteador, carrinho, amigo secreto e alugames.
- Exemplo: `entrada do usuário` → `resultado renderizado na interface`.

---

## 📖 Documentação Completa Disponível

- 📖 [Padrão de README utilizado neste repositório](felixo-standards/PADRÕES%20DE%20DESIGN/DESIGN_SYSTEM_PARA_README.md)
- 📖 [Repositório de padrões Felixo (referência)](felixo-standards/README.md)

---

## 🚀 Como Usar

### Opção 1: Abrir a versão online (Recomendado) 🌐

**🚀 Link direto:** [https://alura-gamma.vercel.app/](https://alura-gamma.vercel.app/)

### Opção 2: Executar localmente

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Alura.git

# Entre na pasta do projeto
cd Alura
```

#### Execução

```bash
# Abra o index principal no navegador (duplo clique ou servidor local)
xdg-open index.html
```

---

## 📚 Guia Rápido

### Para Iniciantes
1. Abra `index.html` na raiz.
2. Jogue e leia as mensagens de dica.
3. Explore a pasta `Cursos/` para praticar outros exercícios.

### Para Desenvolvedores
1. Faça fork ou clone do repositório.
2. Edite os projetos dentro de `Cursos/` ou o projeto raiz.
3. Faça deploy de versão própria com Vercel.

### Para Uso Prático
- **Treino de lógica:** use o projeto raiz.
- **Estudo por módulo:** use os exercícios separados dentro de `Cursos/`.

---

## 🔧 Funcionalidades Técnicas

### Funções principais (projeto raiz)

- **`verificarChute()`**: valida tentativa, compara com número secreto e atualiza estado.
- **`gerar()`**: sorteia números sem repetição até esgotar faixa de 1 a 10.
- **`reiniciar()`**: reinicia jogo e reativa controles da interface.
- **`exibir(tag, texto)`**: atualiza DOM e dispara leitura por voz quando disponível.

### Sistema interno

- Controle de números já sorteados com array em memória.
- Mensagens dinâmicas no DOM para feedback de progresso.
- Suporte opcional à Web Speech API no navegador.

Exemplo: `listaSorteados=[3,5,8]` → `novo sorteio ignora valores repetidos`.

---

## ⚠️ Limitações

- **Sem backend**: toda lógica roda no cliente.
- **Dados não persistem**: estado do jogo é perdido ao recarregar.
- **Estrutura extensa de cursos**: alguns caminhos de pastas são longos por refletirem nomes originais das aulas.

## 🛡️ Segurança

⚠️ **IMPORTANTE:** Este repositório é educacional e não deve ser usado como base direta para dados sensíveis sem camadas adicionais de segurança.

---

## 🎯 Objetivo

Consolidar em um único repositório a evolução prática nos cursos da Alura, mantendo histórico de exercícios, projetos e padrões de documentação.

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

## 👤 Autor

**Felipe Alcântara**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)
- Repositório: [Alura](https://github.com/Felipe-Alcantara/Alura)

## 🤝 Contribuições

Contribuições são bem-vindas! Você pode:
- Reportar bugs
- Sugerir melhorias nos exercícios
- Melhorar a documentação

---

⭐ Se este repositório foi útil, considere dar uma estrela no GitHub!

