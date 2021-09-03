const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const device = require('express-device')
const useragent = require('express-useragent')

const loadFrontend = require('./middlewares/load-frontend')
const { ApiError } = require('./lib/ApiError')

const app = express()

// activate helmet--server security
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)
app.set('x-powered-by', false)

// Retrieve device information for logging purposes.
app.use(device.capture())
app.use(useragent.express())

routes(app)
loadFrontend(app)
routes(app)
loadFrontend(app)
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof ApiError) {
      return res.status(err.code).send(err.message)
    }
    res.status(500).send('Something Went Wrong')
  }
})

app.listen(PORT, () => {
  console.log(
    `Server Started on Port: ${PORT}\nMode: ${process.env.NODE_ENV}\nURI: http://127.0.0.1:${PORT}`
  )
})
