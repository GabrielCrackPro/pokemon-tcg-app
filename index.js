const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')
const { response } = require('express')

const public = express.static('public')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(public)

const API_URL = 'https://api.pokemontcg.io/v2'
/*
const cards = axios.get(API_URL + '/cards',)
    .then((response) => {
        console.log(response.data.data)
    })
    .catch((error) => {
        console.log(error)
    })
    */
axios.get(API_URL + '/cards')
    .then((response) => {
        console.log(response.data.data[0].images)
    })
    .catch((error) => {
        console.log(error)
    })
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

const cards = import(`${__dirname}/public/cards/cards`)
console.log(cards)