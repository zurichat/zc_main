const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const device = require('express-device')
const useragent = require('express-useragent')
const sessions = require('./lib/user_session')
const mongoose = require('mongoose')

const loadFrontend = require('./middlewares/load-frontend')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

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

routes(app)
loadFrontend(app)

const URL = 'mongodb+srv://workspaces:workspaces@cluster0.bow5d.mongodb.net/workspaces?retryWrites=true&w=majority'
mongoose
    .connect(URL)
    .then(() => console.log('DB connection successful!!'))
    .catch(() => console.log('ERROR: DB connection Failed!!'))

app.listen(PORT, () => {
  console.log(
    `Server Started on Port: ${PORT}\nMode: ${process.env.NODE_ENV}\nURI: http://127.0.0.1:${PORT}`
  )
})
