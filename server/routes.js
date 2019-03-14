const express = require('express')
const routes = express.Router()
const path = require('path')
const fetch = require('node-fetch')
const API_URL_SWANSON = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
/*
routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})
*/

routes.get('/', async (req, res) => {
    try {
        const response = await fetch(API_URL_SWANSON)
        const data = await response.json()
        res.json(data)    
    } catch (error) {
        res.status(500)
        res.json(error)
        console.log('Shit!')
    }
    
})
routes.get('/other', (req, res) => {
    res.sendFile(path.join(__dirname, './public/other.html'))
})

module.exports = routes