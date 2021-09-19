module.exports = [
  require('./workspace'),
  require('./plugin'),
  require('../../middlewares/getDevice'),
  require('../../middlewares/getSession'),
  require('./user'),
  require('./report'),
  require('../../middlewares/routeAccess')
]
