const port = 3030;

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const AllowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(AllowCors)

server.listen(port, function() {
  console.log(`BACKEND in running on port ${port}.`)
})

module.exports = server