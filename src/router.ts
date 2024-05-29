import { Router } from 'express';
import digimonRoutes from './routes/digimon';
import levelRoutes from './routes/level';

const router = Router();

// Setup das rotas
router.use('/digimon', digimonRoutes); // Rotas para busca relacionadas a digimons
router.use('/level', levelRoutes);     // Routes para buscas relacionadas a nível

export default router;
