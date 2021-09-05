const express = require('express')
const route = express.Router()

route.get('/logout', (req, res) => {
  res.redirect('/login')
})

module.exports = route
