const express = require('express')
const getSession = express.Router()

getSession.get('/session/test', (req, res) => {
  //set a test cookie to persist dummy user data
  res.cookie(`userID`, `124D2345#6T67`)

  res.json({
    status: 200,
    session: req.session,
    cookies: req.cookies
  })
  //console.log(req.session)
})
module.exports = getSession
