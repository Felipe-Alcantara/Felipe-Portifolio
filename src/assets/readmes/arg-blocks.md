# ARG Blocks

> Componentes base para criar puzzles criptográficos e jogos de realidade alternativa

## 🧩 Sobre o Projeto

ARG Blocks é uma biblioteca de componentes React para criar jogos de realidade alternativa (ARG) e puzzles criptográficos interativos. Ideal para desenvolvedores que querem criar experiências imersivas de mistério.

## ✨ Funcionalidades

- **Componentes de criptografia** (César, Vigenère, Base64)
- **Puzzles visuais** interativos
- **Sistema de pistas** progressivo
- **Validação automática** de respostas
- **Temas customizáveis**
- **Integração com APIs** externas

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Crypto-JS
- Framer Motion
- Zustand (estado)

## 📦 Instalação

```bash
npm install arg-blocks
```

## 🎮 Uso Básico

```jsx
import { CipherBlock, PuzzleContainer } from 'arg-blocks';

function MyARG() {
  return (
    <PuzzleContainer theme="dark">
      <CipherBlock 
        type="caesar"
        shift={13}
        answer="HELLO WORLD"
        onSolve={() => console.log('Puzzle resolvido!')}
      />
    </PuzzleContainer>
  );
}
```

## 🔧 Componentes Disponíveis

- `CipherBlock` - Cifras clássicas
- `VisualPuzzle` - Puzzles visuais
- `ClueSystem` - Sistema de pistas
- `ProgressTracker` - Acompanhamento de progresso
- `HintProvider` - Provedor de dicas

## 🎯 Exemplos

Veja a pasta `examples/` para implementações completas de ARGs.

## 🤝 Contribuição

Adoramos contribuições! Especialmente novos tipos de puzzles e componentes.

## 📄 Licença

MIT License