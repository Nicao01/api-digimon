import { Knex } from 'knex';

// Migration para criar a tabela "Level"
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('level', table => {
    table.increments('id').primary(); 
    table.string('title', 190).notNullable().unique(); 
  });
}

// Rollback da migration para deletar a tabela "Level"
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('level');
}
