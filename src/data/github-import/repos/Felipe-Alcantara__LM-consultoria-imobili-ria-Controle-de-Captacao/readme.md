# 🏢 Sistema de Controle de Captações Imobiliárias

> **LM Consultoria Imobiliária**

Uma solução web robusta e intuitiva desenvolvida para otimizar o processo de cadastro, gestão e controle de imóveis captados. O sistema centraliza as informações, facilita a comunicação entre corretores e gerentes e fornece ferramentas de análise rápida através de um dashboard interativo.

---

## 🚀 Funcionalidades Principais

### 🏠 Gestão de Imóveis
*   **Cadastro Completo:** Registro detalhado de imóveis com código, título, descrição, endereço, valor e tipo (Venda/Locação).
*   **Galeria de Imagens:** Upload múltiplo de fotos para cada imóvel.
*   **Visualização Rápida:** Recurso de *Hover Preview* que exibe a imagem ampliada ao passar o mouse na listagem.
*   **Máscaras de Input:** Campos monetários inteligentes (R$) com formatação automática da direita para a esquerda.

### 📊 Dashboard & Relatórios
*   **Visão Geral:** Tabela interativa com listagem de todas as captações.
*   **Filtros Avançados:** Filtragem dinâmica por Mês, Ano, Tipo de Negócio (Venda/Locação) e Corretor responsável.
*   **Exportação de Dados:** Geração de relatórios em **CSV** (compatível com Excel/Pt-BR) contendo todos os dados filtrados.
*   **Indicadores Visuais:** Badges coloridos para status (Ativo, Vendido/Locado, Inativo).

### 🔐 Controle de Acesso e Segurança
Sistema de permissões baseado em cargos (Role-Based Access Control):
*   **Gerente:**
    *   Acesso irrestrito a todas as captações.
    *   Pode editar e excluir qualquer registro.
    *   **Gestão de Usuários:** Painel exclusivo para criar, editar e remover contas de corretores e gerentes.
*   **Corretor:**
    *   Visualiza todas as captações do sistema (transparência).
    *   Edita e exclui apenas as suas próprias captações.

### 🎨 Interface e Usabilidade
*   **Design Responsivo:** Layout fluido que se adapta a diferentes tamanhos de tela.
*   **Dark Mode:** Tema escuro nativo com persistência de preferência do usuário.
*   **Sticky Footer:** Rodapé fixo para melhor experiência visual em telas grandes.

---

## 🛠️ Tecnologias Utilizadas

*   **Backend:** [Python 3.13](https://www.python.org/) + [Django 6.0](https://www.djangoproject.com/)
*   **Banco de Dados:** SQLite (Padrão de desenvolvimento, facilmente migrável para PostgreSQL/MySQL)
*   **Frontend:**
    *   HTML5 / CSS3
    *   JavaScript (Vanilla)
    *   [Bootstrap 5.3](https://getbootstrap.com/) (Framework CSS)
*   **Ícones:** Bootstrap Icons

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos
*   Python 3.10 ou superior instalado.
*   Git instalado.

### Passo a Passo

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/LM-consultoria-imobiliaria.git
    cd LM-consultoria-imobili-ria-Controle-de-Captacao
    ```

2.  **Crie e ative o ambiente virtual**
    *   **Windows:**
        ```bash
        python -m venv .venv
        .venv\Scripts\activate
        ```
    *   **Linux/macOS:**
        ```bash
        python3 -m venv .venv
        source .venv/bin/activate
        ```

3.  **Instale as dependências**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure o Banco de Dados**
    ```bash
    python manage.py migrate
    ```

5.  **Crie os dados iniciais (Opcional)**
    O projeto inclui um script para gerar usuários de teste automaticamente.
    ```bash
    python create_fixtures.py
    ```
    *Isso criará os usuários listados na seção de Credenciais abaixo.*

6.  **Inicie o Servidor**
    ```bash
    python manage.py runserver
    ```

7.  **Acesse o Sistema**
    Abra seu navegador e vá para: `http://127.0.0.1:8000/`

---

## 🔑 Credenciais de Acesso (Demo)

Se você utilizou o script `create_fixtures.py`, as seguintes contas estarão disponíveis:

| Usuário | Senha | Perfil | Permissões |
| :--- | :--- | :--- | :--- |
| **gerente** | `Demo@1234` | Gerente | Acesso Total + Gestão de Usuários |
| **corretor1** | `Demo@1234` | Corretor | Gestão das próprias captações |
| **corretor2** | `Demo@1234` | Corretor | Gestão das próprias captações |

---

## 📂 Estrutura do Projeto

```text
LM-consultoria/
├── captacoes/          # Aplicação principal (Models, Views, Forms)
│   ├── migrations/     # Histórico de alterações do banco
│   ├── templates/      # Templates HTML específicos do app
│   └── ...
├── core/               # Configurações globais do Django (settings.py)
├── media/              # Diretório para upload de imagens (user content)
├── static/             # Arquivos estáticos (CSS, JS, Imagens do sistema)
├── templates/          # Templates globais (base.html, navbar)
├── db.sqlite3          # Banco de dados local
├── manage.py           # Utilitário de linha de comando do Django
└── requirements.txt    # Lista de dependências do projeto
```

---

## 🤝 Contribuição

1.  Faça um Fork do projeto
2.  Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`)
3.  Faça o Commit (`git commit -m 'Adicionando nova feature'`)
4.  Faça o Push (`git push origin feature/MinhaFeature`)
5.  Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
    <small>Desenvolvido para LM Consultoria Imobiliária © 2026</small>
</div>

