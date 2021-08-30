const APIRouter = require('./api')

module.exports = (app) => {
  app.use('/api', APIRouter)
}
