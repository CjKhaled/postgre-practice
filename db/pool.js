const { Pool } = require('pg')
const path = require('path')


// a pool is a number of clients we hold connections to
module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DATABASE}`
})