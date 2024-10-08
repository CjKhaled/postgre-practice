const express = require('express')
const app = express()
require('dotenv').config()
const userRouter = require('./routes/userRouter')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use('/', userRouter)
app.listen(3000)