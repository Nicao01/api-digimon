import { Router } from 'express';
import DigimonController from '../../controllers/Digimons';

const router = Router();

// Define as rotas para buscas associadas a Digimons
router.get('/', DigimonController.getAllDigimons); // Busca todos os digimons
router.get('/:id', DigimonController.getDigimonById); // Busca digimon por ID
router.get('/name/:name', DigimonController.getDigimonByName); // Busca digimon por nome

export default router;
