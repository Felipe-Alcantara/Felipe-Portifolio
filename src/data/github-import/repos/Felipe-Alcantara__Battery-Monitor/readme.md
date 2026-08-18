# Battery Monitor

Monitor e registrador de bateria para Linux. Lê os sensores em `/sys/class/power_supply/BAT0`, registra tudo em CSV e gera gráficos com previsão de autonomia baseada no histórico real de uso — mais preciso que a estimativa instantânea do sistema.

Útil para avaliar baterias degradadas (ex: notebooks usados): mede a saúde real (Wh atuais vs. de projeto), o consumo médio e quanto tempo a bateria realmente dura.

## Como rodar

Forma mais simples — abre o menu interativo onde você instala, configura e inicia:

```bash
python3 start_app.py
```

No menu você escolhe:

- **Iniciar logger** — registra a bateria em CSV (em segundo plano ou como serviço systemd que inicia com o sistema)
- **Parar logger** — encerra o registro
- **Gerar relatório** — gráfico de carga/potência + previsão de autonomia
- **Instalar/Setup** — cria a `.venv` e instala dependências
- **Configurar** — intervalo entre amostras
- **Status/Sair** — estado do ambiente, do logger e da bateria

## Como funciona

Não precisa de nada rodando em background: o relatório lê o histórico que o próprio sistema já coleta via **upower** (`/var/lib/upower/`), com dias de dados de nível e consumo.

- `scripts/battery_report.py` — separa o histórico em sessões de carga/descarga, ajusta regressão linear em cada sessão e estima: saúde da bateria, consumo médio, autonomia total (100%→0%), autonomia restante e tempo de carga. Gera `data/battery_report.png` no estilo do gráfico de bateria do Android (nível do dia, carga em verde, previsão tracejada até 0%).
- `scripts/battery_logger.py` — logger CSV opcional (`data/battery_log.csv`), útil para retenção longa, já que o upower poda dados antigos. Sem dependências externas.

## Requisitos

- Linux com bateria exposta em `/sys/class/power_supply/BAT0`
- Python 3.10+ e `python3-venv`

## Ideias para quem quiser contribuir

- Suporte a múltiplas baterias / detecção automática (`BAT1`, etc.)
- Acompanhamento da degradação ao longo dos meses (evolução do `energy_full`)
- Modelo de previsão por perfil de uso (ocioso, navegação, carga pesada)

## Licença

MIT — veja [LICENSE](LICENSE).

