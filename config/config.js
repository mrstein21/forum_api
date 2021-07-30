var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      port : '3307',
      password : 'jayaswara',
      database : 'nodejs'
    }
  });
  module.exports=knex;