import { Knex } from 'knex';

// Migration para criar a tabela "Digimon"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('digimon', table => {
    table.increments('id').primary(); 
    table.string('name').notNullable(); 
    table.string('img').notNullable(); 
    table.integer('level').unsigned().notNullable() 
      .references('id').inTable('level');
  });
}

// Rollback migration para deletar a tabela "Digimon"
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('digimon');
}
