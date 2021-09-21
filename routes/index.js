const apiRoutes = require('./api')
const proxy = require('./proxy')

module.exports = app => {
  app.use('/api', ...apiRoutes)
  app.use('/proxy', proxy)
}
