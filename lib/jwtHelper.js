const jwt = require('jsonwebtoken')

const SignJwt = (id, secret, expires) => {
  return jwt.sign({ id }, secret, {
    expiresIn: expires
  })
}

module.exports.createJwt = (
  id,
  secret = 'HngNoBeBeansIswear',
  expires = '7d'
) => {
  const token = SignJwt(id, secret, expires)
  return token
}
