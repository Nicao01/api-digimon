import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import router from './router'; 
import * as dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware setup
app.use(helmet());               // Middleware de segurança que ajuda a proteger a aplicação definindo vários cabeçalhos HTTP
app.use(cors());                 // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(express.json());         // Middleware para permitir o parsing de JSON no corpo das requisições

// Rotas da API
app.use('/api', router);         // Usa um router principal para todas as rotas 

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
