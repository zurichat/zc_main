module.exports = [
  require('./workspace'),
  require('./plugin'),
  require('./verifyEmail'),
  require('../../middlewares/getDevice'),
  require('../../middlewares/getSession'),
  require('./user'),
  require('../../middlewares/routeAccess')
]
