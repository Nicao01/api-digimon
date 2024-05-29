import { Request, Response } from 'express';
import Level from '../models/Level';
import Digimon from '../models/Digimon';

class LevelController {
  // Busca todos os níveis
  static async getAllLevels(req: Request, res: Response) {
    try {
      const levels = await Level.findAll();
      res.json(levels);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch levels' });
    }
  }

  // Busca nível por ID
  static async getLevelById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const level = await Level.findByPk(id);
      if (level) {
        res.json(level);
      } else {
        res.status(404).json({ error: 'Level not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch level' });
    }
  }

  // Busca todos os digimons associados a um nível utilizando o id do nível
  static async findDigimonsByLevelName(req: Request, res: Response) {
    try {
      const { title } = req.params;
      const levelData = await Level.findOne({ where: { title } });
      if (!levelData) {
        return res.status(404).json({ error: 'Level not found' });
      }

      const digimons = await Digimon.findAll({ where: { level: levelData.id } });
      res.json(digimons);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch digimons by level name' });
    }
  }

  // Busca todos os digimons associados a um nível utilizando o nome do nível
  static async findDigimonsByLevelId(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10); 
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid level ID' });
      }

      const levelData = await Level.findOne({ where: { id } });
      if (!levelData) {
        return res.status(404).json({ error: 'Level not found' });
      }

      const digimons = await Digimon.findAll({ where: { level: id } });
      res.json(digimons);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch digimons by level id' });
    }
  }
}

export default LevelController;
