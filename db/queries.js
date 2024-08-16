const pool = require('./pool')

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames")
    return rows
}

async function getUsernamesFromSearch(search) {
    // case-insensitive
    const { rows } = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1", [`%${search}%`])
    return rows
}

async function deleteAllUsers() {
    await pool.query("DELETE FROM usernames")
}

async function insertUsername(username) {
    // prevent SQL injections using query parameterization
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username])
}

module.exports = {
    getAllUsernames, insertUsername, getUsernamesFromSearch, deleteAllUsers
}