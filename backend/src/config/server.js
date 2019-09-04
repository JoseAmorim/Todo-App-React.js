const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.get('/', (req,res) => res.send('Hello World'))

server.listen(3333, () => console.log('Executando na porta 3333'))

module.exports = server