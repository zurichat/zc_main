<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const { dummyDB } = require('../controllers/loginController');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  
  if(!authorization) {
    return res.status(401).json({
      status: false,
      message: 'missing authorization'
    });
  }

  const token = authorization.split(' ')[1];

  if(!token) {
    return res.status(401).json({
      status: false,
      message: 'missing or invalid token'
    });
  }

  jwt.verify(token, 'HngNoBeBeansIswear', (err, payload) => {
    if(err) {
      return res.status(401).json({
        status: false,
        message: 'invalid token'
      });
=======
const jwt = require('jsonwebtoken')
const { dummyDB } = require('../controllers/loginController')

module.exports = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      status: false,
      message: 'missing authorization'
    })
  }

  const token = authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      status: false,
      message: 'missing or invalid token'
    })
  }

  jwt.verify(token, 'HngNoBeBeansIswear', (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: false,
        message: 'invalid token'
      })
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
    }

    // findUser

<<<<<<< HEAD
    const user = dummyDB.find((x) => x.id === payload.id);
    if(!user) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized'
      });
=======
    const user = dummyDB.find(x => x.id === payload.id)
    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized'
      })
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
    }

    next()
  })
<<<<<<< HEAD
}
=======
}
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
