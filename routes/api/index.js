<<<<<<< HEAD
module.exports = [require('./plugin'), require('../../middlewares/getDevice'), require('../../middlewares/getSession')]
=======
module.exports = [
  require('./workspace'),
  require('./plugin'),
  require('../../middlewares/getDevice'),

  require('../../middlewares/getSession'),
  require('../../middlewares/routeAccess')
]
>>>>>>> cfd40e828908629eb8163783c383279121086717
