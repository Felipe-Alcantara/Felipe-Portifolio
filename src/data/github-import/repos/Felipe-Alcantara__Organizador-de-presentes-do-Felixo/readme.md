# 🎁 Organizador de Presentes do Felixo

<div align="center">

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Organize, salve e acompanhe suas ideias de presentes — direto no navegador, sem servidor.**

[🌐 Demo Online](https://gifts.felixo.com.br) • [🚀 Como Usar](#-como-usar) • [✨ Funcionalidades](#-funcionalidades-disponíveis) • [📁 Estrutura](#-estrutura-do-projeto) • [📝 Licença](#-licença)

</div>

---

## 📋 Índice

- [🌐 **Demo Online**](https://gifts.felixo.com.br) ⭐ **DESTAQUE**
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [✨ Funcionalidades Disponíveis](#-funcionalidades-disponíveis) ⭐ **DESTAQUE**
- [🎯 Como Usar](#-como-usar)
- [⚠️ Limitações](#️-limitações)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)

---

## 📋 Sobre o Projeto

O **Organizador de Presentes do Felixo** é uma aplicação web **single-file** — um único arquivo `.html` que roda diretamente no navegador, sem necessidade de servidor, instalação ou banco de dados externo.

Toda a persistência é feita via **localStorage**, permitindo que você salve e retome sua lista de presentes a qualquer momento. O projeto também oferece exportação e importação em **JSON** para backup e compartilhamento.

---

## 📁 Estrutura do Projeto

```
Organizador-de-presentes-do-Felixo/
│
├── index.html                # Aplicação completa (HTML + CSS + JS)
├── CNAME                     # Domínio customizado (gifts.felixo.com.br)
│
├── felixo-standards/         # Padrões de design do Felixo System
│
├── README.md                 # Este arquivo
├── IA.md                     # Contexto técnico do projeto para IA
└── LICENSE                   # Licença MIT
```

---

## ✨ Funcionalidades Disponíveis

### 🎁 Gestão de Presentes

**`index.html`**
- Adicionar presentes com título, preço, moeda, link, tags e anotações
- Associar imagem via URL ou upload de arquivo local
- Marcar presentes como **comprados** com toggle visual
- Editar ou apagar qualquer presente cadastrado

### 🔍 Busca e Filtros

- Pesquisa em tempo real por nome, tags e anotações
- Filtro por status: **Todos** / **Não comprados** / **Comprados**
- Ordenação por data (mais recentes/antigos) e por preço (menor/maior)

### 💾 Exportação e Importação

- **Exportar JSON**: gera um arquivo `.json` com todos os presentes para backup
- **Importar JSON**: carrega presentes de um arquivo exportado anteriormente, mesclando com os dados atuais
- **Limpar tudo**: remove todos os presentes salvos (com confirmação)

### 🎨 Interface

- Tema escuro com identidade visual Felixo
- Layout em grid responsivo (mobile e desktop)
- Botão flutuante (FAB) para adicionar presentes rapidamente
- Modal de cadastro/edição com preview de imagem em tempo real

---

## 🎯 Como Usar

### Opção 1: Demo online (Recomendado) 🌐

**🚀 Acesse agora:** [gifts.felixo.com.br](https://gifts.felixo.com.br)

Nenhuma instalação necessária — abre direto no navegador.

### Opção 2: Rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Organizador-de-presentes-do-Felixo.git

# Entre na pasta
cd Organizador-de-presentes-do-Felixo

# Abra o arquivo no navegador
xdg-open index.html   # Linux
open index.html        # macOS
start index.html       # Windows
```

---

## ⚠️ Limitações

- **Dados locais**: as informações ficam salvas apenas no navegador em que foram criadas
- **Sem sincronização**: não há conta de usuário nem sincronização entre dispositivos
- **Imagens por upload**: imagens enviadas como arquivo ficam armazenadas em base64 no localStorage, o que pode aumentar o tamanho do dado salvo com o tempo
- **Sem backend**: adequado para uso pessoal; não há autenticação ou multi-usuário

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo `LICENSE`.

---

## 👤 Autor

**Felipe Martin**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)
- Repositório: [Organizador de Presentes do Felixo](https://github.com/Felipe-Alcantara/Organizador-de-presentes-do-Felixo)

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!

