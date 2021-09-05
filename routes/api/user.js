const express = require('express')
const userRoute = express.Router()
<<<<<<< HEAD
<<<<<<< HEAD
const { register } = require('../../controllers/registrationController')
const { validateRegistration } = require('../../lib/authValidator')
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin } = require('../../controllers/loginController.js')

userRoute.post('/register', validateRegistration, register)
userRoute.post('/login', validateLogin, handleLogin)

=======
=======
 review
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
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
<<<<<<< HEAD
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
=======
const { register } = require('../../controllers/registrationController')
const { validateRegistration } = require('../../lib/authValidator')
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin } = require('../../controllers/loginController.js')

userRoute.post('/register', validateRegistration, register)
userRoute.post('/login', validateLogin, handleLogin)

 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
module.exports = userRoute
