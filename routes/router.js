//import express and set up .Router()
const express = require('express')
const router = express.Router()

//http://localhost:1990
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
//this makes the other Routes do the work by telling the main router to use this router for all request. the require part of the code imports a module located at the api, which is exported by express.
const endpoints = 
[
    'animation',
    'classic',
    'comedy',
    'drama',
    'horror',
    'family',
    'mystery'
]

endpoints.forEach(endpoint =>
{
    router.use(`/${endpoint}`, require(`./api/${endpoint}Routes`))
})
// router.use('/animation', require('./api/animationRoutes'))
// router.use('/classic', require('./api/classicRoutes'))
// router.use('/comedy', require('./api/comedyRoutes'))
// router.use('/drama', require('./api/dramaRoutes'))
// router.use('/horror', require('./api/horrorRoutes'))
// router.use('/family', require('./api/familyRoutes'))
// router.use('/mystery', require('./api/mysteryRoutes'))

//error handling
router.use((req, res, next)=> 
{
    res.status(404).send('<h1>404 Error. This page does not exist</h>')
})

module.exports = router