# Sistema de Gerenciamento de Clientes e Filmes

Este repositório contém um sistema de gerenciamento de clientes e filmes, construído em Python. O sistema é composto por três arquivos principais: `Cliente.py`, `Filme.py` e `main.py`.

## Cliente.py

O arquivo `Cliente.py` define a classe `Cliente`, que representa um cliente com atributos como `Nome`, `Email`, `Plano` e `idade`. A classe `Cliente` também possui vários métodos para gerenciar e verificar informações do cliente.

- `__init__`: Este é o construtor da classe que inicializa os atributos do cliente.
- `__str__`: Este método retorna uma representação em string do cliente.
- `plano_invalido`: Este método verifica se o plano do cliente é válido.
- `mudar_plano`: Este método permite ao cliente mudar seu plano.
- `verificar_plano`: Este método verifica se o plano do cliente permite assistir a um determinado filme.
- `verificar_class`: Este método verifica se a idade do cliente permite assistir a um filme com uma determinada classificação etária.
- `verificar`: Este método verifica se o cliente pode assistir a um determinado filme.
- `salvar_cliente`: Este método salva os detalhes do cliente em um arquivo.
- `cliente_existente`: Este método verifica se o cliente já existe no arquivo.

## Filme.py

O arquivo `Filme.py` define a classe `Filme`, que representa um filme com atributos como `nomeFilme`, `classificacao` e `planoNecessario`.

## main.py

O arquivo `main.py` é o ponto de entrada do sistema. Ele importa as classes `Cliente` e `Filme`, cria uma instância de cada uma e verifica se o cliente pode assistir ao filme.

## Como o sistema foi construído

O sistema foi construído usando a linguagem de programação Python. Ele segue o paradigma de programação orientada a objetos (OOP), o que torna o código mais modular e fácil de manter. Cada classe tem responsabilidades claras, o que facilita a compreensão do código.

## Utilidade do código

Este código pode ser útil para qualquer pessoa que esteja construindo um sistema de gerenciamento de clientes ou um serviço de streaming de filmes. Ele fornece uma estrutura básica para gerenciar clientes e filmes, e pode ser facilmente expandido para incluir mais funcionalidades. Além disso, o código é um bom exemplo de programação orientada a objetos em Python, o que pode ser útil para fins educacionais.
