const express = require('express')
const getSession = express.Router()

getSession.get('/session/test', (req, res) => {
  //set a test cookie to persist dummy user data
<<<<<<< HEAD
  res.cookie(`userID`, `124D2345#6T67`)
=======
  res.cookie(`userID`,`124D2345#6T67`);
>>>>>>> f6694cf8dc484c982593d7a5456cf863b2765aa9

  res.json({
    status: 200,
    session: req.session,
    cookies: req.cookies
  })
  //console.log(req.session)
})
module.exports = getSession
