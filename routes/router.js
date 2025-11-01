const express = require('express')
const router = express.Router()

//http://localhost:3001
router.get('/', (req, res)=>
{
   // res.send('it is working...')
    //this displays the home page
    res.render('pages/home', 
    {
        title: "LaTorya's Movies App",
        name: "LaTorya's Movies App"
    })
})

router.use('/movies', require('./api/moviesRoutes'))

//error handling
router.use((req, res, next)=> 
{
    res.status(404).send('404 Error. This page does not exist')
})

module.exports = router