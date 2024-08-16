const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')

require('dotenv').config()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', userRouter)
app.listen(3000)