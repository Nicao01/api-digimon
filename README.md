# Digimon API

A API foi construída utilizando Node.js, Express, TypeScript, Sequelize como ORM e Knex.js para integração com banco de dados MySQL.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework para criação de servidores web.
- **Sequelize**: ORM para gerenciamento do banco de dados.
- **Knex.js**: Query builder para interações com o banco de dados.
- **MySQL**: Banco de dados escolhido.

## Configuração do ambiente

- Após clonar o projeto, rodar **npm install** na raiz do projeto para instalar as dependências necessárias
- Instalar o Sequelize:
    **npm i sequelize**
    **npm i @types/sequelize**
    **npm i mysql2**
- Configurar as variáveis de ambiente em um arquivo **.env** na raiz do projeto:
    DB_HOST=SEU_HOST
    DB_USER=SEU_USUÁRIO
    DB_PASS=SUA_SENHA(se tiver, caso não tenha, deixar em branco)
    DB_NAME=NOME_DO_BANCO
    PORT=PORTA_UTILIZADA (verão que no arquivo **server.ts** está a porta 3000 setada, caso vá utilizar outra, realizar alteração)
- No arquivo **Connection.ts**, a porta configurada está 3306 que é a padrão do MySQL, caso utilizar uma diferente, realizar alteração
- Após criar o banco de dados, configurar os arquivos necessários para a conexão com o banco (**Connection.ts e knexfile.ts**), rodar os seguintes comandos para as migrations e seeds:
    **npx knex migrate:latest**
    **npx knex seed:run**
- Iniciar servidor:
    **npm run dev**

Após seguir os passos, caso tudo ocorra como esperado, a seguinte mensagem irá aparecer após rodar **npm run dev**:
    Server is running on port SUA_PORTA
    Executing (default): SELECT 1+1 AS result
    Connection has been established successfully.

## Endpoints da API

- Caso deseja buscar todos os Digimons:
    - Método: GET
    - URL: `/api/digimon`
- Caso deseja buscar Digimon por ID:
    - Método: GET
    - URL: `/api/digimon/:id`
- Caso deseja buscar Digimon por Nome:
    - Método: GET
    - URL: `/api/digimon/name/:name`
- Caso deseja buscar Digimons por Nome do Level:
    - Método: GET
    - URL: `/api/level/title/:title`
- Caso deseja buscar Digimons por ID do Level:
    - Método: GET
    - URL: `/api/level/id/:id`