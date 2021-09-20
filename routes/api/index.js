module.exports = [
  require('./workspace'),
  require('./search'),
  require('./plugin'),
  require('../../middlewares/getDevice'),
  require('../../middlewares/getSession'),
  require('./user'),
  require('../../middlewares/routeAccess')
]
