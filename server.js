//step 1 import express and create port
const express = require('express')
const server = express()
const router = require('./routes/router')
const port = process.env.port || 1990

server.use('/', router)
server.set('view engine', 'ejs')

//step 2 listen
server.listen(port, ()=> console.log(`Server is listening at http://localhost:${port}`))