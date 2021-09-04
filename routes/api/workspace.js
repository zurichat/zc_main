const express = require('express')
const router = express.Router()

// /GET get all plugins
router.get('/workspaces', (req, res) => {
  res.status(200).json({
    message: 'Successful!',
    workspaces: [
      {
        _id: '61325d1d7627a649e1b6715d',
        name: 'Computer CLub house',
        email: 'hello@falence.com',
        channels: ['Home'],
        subscriptionPlan: 'Free',
        createdAt: '2021-09-03T17:36:29.720Z',
        updatedAt: '2021-09-03T17:36:29.720Z',
        __v: 0
      },
      {
        _id: '61325d497627a649e1b67163',
        name: 'Monkey Sqaure',
        email: 'hello@falence.com',
        channels: ['announcements'],
        subscriptionPlan: 'Free',
        createdAt: '2021-09-03T17:37:13.214Z',
        updatedAt: '2021-09-03T17:37:13.214Z',
        __v: 0
      }
    ]
  })
})

module.exports = router
