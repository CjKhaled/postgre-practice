const db = require('../db/queries')

async function userListGet(req, res) {
    // nifty way to check if an object is empty
    if (JSON.stringify(req.query) == '{}') {
        const usernames = await db.getAllUsernames()
    } else {
        console.log(req.query)
    }
    
    res.send('Usernames: ' + usernames.map((name) => name.username).join(', '))
}

async function newUserGet(req, res) {
    res.render('new')
}

async function newUserPost(req, res) {
    const { username } = req.body
    await db.insertUsername(username)
    res.redirect('/')
}

module.exports = {
    userListGet,
    newUserGet,
    newUserPost
}