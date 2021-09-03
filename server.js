const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const loadFrontend = require('./middlewares/load-frontend')
const sessions = require('./lib/user_session')
const device = require('express-device')
const useragent = require('express-useragent')

const PORT = process.env.PORT || 3000

const app = express()

// activate helmet--server security
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)
app.set('x-powered-by', false)

<<<<<<< HEAD
<<<<<<< HEAD
=======
//load the session middleware
sessions.startSession(app)

>>>>>>> e6bb5d81 (ran prettier)
=======

//load the session middleware
sessions.startSession(app)

>>>>>>> f6694cf8dc484c982593d7a5456cf863b2765aa9
// Retrieve device information for logging purposes.
app.use(device.capture())
app.use(useragent.express())

routes(app)
loadFrontend(app)

app.listen(PORT, () => {
  console.log(
    `Server Started on Port: ${PORT}\nMode: ${process.env.NODE_ENV}\nURI: http://127.0.0.1:${PORT}`
  )
})
