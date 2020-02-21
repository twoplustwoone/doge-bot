const databaseUrl = process.env.DATABASE_URL

const startOfUser = databaseUrl.indexOf('//') + 2
const endOfUser = databaseUrl.indexOf(':', startOfUser)
const user = databaseUrl.substring(startOfUser, endOfUser)

const startOfPassword = endOfUser + 1
const endOfPassword = databaseUrl.indexOf('@')
const password = databaseUrl.substring(startOfPassword, endOfPassword)

const startOfHost = endOfPassword + 1
const endOfHost = databaseUrl.indexOf(':', startOfHost)
const host = databaseUrl.substring(startOfHost, endOfHost)

const startOfDatabase = databaseUrl.indexOf('/', endOfHost) + 1
const endOfDatabase = databaseUrl.length
const database = databaseUrl.substring(startOfDatabase, endOfDatabase)

const db = require('knex')({
  client: 'pg',
  connection: { host, user, password, database, ssl: true }
});

module.exports = db;
