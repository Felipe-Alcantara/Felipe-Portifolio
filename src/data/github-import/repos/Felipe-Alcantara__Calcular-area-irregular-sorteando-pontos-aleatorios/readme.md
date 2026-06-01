# 📐 Calculadora de Área com Pontos Aleatórios

<div align="center">

![Python](https://img.shields.io/badge/Python-3.7+-blue?style=for-the-badge&logo=python&logoColor=white)
![Tkinter](https://img.shields.io/badge/GUI-Tkinter-green?style=for-the-badge&logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Calcule áreas de polígonos irregulares desenhando com o mouse — via método de Monte Carlo**

[🚀 Como Usar](#-como-usar) • [✨ Funcionalidades](#-funcionalidades) • [🔧 Estrutura do Código](#-estrutura-do-código) • [📝 Licença](#-licença)

</div>

---

## 📋 Índice

- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [✨ Funcionalidades](#-funcionalidades) ⭐ **DESTAQUE**
- [🚀 Como Usar](#-como-usar)
- [🎯 Método de Monte Carlo](#-método-de-monte-carlo)
- [🔧 Estrutura do Código](#-estrutura-do-código)
- [🧪 Testes](#-testes)
- [📝 Licença](#-licença)
- [👤 Autor](#-autor)
- [🤝 Contribuições](#-contribuições)

---

## 📋 Sobre o Projeto

Aplicação Python com interface gráfica para calcular a **área de polígonos irregulares** desenhados livremente com o mouse. O cálculo é feito pelo método de **Monte Carlo**: pontos aleatórios são sorteados dentro de um retângulo envolvente e a proporção dos que caem dentro do polígono estima a área.

Quanto mais pontos gerados, mais precisa a estimativa — e você acompanha isso em tempo real.

---

## 📁 Estrutura do Projeto

```
Calcular-area-irregular-sorteando-pontos-aleatorios/
│
├── area_calculator.py          # Interface gráfica (Tkinter)
├── polygon_calculator.py       # Lógica pura de cálculo (testável)
├── requirements.txt            # Dependências
├── LICENSE
├── README.md                   # Este arquivo
│
├── 📁 tests/
│   └── test_area_calculator.py # Testes automatizados
│
└── 📁 felixo-standards/        # Padrões de qualidade do projeto
```

---

## ✨ Funcionalidades

- **Desenho Livre**: Desenhe polígonos irregulares arrastando o mouse no canvas
- **Método de Monte Carlo**: Estimativa de área por amostragem aleatória
- **Visualização em Tempo Real**: Pontos verdes (dentro) e vermelhos (fora) gerados continuamente
- **Controle de Precisão**: Ajuste o número de pontos por lote
- **Pausar / Retomar**: Controle total sobre a geração de pontos
- **Desenho com Eixo Travado**: Segure `Ctrl` para travar no eixo horizontal ou vertical
- **Histórico de Cálculos**: Cálculos anteriores salvos automaticamente ao limpar
- **Log de Atividades**: Registro em tempo real de todas as ações

---

## 🚀 Como Usar

### Pré-requisitos

- Python 3.7 ou superior
- Tkinter (incluso na instalação padrão do Python)

### Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/Felipe-Alcantara/Calcular-area-irregular-sorteando-pontos-aleatorios.git

# Entre na pasta
cd Calcular-area-irregular-sorteando-pontos-aleatorios

# Execute a aplicação
python3 area_calculator.py
```

### Instruções de uso

1. **Desenhar um polígono**
   - Clique e arraste o mouse na área de desenho
   - Solte para fechar o polígono automaticamente
   - Segure `Ctrl` durante o desenho para travar em eixo horizontal ou vertical

2. **Controlar a geração de pontos**
   - A geração começa automaticamente após o desenho
   - Use **Pausar** / **Retomar** para controlar
   - Altere o campo `num_points` e clique em **Atualizar** para mudar o lote

3. **Limpar e recomeçar**
   - Clique em **Limpar** — o cálculo atual é salvo no histórico automaticamente

---

## 🎯 Método de Monte Carlo

1. Um retângulo envolvente é criado ao redor do polígono desenhado
2. Pontos aleatórios são gerados dentro desse retângulo
3. Cada ponto é testado pelo algoritmo **Ray Casting** para verificar se está dentro do polígono
4. A área é estimada pela fórmula:

   **Área do Polígono ≈ (Pontos Dentro / Total de Pontos) × Área do Retângulo**

Quanto mais pontos, mais precisa a estimativa.

---

## 🔧 Estrutura do Código

O projeto é dividido em dois módulos com responsabilidades separadas:

### `polygon_calculator.py` — Lógica pura

**`PolygonAreaCalculator`**
- `is_point_inside(points, x, y)` → Ray Casting para verificar se ponto está dentro do polígono
- `bounding_box_area(min_x, max_x, min_y, max_y)` → Área do retângulo envolvente em cm²
- `estimate_polygon_area(inside, total, bbox_area)` → Estimativa Monte Carlo
- `generate_random_points(min_x, max_x, min_y, max_y, count)` → Geração de pontos aleatórios

### `area_calculator.py` — Interface gráfica

**`AreaCalculatorApp`**
- Toda a interface Tkinter: canvas, controles, log e histórico
- Usa `PolygonAreaCalculator` para todos os cálculos
- Sem lógica de negócio misturada à UI

---

## 🧪 Testes

Os testes cobrem toda a lógica de cálculo de `PolygonAreaCalculator` sem depender da interface gráfica.

```bash
# Com pytest instalado
pytest tests/ -v

# Sem pytest (python3 puro)
python3 -m pytest tests/ -v
```

Casos cobertos: `is_point_inside` (quadrado, triângulo, polígono em L), `bounding_box_area`, `estimate_polygon_area` e `generate_random_points` — 22 testes no total.

---

## ⚠️ Limitações

- **Precisão**: Estimativa por amostragem — quanto mais pontos, mais precisa (nunca exata)
- **Escala fixa**: 100 pixels = 1 cm (configurável via `PolygonAreaCalculator.PIXELS_PER_CM`)
- **Um polígono por vez**: Limpe antes de desenhar um novo

---

## 📝 Licença

Este projeto está sob a licença MIT — veja o arquivo [LICENSE](LICENSE).

---

## 👤 Autor

**Felipe Alcantara**
- GitHub: [@Felipe-Alcantara](https://github.com/Felipe-Alcantara)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!

