//step 1 import express and create port
const express = require('express')
const server = express()
const port = process.env.port || 1990

server.get('/', (req, res)=>
{
    res.json({message: 'It is working'})
})
server.listen(port, ()=> console.log(`Server is listening in room ${port}`))