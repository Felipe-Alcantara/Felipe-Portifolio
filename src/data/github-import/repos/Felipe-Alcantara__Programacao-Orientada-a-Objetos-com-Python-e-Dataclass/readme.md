Claro, aqui está o README atualizado:

# Projeto de Finanças Pessoais

Este projeto é um sistema simples de gerenciamento de finanças pessoais, desenvolvido em Python. Ele permite que os usuários registrem suas transações financeiras e categorizem-nas para melhor gerenciamento de suas finanças.

## Arquivos do Projeto

O projeto é composto por quatro arquivos principais:

1. **Categoria.py**: Este arquivo define a classe `Categoria`, que é usada para criar categorias para as transações. Cada categoria tem um atributo `nome`.

2. **Transacao.py**: Este arquivo define a classe `Transacao`, que é usada para criar transações. Cada transação tem uma `descricao`, um `valor` e uma `categoria`. Além disso, a classe `Transacao` tem um método `exibir()` que imprime os detalhes da transação.

3. **Ultilitários.py**: Este arquivo contém funções utilitárias para o gerenciamento de transações e categorias. Ele inclui funções para cadastrar categorias (`cadastrar_categoria`), cadastrar transações (`cadastrar_transacao`) e calcular o saldo total (`saldo_total`). Além disso, agora inclui a funcionalidade de salvar cada transação e o saldo total em um arquivo de texto (`Transação.txt`).

4. **Main.py**: Este é o arquivo principal que usa as classes e funções definidas nos outros arquivos para criar categorias e transações, e calcular o saldo total.

## Utilidade do Projeto

Este projeto pode ser útil para qualquer pessoa que queira gerenciar suas finanças pessoais de maneira simples e eficaz. Ele permite que os usuários registrem suas transações financeiras, categorizem-nas e calculem seu saldo total. Isso pode ajudar os usuários a terem uma visão clara de suas finanças e a tomarem decisões financeiras informadas.

Além disso, este projeto é um ótimo exemplo de programação orientada a objetos em Python, tornando-o um recurso útil para aqueles que estão aprendendo Python ou programação orientada a objetos.

## Como Usar

Para usar este projeto, siga estas etapas:

1. Clone ou baixe este repositório.
2. Execute o arquivo `Main.py`.

Você pode então começar a registrar suas transações e categorias, e o sistema calculará seu saldo total. Além disso, cada transação e o saldo total serão automaticamente salvos no arquivo `Transação.txt`.

Boa sorte com suas finanças pessoais!
