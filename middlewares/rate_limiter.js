// let express = require('express')
// let app = express()
// let client = require('redis').createClient()
// let limiter = require('express-limiter')(app, client)

// module.exports.limit_login_attempt = limiter({
//   //This module serves as a middleware to limit login attempts by users to help forestall bruteforcing
//   // Limit is 150 trials per hour

//   path: '/api/user_login',
//   method: 'post',
//   lookup: ['connection.remoteAddress'],
//   // 150 requests per hour
//   total: 150,
//   expire: 1000 * 60 * 60
// })
