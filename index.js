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

const API_URL = 'https://api.pokemontcg.io/v2/'
const SETS_URL = 'https://api.pokemontcg.io/v2/sets'
const CARDS_URL = 'https://api.pokemontcg.io/v2/cards'

const sets = []
//SETS REQUEST

const setsNumber = 87
axios.get(SETS_URL)
    .then((response) => {
        for (let i = 0; i <= setsNumber; i++) {
            sets.push(response.data.data[i])
        }
        console.log(sets)
    })
    .catch((error) => {
        console.log(error)
    })
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})