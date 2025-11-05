//this routes only works with family movies
const router = require('express').Router()
const axios = require('axios')

//httpm://localhost:1990/family
router.get('/', (req, res)=>
{
    //res.send('This is working')
    const url = 'https://api.sampleapis.com/movies/family'

    axios.get(url)//fetch call
        .then(resp => 
        {
            res.render('pages/movies',
                {
                    title: 'Family',
                    name: 'Family',
                    data: resp.data,
                    endpoint: 'family'//once the lik is click this sends the movie to it's own page.
                })
        })
})

//single page
router.get('/:id', (req, res)=>
{
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/family/${id}`//this passes the id of each individual movie

    axios.get(url)
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