# Calculadora de Área com Pontos Aleatórios

Uma aplicação Python com interface gráfica para calcular a área de polígonos irregulares usando o método de Monte Carlo.

![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)
![Tkinter](https://img.shields.io/badge/GUI-Tkinter-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
   - [Pré-requisitos](#pré-requisitos)
   - [Instalação](#instalação)
   - [Instruções de Uso](#instruções-de-uso)
- [Método de Monte Carlo](#método-de-monte-carlo)
- [Interface](#interface)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Código](#estrutura-do-código)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)
- [Versão Refatorada com Classes](#versão-refatorada-com-classes)
- [Como Executar o Projeto](#como-executar-o-projeto)

## 📋 Descrição

Este projeto permite ao usuário desenhar formas geométricas irregulares em uma interface gráfica e calcular suas áreas usando o método de Monte Carlo com pontos aleatórios. A aplicação gera pontos aleatórios dentro de um retângulo envolvente e verifica quantos caem dentro do polígono desenhado, estimando a área através da proporção de pontos.

## ✨ Funcionalidades

- **Desenho Livre**: Desenhe polígonos irregulares com o mouse
- **Método de Monte Carlo**: Cálculo de área através de pontos aleatórios
- **Controle de Precisão**: Ajuste o número de pontos por lote
- **Visualização em Tempo Real**: Veja os pontos sendo gerados (verde = dentro, vermelho = fora)
- **Controles Interativos**: Pausar/retomar a geração de pontos
- **Histórico de Cálculos**: Mantenha registro dos desenhos anteriores
- **Desenho com Eixos Travados**: Pressione Ctrl para travar eixos horizontal ou vertical
- **Log de Atividades**: Acompanhe todas as ações em tempo real

## 🚀 Como Usar

### Pré-requisitos

- Python 3.7 ou superior
- Tkinter (geralmente incluído com Python)

### Instalação

1. Clone este repositório:
```bash
git clone https://github.com/Felipe-Alcantara/Calcular-area-irregular-sorteando-pontos-aleatorios.git
cd Calcular-area-irregular-sorteando-pontos-aleatorios
```

2. Execute a aplicação:
```bash
python area_calculator.py
```

### Instruções de Uso

1. **Desenhar um Polígono**:
   - Clique e arraste o mouse na área de desenho para criar seu polígono
   - Solte o botão para fechar automaticamente o polígono
   - Use Ctrl enquanto desenha para travar em eixos horizontal ou vertical

2. **Controlar a Geração de Pontos**:
   - A geração começa automaticamente após desenhar
   - Use "Pausar" para interromper
   - Use "Retomar" para continuar
   - Ajuste o número de pontos por lote no campo de entrada

3. **Limpar e Recomeçar**:
   - Clique em "Limpar" para apagar o desenho atual
   - Os cálculos anteriores são salvos no histórico

## 🎯 Método de Monte Carlo

O método de Monte Carlo é uma técnica estatística que usa amostragem aleatória para obter resultados numéricos. Neste projeto:

1. Um retângulo envolvente é criado ao redor do polígono
2. Pontos aleatórios são gerados dentro deste retângulo
3. Cada ponto é testado para verificar se está dentro do polígono
4. A área é estimada pela fórmula:

   **Área do Polígono = (Pontos Dentro / Total de Pontos) × Área do Retângulo**

Quanto mais pontos forem gerados, mais precisa será a estimativa.

## 📊 Interface

A interface é dividida em três seções principais:

- **Área de Desenho**: Canvas onde você desenha e visualiza os pontos
- **Controles**: Botões para pausar, retomar, limpar e ajustar parâmetros
- **Informações**: Exibe estatísticas em tempo real e histórico de cálculos

## 🛠️ Tecnologias Utilizadas

- **Python 3**: Linguagem de programação principal
- **Tkinter**: Biblioteca para interface gráfica
- **Random**: Geração de pontos aleatórios

## 📝 Estrutura do Código

O projeto utiliza Programação Orientada a Objetos com a classe `AreaCalculatorApp` que encapsula toda a lógica da aplicação:

- **Gerenciamento de Estado**: Controle de desenho e geração de pontos
- **Interface Gráfica**: Configuração completa do layout
- **Algoritmo Ray Casting**: Verificação de pontos dentro do polígono
- **Cálculos de Área**: Métodos para retângulo e polígono

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Felipe Alcantara**

- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

## 🙏 Agradecimentos

- Inspirado pelo método de Monte Carlo para cálculos probabilísticos
- Comunidade Python pela documentação e recursos

   - A estimativa da área do polígono é atualizada após cada lote de pontos gerados, proporcionando feedback imediato ao usuário.

5. **Inicialização e Reset Correto de Variáveis:**

   - Todas as variáveis são inicializadas e redefinidas adequadamente, especialmente ao limpar o desenho.

6. **Organização e Comentários no Código:**

   - O código foi reorganizado com funções bem definidas e comentários explicativos, melhorando a legibilidade e manutenção.

### Como os Problemas Foram Corrigidos

- **Variáveis Globais:**

  As variáveis globais foram declaradas dentro das funções usando a palavra-chave `global`, evitando conflitos e garantindo que o estado global fosse atualizado corretamente.

- **Loops Bloqueantes:**

  O uso do método `after()` do Tkinter permitiu agendar a geração de pontos sem bloquear o loop de eventos da interface gráfica.

- **Condições de Parada:**

  A condição de parada impraticável foi removida, e o controle de geração de pontos foi delegado ao usuário através dos botões de "Pausar" e "Retomar".

- **Atualização da Estimativa de Área:**

  A função de cálculo da área do polígono foi chamada após cada geração de pontos, atualizando a estimativa continuamente.

- **Inicialização de Variáveis:**

  Variáveis como `num_points` foram inicializadas corretamente, e todas as variáveis relevantes foram redefinidas na função de limpeza.

- **Estruturação do Código:**

  O código foi reorganizado, com funções agrupadas logicamente e nomes claros para variáveis e funções.

---

## Versão Refatorada com Classes

### Refatoração Usando Programação Orientada a Objetos

A terceira versão do projeto refatorou o código usando programação orientada a objetos (POO), encapsulando toda a funcionalidade dentro de uma classe.

**Características Principais:**

- **Criação da Classe `AreaCalculatorApp`:**

  - Todos os atributos (dados) e métodos (funções) foram encapsulados dentro da classe.

- **Eliminação de Variáveis Globais:**

  - Variáveis globais foram substituídas por atributos de instância, acessados via `self`.

- **Organização Modular:**

  - Métodos organizados por funcionalidade (eventos do mouse, geração de pontos, cálculo de áreas, atualização da interface).

- **Melhoria na Manutenção e Extensibilidade:**

  - O código orientado a objetos facilita a manutenção e expansão futura, permitindo adicionar novas funcionalidades com facilidade.

### Benefícios da Nova Estrutura

1. **Encapsulamento de Dados e Funções:**

   - Agrupamento lógico de dados e comportamentos relacionados, melhorando a organização do código.

2. **Redução de Erros:**

   - O uso de atributos de instância reduz o risco de conflitos e comportamentos inesperados associados a variáveis globais.

3. **Melhor Legibilidade e Manutenção:**

   - O código está mais limpo e fácil de entender, com responsabilidades bem definidas para cada método.

4. **Facilidade de Expansão:**

   - Novas funcionalidades podem ser adicionadas como métodos ou subclasses, sem impactar negativamente o restante do código.

5. **Uso de Boas Práticas de Programação:**

   - A adoção de POO segue padrões amplamente aceitos na engenharia de software, resultando em um código mais profissional.

---

## Como Executar o Projeto

### Pré-requisitos

- Python 3 instalado em seu sistema.
- Biblioteca Tkinter (geralmente já incluída com a instalação padrão do Python).

### Passos para Execução

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/Felipe-Alcantara/Calcular-area-irregular-sorteando-pontos-aleatorios
   cd nome-do-repositorio
   ```

2. **Escolha a Versão:**

   - **Versão Inicial (com Bugs):** Arquivo `versao_inicial.py`
   - **Versão Corrigida:** Arquivo `versao_corrigida.py`
   - **Versão com Classes:** Arquivo `area_calculator_app.py`

3. **Execute o Arquivo Desejado:**

   ```bash
   python area_calculator_app.py
   ```

   *Substitua `area_calculator_app.py` pelo nome do arquivo da versão que deseja executar.*

### Utilização do Programa

1. **Desenhar a Forma:**

   - Clique e arraste o mouse na metade inferior da janela para desenhar o polígono.
   - Solte o botão do mouse para finalizar o desenho. O polígono será fechado automaticamente.

2. **Geração de Pontos:**

   - Após finalizar o desenho, o programa começará a gerar pontos aleatórios dentro do retângulo envolvente.
   - Pontos dentro do polígono são marcados em verde; pontos fora, em vermelho.

3. **Estimativa da Área:**

   - A área do retângulo envolvente e a estimativa da área do polígono são exibidas na tela em centímetros quadrados.

4. **Controles Adicionais:**

   - **Atualizar `num_points`:** Insira um novo valor no campo de entrada e clique em "Atualizar num_points" para alterar o número de pontos gerados por lote.
   - **Pausar/Retomar:** Use os botões "Pausar" e "Retomar" para controlar a geração de pontos.
   - **Limpar:** Clique no botão "Limpar" para resetar o desenho e começar novamente.

5. **Log de Eventos:**

   - As ações realizadas são registradas em um log exibido na interface, permitindo acompanhar o histórico de eventos.

---

## Conclusão

Este projeto demonstra a evolução de um aplicativo simples de cálculo de área, destacando a importância de práticas adequadas de programação e organização do código. A transição da versão inicial com bugs para uma versão corrigida e, posteriormente, para uma versão orientada a objetos, evidencia como melhorias estruturais podem impactar positivamente a funcionalidade, usabilidade e manutenção de um software.

**Aprendizados Chave:**

- **Gestão Adequada de Variáveis e Estados:**

  - A importância de declarar variáveis globais e gerenciar estados corretamente para evitar comportamentos inesperados.

- **Interface Gráfica Responsiva:**

  - Uso de métodos assíncronos, como `after()` no Tkinter, para manter a interface responsiva durante operações contínuas.

- **Programação Orientada a Objetos:**

  - Encapsulamento de funcionalidades em classes melhora a organização e facilita a expansão futura do código.

- **Feedback Contínuo ao Usuário:**

  - Atualização regular de informações, como a estimativa de área, melhora a experiência do usuário.

Esperamos que este projeto seja útil como referência para desenvolvedores interessados em interfaces gráficas, cálculos geométricos e boas práticas de programação em Python.

---

**Autor:** Felipe Alcântara Martins (melhorias com ChatGPT)

**Licença:** [MIT](LICENSE)
