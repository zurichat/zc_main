const express = require('express')
const userRoute = express.Router()
const {
  register,
  handleRegister
} = require('../../controllers/registrationController')
const { validateRegistration } = require('../../lib/authValidator')
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin, login } = require('../../controllers/loginController.js')

userRoute.post('/register', validateRegistration, register)
userRoute.post('/login', validateLogin, handleLogin)
userRoute.get('/register', handleRegister)
userRoute.get('/login', login)
module.exports = userRoute
