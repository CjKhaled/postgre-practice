const { Pool } = require('pg')
const path = require('path')
console.log('these are env variables from pool.js')
console.log(process.env.DB_USER)
console.log(process.env.DB_HOST)
console.log(process.env.PORT)
console.log(process.env.PASSWORD)
console.log(process.env.DATABASE)


// a pool is a number of clients we hold connections to
module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DATABASE}`
})