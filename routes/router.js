const express = require('express')
const router = express.Router()

//http://localhost:3001
router.get('/', (req, res)=>
{
    res.send('it is working...')
})

router.use('/movies', require('./api/moviesRoutes'))

//error handling
router.use((req, res, next)=> 
{
    res.status(404).send('404 Error. This page does not exist')
})

module.exports = router