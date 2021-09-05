const express = require('express')
const userRoute = express.Router()
const { register } = require('../../controllers/registrationController')
const { validateRegistration } = require('../../lib/authValidator')
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin } = require('../../controllers/loginController.js')

userRoute.post('/register', validateRegistration, register)
userRoute.post('/login', validateLogin, handleLogin)

module.exports = userRoute
