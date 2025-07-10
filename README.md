Descrição:

Recipes App é um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!
O projeto consiste em desenvolver um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.
O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.

Instalação:
Para a configuração do projeto, siga os seguintes passos:

    Clone o Repositório:

     git clone git@github.com:FabioRodriguesT/Projeto_Blogs_API.git
     cd blogs-api

    Instale as dependências:

     npm install

    Configure seu banco de dados com as migrações e modelos necessários:

     npm run prestart

Utilizando a API:

Você pode executar a API utilizando npm ou Docker.
Utilizando npm

Para executar a API, use o seguinte comando:

npm run dev

Você pode então acessar a API em http://localhost:3000 (ou utilizando sua porta específica).
Utilizando o Docker

    Construa e execute os contêineres do Docker:

   docker-compose up -d

    Acesse a API: Você pode acessar a API no caminho http://localhost:3000 (ou utilizando sua porta específica).

    Acesse o container usando:

docker exec -it blogs_api bash

Instruções de utilização do projeto:

    ⚠️ A maioria das rotas necessitam de um token gerado pela rota POST de /login para authenticação.

Gerando seu token:

Ao fazer uma requisição para a rota POST /login, com email e senha, será gerado um token para você. Exemplo:

{
 "email": "seuemail@exemplo.com",
 "password": "suasenha"
}

Ao realizar um login correto (como o exemplo), na rota, será retornado um token. Exemplo:

 {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5I WKGL4hcCVG8"
 }

Utilizando o token:

Com o seu token gerado, antes de fazer a requisição para qualquer rota, você deve utilizá-lo no header de sua requisição.

Crie uma variavel em sua rota chamanda de "Authorization".

Adicione o valor do seu token gerado na sua variavel Authorization, no formato de Bearer seu Token.

  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8

Assim, você está authenticado, permitindo a realização de requisições para todos os endpoints!
Rotas disponíveis:

    Rota 	Funcionalidade 	Tipo da Requisição
    /login 	Login na API com geração de token 	POST
    /user 	Cria um novo usuário 	POST
    /categories 	Cria uma nova categoria de Post 	POST
    /categories 	Lista todas as categorias 	GET
    /post 	Lista todos os posts 	GET
    /post/:id 	Lista o post com o id específico 	GET
    /post 	Cria um novo post 	POST
    /post/:id 	Edita um post com o id específico 	PUT
    /post/:id 	Exclui um post com o id específico 	DELETE
    /user 	Lista todos os usuários 	GET
    /user/:id 	Lista um usuário com id específico 	GET

Utilização:

Utilize algum aplicativo ou extensão do VSCode para realizar as requisições.

Exemplo: ThunderClient, Insomnia.
Dependências:

Este projeto utilizou os seguintes pacotes:
Dependências:

    express: Web framework for Node.js.
    express-async-errors: Middleware to handle async errors.
    joi: Data validation library.
    jsonwebtoken: For handling JWT authentication.
    mysql2: MySQL client for Node.js.
    sequelize: ORM for managing SQL databases.

Dependências de desenvolvimento:

    chai: Assertion library.
    chai-http: HTTP integration testing for Chai.
    change-case: Utilities for changing case of strings.
    eslint-config-trybe-backend: ESLint configuration.
    frisby: API testing framework.
    jest: JavaScript testing framework.
    mocha: Test framework.
    nodemon: Auto-restart for Node.js applications.
    nyc: Code coverage tool.
    sequelize-cli: CLI for Sequelize.
    sinon: Standalone test spies, stubs, and mocks.
    supertest: Testing HTTP servers.
    wait-on: Wait for a resource to be available.

Licença:

Este projeto é licenciado sob a Licença MIT. Boa codificação!




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
