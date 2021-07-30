var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'mysql-service',
      user : 'root',
      password : 'jayaswara',
      database : 'nodejs'
    }
  });
  module.exports=knex;