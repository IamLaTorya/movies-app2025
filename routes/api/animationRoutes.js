//this routes only works with animation movies
const router = require('express').Router()
const axios = require('axios')

//httpm://localhost:1990/animation
router.get('/', (req, res)=>
{
    //res.send('This is working')
    const url = 'https://api.sampleapis.com/movies/animation'

    axios.get(url)
        .then(resp => 
        {
            res.render('pages/movies',
                {
                    title: 'Animations',
                    name: 'Animations',
                    data: resp.data,
                    endpoint: 'animation'//once the lik is click this sends the movie to it's own page.
                })
        })
})

//single page
router.get('/:id', (req, res)=>
{
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/animation/${id}`//this passes the id of each individual movie

    axios.get(url)//fetch call
        .then(resp =>
            //console.log(resp)
        {
            res.render('pages/singleMovie',
        {
            title: resp.data.title,
            name: resp.data.title,
            img: resp.data.posterURL,
            imdbLink: resp.data.imdbId,
        })
    })
})

module.exports = router