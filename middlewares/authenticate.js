<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const { dummyDB } = require('../controllers/loginController');
=======
 review
=======
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
const jwt = require('jsonwebtoken')
const { dummyDB } = require('../controllers/loginController')
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234

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
<<<<<<< HEAD
      });
=======
const jwt = require('jsonwebtoken')
const { dummyDB } = require('../controllers/loginController')
=======
      })
<<<<<<< HEAD
=======
const jwt = require('jsonwebtoken');
const { dummyDB } = require('../controllers/loginController');
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234

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
<<<<<<< HEAD
      })
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
      });
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
=======
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
    }

    // findUser

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
 review
=======
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
    const user = dummyDB.find(x => x.id === payload.id)
    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized'
      })
<<<<<<< HEAD
=======
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
    const user = dummyDB.find((x) => x.id === payload.id);
    if(!user) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized'
      });
<<<<<<< HEAD
=======
    const user = dummyDB.find(x => x.id === payload.id)
    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized'
      })
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
=======
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
    }

    next()
  })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 7ebe876ca60572c629c347a7fecce9333f047269
=======
 review
}
=======
}
 main
>>>>>>> c1e958023d0207fbd2d7eeca049f7a66bc31d234
=======
}
>>>>>>> cd31f1ca8a6f76c450829ee975c4dd186c10cf51
