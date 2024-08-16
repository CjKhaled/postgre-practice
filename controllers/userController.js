const db = require('../db/queries')

async function userListGet(req, res) {
    let usernames;
    // nifty way to check if an object is empty
    if (JSON.stringify(req.query) == '{}') {
        usernames = await db.getAllUsernames()
    } else {
        usernames = await db.getUsernamesFromSearch(req.query.search)
        if (usernames.length == 0) {
            return res.send('No users found from search.')
        }
    }

    res.send('Usernames: ' + usernames.map((name) => name.username).join(', '))
}

async function deleteAllGet(req, res) {
    await db.deleteAllUsers();
    res.redirect('/')
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
    newUserPost,
    deleteAllGet
}