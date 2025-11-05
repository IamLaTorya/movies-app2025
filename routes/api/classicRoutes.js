//this routes only works with classic movies
const router = require('express').Router()
const axios = require('axios')

//httpm://localhost:1990/classic
router.get('/', (req, res)=>
{
    //res.send('This is working')
    const url = 'https://api.sampleapis.com/movies/classic'

    axios.get(url)//fetch call
        .then(resp => 
        {
            res.render('pages/movies',
                {
                    title: 'Classic',
                    name: 'Classic',
                    data: resp.data,
                    endpoint: 'classic'//once the lik is click this sends the movie to it's own page.
                })
        })
})

//single page
router.get('/:id', (req, res)=>
{
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/classic/${id}`//this passes the id of each individual movie

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