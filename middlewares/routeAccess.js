const express = require('express')
const restrictToTest = express.Router()

class AppError extends Error {
  constructor(message, statusCode) {
    super(message)

    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

//This can be attached to any route
//This controller can also be imported from 'lib' folder.
exports.restrictToMain = (...roles) => {
  return (req, res, next) => {
    //roles ['admin', 'staff'], role ='user'
    // console.log(req.User.role);
    if (!roles.includes(req.User.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      )
    }

    next()
  }
}

//For testing purpose
restrictToTest.route('/test/route-access-controller').get((req, res, next) => {
  const ra = (...roles) => {
    //roles ['admin', 'lead-guide'], role ='user'
    // console.log(roles);
    let role = 'admin, user'
    if (!roles.includes(role)) {
      res.json({
        403: 'You do not have permission to perform this action,The action might be limited to certain  users or You are a site visitor, login to gain access'
      })
    }
  }

  ra('visitor')
})

//this exports the test controller
module.exports = restrictToTest
