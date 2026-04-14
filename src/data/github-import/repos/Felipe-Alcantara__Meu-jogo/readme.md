# Meu-jogo

Um jogo de cartas baseado em Buckshot Roulette, desenvolvido em Python.

## Estrutura do Projeto

```
Meu-jogo/
├── main.py                     # Arquivo principal do jogo
├── geradores/                  # Módulo de geradores
│   ├── __init__.py             # Inicialização do módulo
│   ├── rounds.py               # Gerador de cartas do round
│   └── cartas_habilidade.py    # Gerador de cartas de habilidade
├── README.md                   # Este arquivo
└── LICENSE                     # Licença do projeto
```

## Como Jogar

1. Configure o round e número de jogadores em `main.py`:
   ```python
   ROUND_ATUAL = 5      # Número do round
   NUM_JOGADORES = 1    # Quantidade de jogadores
   ```

2. Execute o jogo:
   ```bash
   python main.py
   ```

3. Comandos alternativos para testar módulos individualmente:
   ```bash
   python -m geradores.rounds           # Testa só o gerador de rounds
   python -m geradores.cartas_habilidade # Testa só as cartas de habilidade
   ```

---

## Módulos

### Gerador de Rounds (`geradores/rounds.py`)

Responsável por gerar as cartas de cada round do jogo.

#### Como funciona

Cada carta pode ser **positiva (1)** ou **negativa (0)**.

A quantidade de cartas é calculada pela fórmula:
```
quantidade_cartas = round_atual × multiplicador
```

#### Sistema de Multiplicadores

Os multiplicadores controlam quantas cartas cada round terá, adicionando imprevisibilidade ao jogo.

| Constante | Valor | Função |
|-----------|-------|--------|
| `MULTIPLICADOR_MIN` | 1.2 | Limite mínimo do sorteio aleatório |
| `MULTIPLICADOR_MAX` | 1.6 | Limite máximo do sorteio aleatório |
| `MULTIPLICADOR_ROUND_1` | 2 | Valor fixo para o round 1 |

**Por que usar um intervalo aleatório (1.2 a 1.6)?**
- Com valor fixo: Round 5 = **sempre 7 cartas** → jogo previsível
- Com intervalo: Round 5 = **6 a 8 cartas** → varia a cada partida

**Por que o round 1 é fixo?**
- Sem isso, `1 × 1.2 = 1.2` arredondaria para **1 carta** (muito pouco)
- Com multiplicador 2, garante **mínimo de 2 cartas** no primeiro round

#### Variação Progressiva

A variação é proporcional ao round: `round × (1.6 - 1.2) = round × 0.4`

| Round | Mínimo (×1.2) | Máximo (×1.6) | Variação |
|-------|---------------|---------------|----------|
| 1 | 2 (fixo) | 2 (fixo) | 0 |
| 2 | 2 | 3 | 1 |
| 5 | 6 | 8 | 2 |
| 10 | 12 | 16 | 4 |
| 20 | 24 | 32 | 8 |

**Efeito no jogo:**
- Rounds iniciais → variação pequena, mais previsível
- Rounds avançados → variação grande, mais caótico

O jogo fica **progressivamente mais imprevisível** conforme avança.

#### Funções disponíveis

| Função | Parâmetros | Retorno | Descrição |
|--------|------------|---------|-----------|
| `calcular_quantidade_cartas(round_atual)` | `round_atual` (int) | `int` | Calcula quantas cartas o round terá |
| `gerar_round(round_atual)` | `round_atual` (int) | `(int, list)` | Gera as cartas. Retorna quantidade e lista de 0s/1s |
| `contar_cartas(cartas)` | `cartas` (list) | `dict` | Retorna `{'negativas': X, 'positivas': Y, 'total': Z}` |

---

### Gerador de Cartas de Habilidade (`geradores/cartas_habilidade.py`)

Gera cartas de habilidade aleatórias para os jogadores. Cada jogador recebe uma carta por round.

#### Cartas Disponíveis

| # | Nome        | Descrição                              |
|---|-------------|----------------------------------------|
| 1 | Observation | Permite ver cartas ocultas do oponente |
| 2 | Lock        | Trava uma carta no lugar, impedindo troca |
| 3 | +2          | Adiciona 2 cartas extras ao round |
| 4 | Torn        | Rasga/remove uma carta do jogo |
| 5 | Heart       | Recupera vida ou dá vida extra |
| 6 | Gun         | Ataque direto no oponente |
| 7 | Magnet      | Atrai cartas específicas para sua mão |
| 8 | Shield      | Proteção contra o próximo ataque |

#### Funções disponíveis

| Função | Parâmetros | Retorno | Descrição |
|--------|------------|---------|-----------|
| `gerar_carta()` | — | `(int, str, str)` | Gera uma carta aleatória. Retorna (id, nome, descrição) |
| `gerar_para_jogadores(num_jogadores)` | `num_jogadores` (int) | `list` | Gera uma carta para cada jogador |
| `obter_carta_por_id(id_carta)` | `id_carta` (int) | `dict` ou `None` | Busca carta pelo ID |
| `listar_todas_cartas()` | — | `dict` | Retorna dicionário com todas as 8 cartas |

---

### Arquivo Principal (`main.py`)

Ponto de entrada do jogo. Coordena a geração de rounds e distribuição de cartas.

#### Funções disponíveis

| Função | Parâmetros | Retorno | Descrição |
|--------|------------|---------|-----------|
| `exibir_round(round_num, cartas)` | `round_num` (int), `cartas` (list) | — | Exibe informações do round |
| `exibir_cartas_habilidade(num_jogadores)` | `num_jogadores` (int) | — | Gera e exibe cartas de habilidade |
| `jogar()` | — | — | Função principal que executa uma rodada |

---

## Exemplo de Saída

```
==================================================
ROUND 5
==================================================
Cartas: [1, 0, 0, 1, 0, 1, 0]
Total: 7 cartas
  - Negativas (0): 4
  - Positivas (1): 3

==================================================
CARTAS DE HABILIDADE
==================================================

Você recebeu: Shield
   Proteção contra o próximo ataque
```

---

## Histórico de Versões

### V2.0 (Atual)
- Projeto reorganizado em módulos (`geradores/`)
- Nomes de arquivos padronizados (sem espaços ou parênteses)
- Documentação completa com docstrings
- Suporte a múltiplos jogadores
- Sistema de multiplicadores com variação progressiva
- Funções reutilizáveis e bem documentadas
- Cartas de habilidade com descrições

### V1.0
- Sistema de rounds com quantidade fixa (3 rounds: 2, 4, 8 cartas)
- Gerador de cartas de habilidade básico
- Código em arquivos separados sem modularização
- Arquivos com nomes contendo espaços e versões
