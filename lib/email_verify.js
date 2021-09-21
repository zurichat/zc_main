// Import the function that sends mail
const mailfunc = require('./emailer')

// Function that generates tokens
function getToken(length) {
  var randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var result = ''
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  }
  return result
}

// Initialize token value
let unique = getToken(50)

// Export the mail function to be called when user registers
// The url value should be obtained from req.get('host')'
// The mail function will return a unique token for each user that will be used in validation
module.exports.mail = (url, to) => {
  link = url + '/verify/' + unique
  html = '<a href=' + link + '>Click here to verify</a>'

  mailfunc(to, 'Please confirm your email account', html)
  return unique
}

// Export the verify function to be called when user clicks the link sent to his/her email
// If the function returns success the user has been verified and the route should handle what comes next
module.exports.verify = token => {
  if (token == unique) {
    return 'success'
  } else {
    return 'failed'
  }
}
