const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('/', controller.userListGet)
router.get('/new', controller.newUserGet)

router.post('/new', controller.newUserPost)


module.exports = router