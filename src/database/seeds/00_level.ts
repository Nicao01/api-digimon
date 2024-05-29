import { Knex } from 'knex';

// Seed para a tabela "Level"
export async function seed(knex: Knex): Promise<void> {
  await knex('level').del(); // Deleta todas as entradas

  // Inserção de níveis pre definidos 
  await knex('level').insert([
    { id: 1, title: 'Fresh' },
    { id: 2, title: 'In Training' },
    { id: 3, title: 'Rookie' },
    { id: 4, title: 'Champion' },
    { id: 5, title: 'Ultimate' },
    { id: 6, title: 'Mega' },
    { id: 7, title: 'Training' },
    { id: 8, title: 'Armor' }
  ]);
}
