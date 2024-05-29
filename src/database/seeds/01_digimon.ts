import { Knex } from 'knex';
import digimons from '../../data/digimon.json';

// Seed para a tabela "Digimon"
export async function seed(knex: Knex): Promise<void> {
  await knex('digimon').del(); // Deleta todas as entradas

  // Fetch de todos os níveis na tabela "Level"
  const levels = await knex('level').select('id', 'title');
  const levelMap = levels.reduce((acc, level) => {
    acc[level.title] = level.id;
    return acc;
  }, {});

  // Insere dados do digimon com seu id correspondente
  await knex('digimon').insert(digimons.map(digimon => {
    const levelId = levelMap[digimon.level];
    if (!levelId) {
      throw new Error(`No level found for ${digimon.level}`);
    }
    return {
      name: digimon.name,
      img: digimon.img,
      level: levelId
    };
  }));
}
