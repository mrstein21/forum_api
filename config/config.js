var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost:3307',
      user : 'root',
      password : 'jayaswara',
      database : 'nodejs'
    }
  });
  module.exports=knex;