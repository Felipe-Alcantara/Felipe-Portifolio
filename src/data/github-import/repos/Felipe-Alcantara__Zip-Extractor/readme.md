# Zip Extractor (Flatten)

Este projeto contém um script Python projetado para automatizar a extração e organização de arquivos de múltiplos arquivos ZIP espalhados em subpastas.

O objetivo principal é consolidar arquivos que estão "escondidos" dentro de estruturas de pastas complexas (como arquivos ZIP dentro de pastas, que por sua vez contêm outras pastas) em um único diretório de destino, sem subpastas.

## Funcionalidades

1.  **Busca Recursiva:** Encontra todos os arquivos `.zip` dentro de uma pasta "mãe" e todas as suas subpastas.
2.  **Extração Temporária:** Extrai o conteúdo dos ZIPs para uma área temporária segura.
3.  **Achatamento (Flattening):** Percorre o conteúdo extraído e move **apenas os arquivos** para a pasta de destino final, ignorando qualquer estrutura de pastas que existia dentro do ZIP.
4.  **Tratamento de Duplicatas:** Se um arquivo com o mesmo nome já existir no destino, o script renomeia o novo arquivo automaticamente (ex: `jogo.rom` -> `jogo_1.rom`) para evitar sobrescrita.
5.  **Logs Detalhados:** Exibe no console o passo a passo do processo: arquivos encontrados, conteúdo dos zips e status de cada movimentação.

## Como Usar

1.  Certifique-se de ter o **Python 3** instalado.
2.  Abra o arquivo `zip_extractor.py`.
3.  Edite as variáveis de configuração no início da função `main()`:

    ```python
    def main():
        # --- CONFIGURAÇÃO ---
        source_folder = r"C:\Caminho\Para\Sua\Pasta\Mae"
        destination_folder = r"C:\Caminho\Para\Pasta\Destino"
        # --------------------
    ```

4.  Execute o script:

    ```bash
    python zip_extractor.py
    ```

## Exemplo de Caso de Uso

**Cenário:** Você tem uma coleção de ROMs onde cada jogo está em um ZIP separado, e dentro desse ZIP o arquivo da ROM está dentro de outra pasta.

**Antes:**
```text
Pasta Mãe/
├── Pasta A/
│   └── Jogo1.zip
│       └── Pasta Interna/
│           └── jogo1.bin
└── Pasta B/
    └── Jogo2.zip
        └── Pasta Interna/
            └── jogo2.bin
```

**Depois (na Pasta Destino):**
```text
Pasta Destino/
├── jogo1.bin
└── jogo2.bin
```

