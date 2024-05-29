import { Request, Response } from 'express';
import Digimon from '../models/Digimon';
import Level from '../models/Level';

class DigimonController {
  // Busca por todos os digimons 
  static async getAllDigimons(req: Request, res: Response) {
    try {
      const digimons = await Digimon.findAll({ include: Level });
      res.json(digimons);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch digimons' });
    }
  }

  // Busca por digimon através do id
  static async getDigimonById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const digimon = await Digimon.findByPk(id, { include: Level });
      if (digimon) {
        res.json(digimon);
      } else {
        res.status(404).json({ error: 'Digimon not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch digimon' });
    }
  }

  // Busca por digimon através do seu nome
  static async getDigimonByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const digimon = await Digimon.findOne({ where: { name }, include: Level });
      if (digimon) {
        res.json(digimon);
      } else {
        res.status(404).json({ error: 'Digimon not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch digimon' });
    }
  }
}

export default DigimonController;
