const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes')

app.use(morgan('tiny'))
app.use(bodyParser.json())
//app.use(express.static('public'))
app.use(routes)

app.listen(port, () => {
    console.log(`Slušam port ${port}`);
    
})