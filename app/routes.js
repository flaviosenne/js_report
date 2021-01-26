const routes = require('express').Router()

const BookController = require('./src/controllers/book')

routes.get('/',BookController.get)

module.exports =routes