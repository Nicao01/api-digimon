import { Request, Response } from 'express';
import Digimon from '../models/Digimon';

class IndexController {
  // Handler da rota raiz para busca dos digimons
  async index(req: Request, res: Response) {
    try {
      console.log('Attempting to fetch digimons from the database...');
      const digimons = await Digimon.findAll();
      console.log('Digimons fetched successfully:', digimons);

      return res.json({ status: true, data: digimons });
    } catch (error) {
      console.error('Error querying the database:', error);
      return res.status(500).json({ status: false, message: 'Error querying the database' });
    }
  }
}

export default IndexController;
