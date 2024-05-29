import { Router } from 'express';
import IndexController from '../../controllers/Index';

const router = Router();
const indexController = new IndexController();

// Define a rota da página de index
router.get('/', indexController.index); // Busca todos os dados do index

export default router;
