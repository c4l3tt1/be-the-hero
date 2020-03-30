const knex = require('knex');
const configuration = require('../../knexfile');


//dentro do knexfile existem diversas conexões. Aqui chamaos a development que setamos para o desenvolvimento da aplicação.
const connection = knex(configuration.development);


module.exports = connection;





