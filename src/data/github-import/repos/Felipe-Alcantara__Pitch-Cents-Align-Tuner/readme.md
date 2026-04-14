# Pitch Cents Align Tuner

Pitch Cents Align Tuner é uma ferramenta pensada para produtores, sound designers e músicos que trabalham com samples vindos de múltiplas fontes e precisam alinhá-los rapidamente à tonalidade da música. Em vez de tentar adivinhar na orelha ou ajustar sem critério, o Pitch Cents Align Tuner calcula automaticamente quantos cents (positivo ou negativo) são necessários para aproximar cada sample da nota mais adequada dentro da escala alvo da sua música.

## 🌐 Versão Web (Online)

Acesse a ferramenta diretamente pelo navegador, sem precisar baixar nada:
### [👉 Abrir Pitch Cents Align Tuner](https://felipe-alcantara.github.io/Pitch-Cents-Align-Tuner/)

---

## Índice

- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Tecnologias](#tecnologias)
- [Licença](#licença)

---

## Funcionalidades

- **Modo Simples:** Interface direta para alinhar a tonalidade de uma sample (ex: D# Minor) com a tonalidade do projeto (ex: E Major), com suporte a frequências de referência diferentes (ex: Sample em 432Hz -> Projeto em 440Hz).
- **Modo Avançado:** Para ajustes finos de múltiplas notas ou frequências soltas, buscando a nota mais próxima dentro de toda a escala.
- **Cálculo de Desvio:** Calcula a diferença em cents e semitons.
- **Escalas Flexíveis:** Suporta escalas maiores, menores, harmônicas, melódicas e cromáticas.
- **Configurações de Hz:** Permite definir a referência A4 (Hz) independentemente para o Target e para a Sample.
- **Visual Dark:** Interface moderna inspirada em DAWs profissionais (FL Studio).
- **Exportação:** Copie os resultados para a área de transferência ou exporte como CSV.

## Como Usar

1. **Abrir a Aplicação:**
   - Basta abrir o arquivo `index.html` em qualquer navegador web moderno.
   - Não requer instalação ou servidor (roda via Brython).

2. **Modo Simples (Padrão):**
   - **Target:** Escolha a Tônica e Escala do seu projeto (ex: C Minor) e a frequência base (ex: 440Hz).
   - **Sample:** Escolha a Tônica da sua sample (ex: F#) e a frequência original dela (ex: 440Hz ou 432Hz).
   - Clique em **Calcular Ajuste** para ver quantos semitons e cents você precisa alterar na sample.

3. **Modo Avançado:**
   - Clique em "Modo Avançado" no topo.
   - Insira uma lista de notas ou frequências soltas.
   - A ferramenta encontrará a nota mais próxima na escala alvo para cada entrada.

## Tecnologias

- **HTML5 / CSS3:** Interface do usuário responsiva e estilizada.
- **Python (via Brython):** Lógica de cálculo musical robusta rodando no navegador.

## Licença

Este projeto é de código aberto. Sinta-se à vontade para modificar e distribuir.
