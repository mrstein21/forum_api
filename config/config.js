var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'mysqldb',
      user : 'root',
      password : 'jayaswara',
      database : 'nodejs'
    }
  });
  module.exports=knex;