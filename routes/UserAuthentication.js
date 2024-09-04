const express = require('express')

const Router = express.Router()

const Authenticate = require('../controller/Authenticate')
//Login route
Router.get('/', (req, res) => {
  res.render('Login', { title: 'Login' })
})
//Authenticate Route
Router.post('/', Authenticate)


module.exports= Router