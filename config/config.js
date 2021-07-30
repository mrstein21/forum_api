var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'jayaswara',
      database : 'nodejs'
    }
  });
  module.exports=knex;