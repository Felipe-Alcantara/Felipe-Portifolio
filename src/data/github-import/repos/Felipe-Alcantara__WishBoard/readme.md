# Trazer-Wishlist

## Visão Geral

O **Trazer-Wishlist** é uma aplicação web desenvolvida para gerenciar listas de desejos (wishlists). A aplicação permite criar, visualizar, editar e excluir itens de uma wishlist, além de exportar os dados em diferentes formatos, como Markdown, Excel e imagem. O projeto utiliza uma stack tecnológica moderna e eficiente:

- **Backend**: Python 3.13+, Django, Django REST Framework
- **Banco de Dados**: SQLite
- **Frontend**: HTML, CSS, JavaScript

A interface é apresentada em formato Kanban, proporcionando uma experiência visual e intuitiva para o gerenciamento das listas.

---

## Estrutura de Pastas e Arquivos

### Arquivos e Pastas Principais

- **`manage.py`**: Arquivo principal para gerenciar comandos do Django, como iniciar o servidor, aplicar migrações e criar superusuários.

- **`wishlist_project/`**: Contém os arquivos de configuração do projeto Django:
  - `settings.py`: Configurações globais do projeto, como banco de dados, apps instalados e configurações de middleware.
  - `urls.py`: Define as rotas principais do projeto.
  - `wsgi.py`: Configuração para o servidor WSGI, usado em deploys de produção.

- **`wishlist/`**: Diretório principal da aplicação:
  - `models.py`: Define os modelos de dados usados no projeto.
  - `serializers.py`: Configura os serializers para transformar os modelos em JSON para a API.
  - `views.py`: Contém as funções e classes que controlam a lógica da aplicação.
  - `urls.py`: Define as rotas específicas da API.

- **`templates/`**: Armazena os arquivos HTML usados no frontend.

- **`static/`**: Contém os assets estáticos, como arquivos CSS e JavaScript.

- **`requirements.txt`**: Lista todas as dependências do projeto para instalação.

- **`README.md`**: Documentação do projeto.

---

## Endpoints e Funcionalidades

### Operações CRUD da API

- **GET /api/wishlist/**: Retorna todos os itens da wishlist.
- **POST /api/wishlist/**: Adiciona um novo item à wishlist.
- **PUT /api/wishlist/<id>/**: Atualiza um item existente.
- **DELETE /api/wishlist/<id>/**: Remove um item da wishlist.

### Endpoint Customizado

- **GET /api/wishlist/export/markdown/**: Gera a lista de desejos em formato Markdown.

### Integração com o Frontend

O frontend consome os endpoints da API para exibir os dados em formato Kanban, permitindo interações dinâmicas com a interface.

---

## Instruções de Instalação

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd Trazer-Wishlist
   ```

2. **Crie e ative o ambiente virtual**:
   - No Windows:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - No Linux/Mac:
     ```bash
     python -m venv venv
     source venv/bin/activate
     ```

3. **Instale as dependências**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure o banco de dados**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Crie um superusuário (opcional)**:
   ```bash
   python manage.py createsuperuser
   ```

6. **Inicie o servidor**:
   ```bash
   python manage.py runserver
   ```

7. **Acesse a aplicação**:
   - Frontend: [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - Admin: [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)

---

## Possíveis Erros e Soluções

1. **Erro de módulo não encontrado**:
   - Mensagem: `ModuleNotFoundError: No module named 'rest_framework'`
   - Solução: Execute `pip install -r requirements.txt` para instalar as dependências.

2. **Aviso sobre `DEFAULT_AUTO_FIELD`**:
   - Mensagem: `WARNINGS: wishlist.Wishlist: (models.W042)`
   - Solução: Adicione `DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'` no `settings.py`.

3. **Erro ao aplicar migrações**:
   - Mensagem: `django.db.utils.OperationalError: no such table`
   - Solução: Certifique-se de executar `python manage.py migrate` antes de iniciar o servidor.

---

## Próximos Passos

- **Exportação para Excel**: Implementar a funcionalidade de exportar a wishlist para um arquivo Excel.
- **Geração de Imagem**: Adicionar a opção de gerar uma imagem da interface Kanban.
- **Melhorias na Interface**: Tornar a interface mais responsiva e amigável.
- **Autenticação de Usuários**: Adicionar login e registro para gerenciar wishlists individuais.

---

Com essas informações, você terá uma visão completa do projeto e poderá configurá-lo e expandi-lo facilmente!

---

COMO INICIAR O PROJETO WISHLIST

1. ATIVAR O AMBIENTE VIRTUAL:
   - No Windows:
     venv\Scripts\activate
   - No Linux/Mac:
     source venv/bin/activate

2. INSTALAR DEPENDÊNCIAS (se ainda não instaladas):
   - Comando:
     pip install -r requirements.txt

3. CONFIGURAR O BANCO DE DADOS:
   - Criar as migrações:
     python manage.py makemigrations
   - Aplicar as migrações:
     python manage.py migrate

4. CRIAR SUPER USUÁRIO (opcional, para acessar o admin):
   - Comando:
     python manage.py createsuperuser

5. INICIAR O SERVIDOR:
   - Comando:
     python manage.py runserver

6. ACESSAR O PROJETO:
   - No navegador, abra:
     http://127.0.0.1:8000
   - Para acessar o admin (se criou superusuário):
     http://127.0.0.1:8000/admin

NOTAS:
- O banco de dados usado é SQLite, já configurado no projeto.
- O projeto está configurado para desenvolvimento local.
- A porta padrão do servidor é 8000.
