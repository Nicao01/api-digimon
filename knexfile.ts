import path from 'path';
import { Knex } from 'knex';
import * as dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do knex para o MySQL
const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'), // Caminho para as migrations
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'), // Caminho para as seeds
  },
};

export default config;
