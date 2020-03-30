//o método "UP" é responsável pela criação da table (o que vai acontecer quando eu executar essa migration)
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

  })
};


//o metodo "DOWN" é responsável por desfazer coisas caso dê algum erro
exports.down = function(knex) {
 return  knex.schema.dropTable('ongs');
};
