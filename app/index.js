const express = require('express')
const bodyParser = require('body-parser')
const configs = require('../config/nodejs')

// creating app instance
const app = new express()
const { name, port } = configs

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// Map routes
app.get('/', (request, response) => {
  response.setHeader('Content-Type', 'application/json')
  response.send('Hello, world!')
})

// Listen
app.listen(port, () => {
  console.log(`${name} is running on port ${port}`)
})
