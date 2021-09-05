const express = require('express')
const restrictToTest = express.Router()



//This can be attached to any route
//This controller can also be imported from 'lib' folder.


//For testing purpose
restrictToTest.get('/vik/route-access-controller',(req, res, next) => {
  const ra = (...roles) => {
   
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
