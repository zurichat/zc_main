const express = require('express')
const getSession = express.Router()

getSession.get('/session/test', (req, res) => {
  req.session.trial = 'faith'
  //res.send('hello world');
  res.json(req.session)
  console.log(req.session)
})
module.exports = getSession
