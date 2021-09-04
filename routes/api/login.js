const router = require('express').Router()
const { validateLogin } = require('../../lib/authValidator')
const { handleLogin } = require('../../controllers/loginController.js')

const routes = () => {

  router.route('/login')
    .post(validateLogin, handleLogin)

  return router
}