# 🏀 Animação de Bola Quicando em JavaScript

<div align="center">

[![Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://felipe-alcantara.github.io/Animacao-usando-JavaScript/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

*Uma simulação interativa de física com Canvas API — código aberto e didático.*

</div>

---

## � Índice

- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Demonstração](#-demonstração)
- [🛠️ Tecnologias e Arquivos Principais](#️-tecnologias-e-arquivos-principais)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎓 Conceitos e Trechos Relevantes](#-conceitos-e-trechos-relevantes)
- [💻 Como Executar Localmente](#-como-executar-localmente)
- [🔭 Possíveis Extensões](#-possíveis-extensões)
- [🤝 Contribuições](#-contribuições)
- [📄 Licença](#-licença)
- [👨‍💻 Autor](#-autor)

---

## �📋 Sobre o Projeto

Este projeto nasceu em abril de 2024, quando eu estava começando a aprender **HTML**, **CSS** e **JavaScript**. Fiquei algumas ideias salvas e, em outubro de 2025, resolvi resgatar e aprimorar o código — resultado: esta versão mais polida e interativa.

O objetivo é simples: mostrar como é possível criar animações programáticas usando o elemento `<canvas>`. A aplicação simula gravidade, colisões, atrito e permite interação do usuário via mouse e toque (mobile).

### ✨ Funcionalidades

- 🎯 **Física Realista**: Gravidade, amortecimento e colisões com as bordas
- 🖱️ / 🤏 **Interação**: Suporte a mouse (desktop) e touch (mobile) — clique/toque, arraste e solte
- 💨 **Atrito**: A bola desacelera ao rolar no chão
- 🧱 **Texto como Obstáculo**: O título é desenhado no canvas (duas linhas) e atua como um obstáculo com colisão
- 🔄 **Responsivo**: Texto e layout se adaptam ao tamanho da janela

---

## 🚀 Demonstração

Acesse a demonstração ao vivo: [**Ver Demo**](https://felipe-alcantara.github.io/Animacao-usando-JavaScript/)

### Como Usar:
1. Toque ou clique na bola para segurá-la
2. Arraste para movê-la pela tela
3. Solte para arremessá-la com impulso baseado no movimento

---

## 🛠️ Tecnologias e Arquivos Principais

| Arquivo | Função |
|--------:|:------|
| `docs/index.html` | Página servida pelo GitHub Pages |
| `docs/js/script.js` | Lógica da animação (Canvas, física, touch/mouse) |
| `docs/css/style.css` | Estilos mínimos para full-screen |

---

## 📂 Estrutura do Projeto (resumo)

```
Animacao-usando-JavaScript/
├── docs/                  # Deploy para GitHub Pages
│   ├── index.html
│   ├── css/
│   └── js/
├── css/
├── js/
├── index.html
├── LICENSE
└── README.md
```

---

## 🎓 Conceitos e Trechos Relevantes

- Loop de animação com `requestAnimationFrame`
- Simulação de gravidade (incremento em `vy`) e contato com o chão (amortecimento em `vy`)
- Atrito aplicado a `vx` quando a bola toca o chão
- Detecção de colisão bola-retângulo usada para o título desenhado no canvas
- Suporte a eventos `mousedown`/`mousemove`/`mouseup` e `touchstart`/`touchmove`/`touchend`

Exemplo (simplificado):

```javascript
// Gravidade
this.vy += 0.5;

// Colisão com amortecimento
this.vy *= -0.8;

// Atrito no chão (quando y + radius >= canvas.height)
this.vx *= 0.98;
```

---

## 💻 Como Executar Localmente

### Opção rápida (abrir localmente)
Clone o repositório e abra `docs/index.html` no navegador (ou configure a pasta `docs` no GitHub Pages):

```bash
git clone https://github.com/Felipe-Alcantara/Animacao-usando-JavaScript.git
cd Animacao-usando-JavaScript
start docs/index.html  # Windows
```

### Com servidor local
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# Depois abra http://localhost:8000/docs
```

---

## 🔭 Possíveis Extensões

- Múltiplas bolas com colisão entre si
- UI para controlar gravidade, atrito e cores
- Efeitos sonoros e partículas
- Exportar/compartilhar configurações

---

## 🤝 Contribuições

Pull requests, issues e sugestões são bem-vindas. Se quiser estudar ou adaptar o código, tudo está em `docs/js/script.js`.

---

## 📄 Licença

MIT — veja o arquivo `LICENSE`.

---

## 👨‍💻 Autor

Felipe Alcantara — [GitHub](https://github.com/Felipe-Alcantara)

---

Feito com ❤️ e JavaScript



