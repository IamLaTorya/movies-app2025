//this routes only works with horror movies
const router = require('express').Router()
const axios = require('axios')

//httpm://localhost:1990/horror
router.get('/', (req, res)=>
{
    //res.send('This is working')
    const url = 'https://api.sampleapis.com/movies/horror'

    axios.get(url)//fetch call
        .then(resp => 
        {
            res.render('pages/movies',
                {
                    title: 'Horror',
                    name: 'Horror',
                    data: resp.data,
                    endpoint: 'horror'//once the lik is click this sends the movie to it's own page.
                })
        })
})

//single page
router.get('/:id', (req, res)=>
{
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/horror/${id}`//this passes the id of each individual movie

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