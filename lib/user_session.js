const redis = require('redis')
const session = require('express-session')
//let RedisStore = require('connect-redis')(session)
//let redisClient = redis.createClient()
const MemcachedStore = require('connect-memcached')(session)

exports.startSession = app => {
  //if the Node app is behind a proxy (like Nginx), we will have to set proxy to true
  //app.set('trust proxy', 1)

  //session cookie lasts for 14 days
  const time = 1000 * 60 * 60 * 24 * 14

  //change secret, preferably store in some dotenv file
  const mySecret = "stop_amala_don't_be_a_hoodlum"

  app.use(
    session({
      //store: new RedisStore({ client: redisClient }), new MemcachedStore({
      store: new MemcachedStore({
        hosts: ['127.0.0.1:11211'],
        secret: mySecret
      }),
      secret: mySecret,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: true,
        //sameSite: true,
        maxAge: time
      },
      resave: false
    })
  )
}

exports.readSession = (req, res) => {
  req.session.trial = 'faith'
  console.log(req.session)
  res.json(req.session)
}
