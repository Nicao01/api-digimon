import { Router } from 'express';
import LevelController from '../../controllers/Level';

const router = Router();

// Define as rotas de busca por nível
router.get('/', LevelController.getAllLevels); // Busca todos os níveis
router.get('/:id', LevelController.getLevelById); // Busca um nível por ID
router.get('/title/:title', LevelController.findDigimonsByLevelName); // Busca todos os digimons que possuêm um determinado nível através do nome do nível
router.get('/id/:id', LevelController.findDigimonsByLevelId); // Busca todos os digimons que possuêm um determinado nível através do ID do nível

export default router;
