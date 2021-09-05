const express = require('express')
const userRoute = express.Router()
 review
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
=======
const { register } = require('../../controllers/registrationController')
const { validateRegistration } = require('../../lib/authValidator')
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin } = require('../../controllers/loginController.js')

userRoute.post('/register', validateRegistration, register)
userRoute.post('/login', validateLogin, handleLogin)

 main
module.exports = userRoute
