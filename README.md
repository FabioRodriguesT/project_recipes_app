## Descrição:

**Recipes App** é um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!
O projeto consiste em desenvolver um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.
O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.

## API Consumida

Este projeto consome duas APIs externas para obter dados de refeições e coquetéis:

- [TheMealDB](https://www.themealdb.com/api.php)
- [TheCocktailDB](https://www.thecocktaildb.com/api.php)

### Endpoints utilizados

#### TheMealDB

- `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`: Busca por refeições pelo nome.
- `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`: Filtre as refeições por ingredientes.
- `https://www.themealdb.com/api/json/v1/1/search.php?f={firstLetter}`: Filtre as refeições pela primeira letra.
- `https://www.themealdb.com/api/json/v1/1/list.php?c=list`: Busca todas as categorias de refeições.
- `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`: Filtre as refeições pela categoria. 
- `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`: Obtém detalhes de uma refeição pelo ID.

#### TheCocktailDB

- `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`: Busca por coquetéis pelo nome.
- `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingredient}`: Filtre os coquetéis por ingredientes.
- `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={firstLetter}`: Filtre os coquetéis pela primeira letra.
- `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`: Busca todas as categorias de coquetéis.
- `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}`: Filtre os coquetéis pela categoria.
- `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}`: Obtém detalhes de um coquetel pelo ID.

### 🛠️ Como utilizar

1. Substitua `{nome}` ou `{id}` pelos parâmetros desejados.
2. Faça uma requisição GET para o endpoint correspondente.
3. Utilize os dados retornados para exibir as informações na interface do usuário.:contentReference[oaicite:23]{index=23}

### ⚠️ Observações

- As respostas das APIs são em formato JSON.
- Não é necessário autenticação para utilizar os endpoints mencionados.
- Considere implementar tratamento de erros para lidar com possíveis falhas nas requisições.:contentReference[oaicite:30]{index=30}

Para mais detalhes sobre os endpoints e parâmetros disponíveis, consulte a documentação oficial de cada API.:contentReference[oaicite:33]{index=33}

---

Esta abordagem fornece informações claras sobre os endpoints consumidos, facilitando a compreensão e utilização do projeto por outros desenvolvedores.:contentReference[oaicite:36]{index=36}
::contentReference[oaicite:37]{index=37}

Sobre o projeto:

O que foi desenvolvido:

Foi desenvolvido, um projeto que simula um aplicatio de receitas, onde é possivel visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks.

O layout do app foi feito de acordo com o link do figma abaixo.
Figma: https://www.figma.com/design/nfmbY2U28bs1GnW3wysCzA/-Projeto--Frontend--Recipes-App---Personal-Project?node-id=0-1&p=f&t=BCmGh5WMZNysf0oM-0
No app foram criadas 6 telas, são elas: Login, Receitas Realizadas, Receitas Favoritadas, Perfil, mais 4 telas, que variam entre dois tipos: Comidas e Bebida, sendo elas:
Lista de Todas as Receitas(Comidas), Lista de Todas as Receitas(Bebida), Detalhes da Receita Especificada por ID(Comida),
Detalhes da Receita Especificada por ID(Bebida), Receita em Andamento por ID(Comida), Receita em Andamento por ID(Bebida)

Desenvolvi um aplicativo de receitas que permite ao usuário visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o preparo de receitas e drinks.

O layout foi inspirado no protótipo do Figma: Figma - Projeto Frontend Recipes App.

O aplicativo conta com 6 telas principais:

    Login

    Receitas Realizadas

    Receitas Favoritas

    Perfil

    Lista de Todas as Receitas (Comidas)

    Lista de Todas as Receitas (Bebidas)

    Detalhes da Receita por ID (Comida)

    Detalhes da Receita por ID (Bebida)

    Receita em Andamento por ID (Comida)

    Receita em Andamento por ID (Bebida)
    GitHub+2GitHub+2FeaSeo+2
    pt.wikipedia.org+2EJCM+2pt.wikipedia.org+2
    Rex Top Leads+4pt.wikipedia.org+4EJCM+4

As telas de "Receita em Andamento" permitem ao usuário acompanhar o progresso da receita, marcando os ingredientes conforme são preparados. O estado é mantido mesmo após atualizar a página, utilizando o localStorage com a chave inProgressRecipes .
GitHub

O aplicativo consome as APIs públicas do TheMealDB e TheCocktailDB para obter dados de receitas e drinks.

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
