const express = require('express')
const router = express.Router()
const port = process.env.port || 1990

//httpm://localhost:1990/movies
router.get('/', (req, res)=>
{
    res.send('This is working')
})

module.exports = router