module.exports = [
  require('./workspace'),
  require('./plugin'),
  require('../../middlewares/getDevice'),
    require('../../middlewares/getUser'),
  require('../../middlewares/getSession'),
  require('../../middlewares/routeAccess')
]

