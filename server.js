const express = require('express')
const routes = require('./routes')
const loadFrontend = require('./middlewares/load-frontend')

const PORT = process.env.PORT || 3000

const app = express()

routes(app)
loadFrontend(app)

app.listen(PORT, () => {
  console.log(
    `Server Started on Port: ${PORT}\nMode: ${process.env.NODE_ENV}\nURI: http://127.0.0.1:${PORT}`
  )
})
