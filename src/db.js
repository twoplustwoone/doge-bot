const db = require('knex')({
  client: 'pg',
  connection: {
  host : process.env.DATABASE_HOST,
  user : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_DATABASE,
  ssl: true
  }
});

module.exports = db;
