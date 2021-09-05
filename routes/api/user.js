const express = require('express')
const userRoute = express.Router()
<<<<<<< HEAD
const { register } = require('../../controllers/registrationController')
const { validateRegistration } = require('../../lib/authValidator')
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin } = require('../../controllers/loginController.js')

userRoute.post('/register', validateRegistration, register)
userRoute.post('/login', validateLogin, handleLogin)

=======
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
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
module.exports = userRoute
