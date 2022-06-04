const cors = require('cors')
const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser')

const app = express()
const PORT = 8080

app.use(express.static('public'))

app.get('/', (req,res) => {
    
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/rand', (req,res) => {
    let rand = Math.ceil(Math.random() * 25)
    res.sendFile(__dirname + `/public/momo-${rand}.jpg`)
})

app.listen(PORT, () => console.log(`Running on port ${PORT}. Better go catch it 😉`));