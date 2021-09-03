const express = require('express')

const router = express.Router()

// /GET get all plugins
router.get('/test/', (_, res) => {
  return res.status(200).json({
      status: 'success',
      message: 'I see you'
  })
    
})




module.exports = router
