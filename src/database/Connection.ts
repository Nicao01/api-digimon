import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

// Carrega as variáveis de ambiente setadas no arquivo .env
dotenv.config();

// Configuração do banco com as variáveis
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPass = process.env.DB_PASS as string;
const dbHost = process.env.DB_HOST as string;

// Inicia o Sequelize
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'mysql',
  port: 3306,
});

// Teste de conexão com o banco
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
