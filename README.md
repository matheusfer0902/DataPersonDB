# Aplicação de Login e Cadastro

Esta aplicação é um sistema simples de login e cadastro de usuários, desenvolvido usando **React**, **Jest**, **Node.js**, **Axios**, **Express** e **MongoDB**. Após o login, os usuários podem visualizar suas informações pessoais.

## Tecnologias Utilizadas

- **React**: para a criação da interface do usuário.
- **Node.js**: para o backend da aplicação.
- **Express**: framework para o desenvolvimento do servidor.
- **MongoDB**: banco de dados NoSQL para armazenamento dos dados dos usuários.
- **Axios**: para fazer as requisições HTTP entre o front e o backend.
- **Jest**: utilizado para testes automatizados.

## Funcionalidades

- **Cadastro de Usuário**: Criação de novos usuários com validação dos campos.
- **Login**: Autenticação de usuários registrados.
- **Visualização de Informações Pessoais**: Após o login, os usuários podem ver seus dados cadastrados.
- **Testes Unitários**: Testes das funcionalidades principais usando Jest.

## Como Executar

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **MongoDB** (instância local ou MongoDB Atlas)
- **NPM** ou **Yarn**

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Acesse a pasta do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
    ```
    MONGO_URI=<sua-url-do-mongodb>
    JWT_SECRET=<sua-chave-secreta-jwt>
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```
    ou
    ```bash
    yarn start
    ```

6. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Testes

Para executar os testes unitários com Jest, use o comando:
```bash
npm test
