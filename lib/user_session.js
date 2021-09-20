// const session = require('express-session')
const session = require('cookie-session')
const cookieParser = require('cookie-parser')

exports.startSession = app => {
  //if the Node app is behind a proxy (like Nginx), we will have to set proxy to true
  //app.set('trust proxy', 1)

  //session cookie lasts for 14 days
  const time = 1000 * 60 * 60 * 24 * 14

  //change secret, preferably store in some dotenv file
  const mySecret = "stop_amala_don't_be_a_hoodlum"

  // cookie parser middleware
  app.use(cookieParser())

  app.use(
    session({
      //   store: new MemcachedStore({
      //     hosts: ['127.0.0.1:3000'],
      //     secret: mySecret
      //   }),
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
