---

# Classe Email em Python

Este repositório contém uma implementação simples de uma classe `Email` em Python.

## Código

Aqui está o código:

```python
class Email():
    def __init__(self, nome, email, servidor):
        self.nome = nome
        self.email = email
        self.servidor = servidor
    def pegar_Servidor(self):
        print(f"Seu servidor é: {self.servidor}")

minha_conta = Email("Felipe", "Felipe@gmail.com", "@Gmail.com")

minha_conta.pegar_Servidor()
```

## Descrição

A classe `Email` tem três atributos: `nome`, `email` e `servidor`. O método `__init__` é o construtor da classe, que é chamado automaticamente quando uma nova instância da classe é criada. O método `pegar_Servidor` imprime o servidor de email da instância.

O código cria uma nova instância da classe `Email` chamada `minha_conta` e chama o método `pegar_Servidor` na instância `minha_conta`.

Este código pode ser útil para gerenciar informações de email. Por exemplo, você pode usar a classe `Email` para armazenar informações de email e recuperar o servidor de email de uma conta específica.

---
