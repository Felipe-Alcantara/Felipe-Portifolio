# API Test - Interface de Chat para Google Gemini

Este projeto é uma interface web simples e leve para testar e interagir com a API do Google Gemini (Generative AI). Desenvolvido em um único arquivo HTML, ele permite conversar com diferentes modelos do Gemini diretamente do seu navegador, sem necessidade de instalação de servidores ou dependências complexas.

### 🌐 [Acesse a Versão Web (Live Demo)](https://felipe-alcantara.github.io/API-Test/)

## ✨ Funcionalidades

- **Chat Interativo:** Interface amigável estilo chat para enviar prompts e receber respostas da IA.
- **Seleção de Modelos:** Escolha entre diferentes modelos disponíveis (ex: `gemini-1.5-flash`, `gemini-1.5-pro`, `gemini-pro`).
- **Listagem Dinâmica:** Botão para listar automaticamente todos os modelos aos quais sua API Key tem acesso.
- **Tratamento de Erros:** Mensagens de erro claras e dicas úteis para problemas comuns (como limites de cota/Rate Limits).
- **Design Responsivo:** Layout limpo e funcional que se adapta à tela.
- **Zero Configuração:** Basta abrir o arquivo no navegador.

## 🚀 Como Usar

1. **Obtenha uma API Key:**
   - Acesse o [Google AI Studio](https://aistudio.google.com/).
   - Crie uma nova chave de API (API Key).

2. **Execute o Projeto:**
   - Baixe este repositório ou apenas o arquivo `index.html`.
   - Abra o arquivo `index.html` em qualquer navegador web moderno (Chrome, Edge, Firefox, etc.).

3. **Configure e Converse:**
   - Cole sua API Key no campo "Cole sua API Key do Gemini aqui...".
   - (Opcional) Clique em "Listar Modelos" para ver quais modelos estão disponíveis para sua chave e atualizar a lista de seleção.
   - Digite sua mensagem e clique em "Enviar" (ou pressione Enter).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização da interface (Flexbox, design responsivo).
- **JavaScript (Vanilla):** Lógica de interação e chamadas assíncronas (`fetch`) para a API do Google Gemini.

## ⚠️ Nota sobre Segurança

Este projeto é executado inteiramente no lado do cliente (client-side). Sua API Key é usada apenas para fazer requisições diretas do seu navegador para os servidores do Google. Ela **não** é salva em nenhum servidor intermediário nem compartilhada com terceiros.

No entanto, como boas práticas de segurança:
- Nunca compartilhe sua API Key publicamente.
- Se estiver usando em um computador compartilhado, lembre-se de não deixar a chave salva ou visível.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


