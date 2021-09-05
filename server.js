const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const device = require('express-device')
const useragent = require('express-useragent')
const sessions = require('./lib/user_session')
const logoutRoute = require('./lib/logout')
const cors = require('cors')
const loadFrontend = require('./middlewares/load-frontend')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

// activate helmet--server security
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)
app.set('x-powered-by', false)

//load the session middleware
sessions.startSession(app)

// Retrieve device information for logging purposes.
app.use(device.capture())
app.use(useragent.express())

app.use(logoutRoute)
routes(app)
loadFrontend(app)

app.listen(PORT, () => {
  console.log(
    `Server Started on Port: ${PORT}\nMode: ${process.env.NODE_ENV}\nURI: http://127.0.0.1:${PORT}`
  )
})
