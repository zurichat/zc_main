const { createJwt } = require('../lib/jwtHelper.js')

// Dummy database
const dummyDB = [
  {
    id: 1,
    fullname: 'Mark Essien',
    firstname: 'Mark',
    lastname: 'Essien',
    email: 'markessien@gmail.com',
    password: 'Testpwd11@@',
    verified: false,
    profileImageUrl:
      'https://techpoint.africa/wp-content/uploads/2020/01/mark-essien-e1580122566517.jpg',
    status: 'Hi, I am new here',
    phoneNumber: '',
    occupation: 'CEO',
    bio: 'CEOing',
    facebookUrl: '',
    twitterUrl: 'https://twitter.com/markessien?t=2nvvnl2hKj5563cEDk-vrA&s=09'
  }
]

module.exports.dummyDB = dummyDB

const controllers = () => {
  const handleLogin = (req, res) => {
    const { email, password } = req.body
    // find user in db
    const user = dummyDB.find(x => x.email === email)
    if (!user) {
      return res.status(401).json({
        status: false,
        message: 'invalid username or password'
      })
    }

    // compare passwords
    if (user && user.password !== password) {
      return res.status(401).json({
        status: false,
        message: 'invalid username or password'
      })
    }

    // generate the tokens
    const token = createJwt(user.id)

    // delete password from user object
    const userCopy = { ...user }
    delete userCopy.password

    // send response back to user
    return res.status(200).json({
      status: true,
      message: 'login sucessful',
      data: {
        token,
        userCopy
      }
    })
  }
  const login = (_, res) => {
    const user = dummyDB[0]
    const token = createJwt(user.id)
    const userCopy = { ...user }
    delete userCopy.password
    return res.status(200).json({
      status: true,
      message: 'login sucessful',
      data: {
        token,
        user: userCopy
      }
    })
  }

  return {
    handleLogin,
    login
  }
}

module.exports = controllers()
