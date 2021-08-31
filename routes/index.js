const APIRouter = require('./api')
const Proxy = require('./proxy')

module.exports = (app) => {
  app.use('/api', APIRouter)
  app.use('/proxy', Proxy)
}
