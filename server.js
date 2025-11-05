//import express and create port
const express = require('express')
const server = express()
const port = process.env.port || 1990

//step 2 import router and use routes
const router = require('./routes/router')
server.use('/', router)

//set view engine
server.set('view engine', 'ejs')

//step 1 build server and listen at port
server.listen(port, ()=> console.log(`Server is listening at http://localhost:${port}`))