# 🃏 Luckshot Cards

Um webgame estático pass-and-play inspirado em **Buckshot Roulette**, reinterpretado como um jogo de cartas para 2-8 jogadores. Jogue com seus amigos em um único dispositivo compartilhado!

![Luckshot Cards](https://img.shields.io/badge/status-ready-brightgreen) ![React](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## 🎮 Sobre o Jogo

**Luckshot Cards** é um jogo de cartas de sorte e estratégia onde cada jogador deve escolher cuidadosamente suas cartas e alvos. O jogo apresenta:

- **Cartas Positivas (Seguras)**: Não causam dano
- **Cartas Negativas (Perigo)**: Causam 1 HP de dano ao alvo
- **Cartas de Habilidade**: Efeitos especiais que podem mudar o rumo do jogo

### 🎯 Cartas de Habilidade

| Carta           | Descrição                                       |
| --------------- | ----------------------------------------------- |
| 👁️ **Observar** | Veja as próximas 3 cartas do deck               |
| 🔒 **Trava**    | Trave uma carta revelada para o próximo jogador |
| ➕ **+2**       | Próximo jogador deve comprar 2 cartas           |
| 🛡️ **Escudo**   | Protege contra o próximo ataque                 |
| ✂️ **Rasgada**  | Descarte a próxima carta do deck                |
| ❤️ **Coração**  | Recupere 1 HP                                   |
| 🔫 **Arma**     | Cause 1 dano direto a um jogador                |
| 🧲 **Ímã**      | Troque 1 carta com outro jogador                |

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/Cardshot-Roulette.git
cd Cardshot-Roulette
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Abra no navegador**

Acesse `http://localhost:5173` no seu navegador.

## 🔨 Build e Deploy

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy no GitHub Pages

1. **Configure o `base` no `vite.config.js`**

   Certifique-se de que a propriedade `base` corresponde ao nome do seu repositório:

   ```javascript
   export default defineConfig({
     base: "/Cardshot-Roulette/", // Nome do seu repositório
     // ...
   });
   ```

2. **Faça o build**

   ```bash
   npm run build
   ```

3. **Deploy usando gh-pages**

   Instale o pacote gh-pages:

   ```bash
   npm install -D gh-pages
   ```

   Adicione um script no `package.json`:

   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

   Execute o deploy:

   ```bash
   npm run deploy
   ```

4. **Configure o GitHub Pages**

   - Acesse as configurações do repositório
   - Vá em **Pages**
   - Selecione o branch `gh-pages` como source
   - Salve e aguarde alguns minutos

Seu jogo estará disponível em: `https://seu-usuario.github.io/Cardshot-Roulette/`

### Deploy Alternativo (Netlify/Vercel)

#### Netlify

```bash
npm run build
# Arraste a pasta dist/ para netlify.com/drop
```

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📁 Estrutura do Projeto

```
Cardshot-Roulette/
├── public/
│   └── assets/
│       └── placeholders/          # SVGs das cartas
│           ├── positive.svg
│           ├── negative.svg
│           ├── observe.svg
│           ├── lock.svg
│           ├── plus_two.svg
│           ├── shield.svg
│           ├── torn.svg
│           ├── heart.svg
│           ├── gun.svg
│           └── magnet.svg
├── src/
│   ├── components/                # Componentes React
│   │   ├── App.jsx               # Componente raiz
│   │   ├── Game.jsx              # Lógica principal do jogo
│   │   ├── PlayerHand.jsx        # Mão do jogador
│   │   ├── Card.jsx              # Componente de carta individual
│   │   ├── Hud.jsx               # Interface de informações
│   │   └── SettingsModal.jsx     # Modal de configuração
│   ├── lib/                      # Lógica do jogo
│   │   ├── deck.js               # Geração e manipulação do deck
│   │   ├── effects.js            # Efeitos das cartas
│   │   ├── gameReducer.js        # Gerenciamento de estado
│   │   └── storage.js            # Persistência localStorage
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Estilos globais
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── postcss.config.cjs
```

## 🎨 Personalização

### Modificar Imagens das Cartas

Substitua os arquivos SVG em `public/assets/placeholders/` pelas suas próprias ilustrações. Mantenha os mesmos nomes de arquivo:

- `positive.svg` - Carta positiva
- `negative.svg` - Carta negativa
- `observe.svg`, `lock.svg`, etc. - Cartas de habilidade

### Ajustar Tema de Cores

Edite `tailwind.config.cjs` para modificar as cores do tema:

```javascript
colors: {
  'game-bg': '#000000',
  'game-surface': '#1a1a1a',
  'game-border': '#333333',
  // ... mais cores
}
```

### Balancear Cartas

Modifique os valores padrão em `src/components/SettingsModal.jsx` para ajustar o balanceamento inicial do jogo.

## 🎯 Regras do Jogo

1. **Início**: Cada jogador começa com N cartas (configurável) e 3 HP (configurável)
2. **Turno**: No seu turno, escolha uma carta da sua mão e selecione um alvo (você mesmo ou outro jogador)
3. **Resolução**: A carta é revelada e seu efeito é aplicado
4. **Fim do Turno**: Compre uma carta do deck (se disponível) e passe para o próximo jogador
5. **Vitória**: O último jogador com HP > 0 vence!

### Estratégias

- Use **Observar** para planejar suas jogadas
- **Escudo** pode salvar sua vida nos momentos cruciais
- **Ímã** permite roubar cartas poderosas de adversários
- Cuidado ao usar cartas em si mesmo!

## 🛠️ Tecnologias

- **[React](https://react.dev/)** - Biblioteca UI
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **localStorage** - Persistência de dados local

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- Inspirado em **Buckshot Roulette** de Mike Klubnika
- Placeholders SVG criados especificamente para este projeto
- Comunidade React e Vite

## 📧 Contato

Tem dúvidas ou sugestões? Abra uma [issue](https://github.com/seu-usuario/Cardshot-Roulette/issues)!

---

**Desenvolvido com ❤️ usando React + Vite + Tailwind CSS**

