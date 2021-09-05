const { createJwt } = require('../lib/jwtHelper')
const { existingUser, extraData } = require('../data/dummyData')

exports.register = (req, res, _) => {
  const { email, fullName } = req.body
  //simulate a database check for existing user
  if (email === existingUser.email) {
    return res.status(409).json({
      status: false,
      reason: `${email} is already been taken, why not try ${email}331 or ${email}231`
    })
  }
  //Create a token for the user and cookie the user
  const token = createJwt(extraData.id)
  //send user data back to the user
  newData = {
    displayName: fullName,
    email: email
  }
  res.status(201).json({
    status: true,
    data: {
      user: { ...newData, ...extraData },
      token
    }
  })
}
