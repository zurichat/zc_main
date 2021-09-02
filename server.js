const express = require('express')
const routes = require('./routes')
const helmet = require('helmet')
const loadFrontend = require('./middlewares/load-frontend')

const PORT = process.env.PORT || 3000

const app = express()

// activate helmet--server security
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)
app.set('x-powered-by', false)

routes(app)
loadFrontend(app)

app.listen(PORT, () => {
  console.log(
    `Server Started on Port: ${PORT}\nMode: ${process.env.NODE_ENV}\nURI: http://127.0.0.1:${PORT}`
  )
})
