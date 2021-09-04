<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const router = express.Router()

// /GET get all plugins
router.get('/workspaces', (req, res) => {
    res.status(200).json({
        message: 'Successful!',
        workspaces: [
            {
            _id: "61325d1d7627a649e1b6715d",
            name: "Computer CLub house",
            email: "hello@falence.com",
            channels: [
            "Home"
            ],
            subscriptionPlan: "Free",
            createdAt: "2021-09-03T17:36:29.720Z",
            updatedAt: "2021-09-03T17:36:29.720Z",
            __v: 0
            },
            {
            _id: "61325d497627a649e1b67163",
            name: "Monkey Sqaure",
            email: "hello@falence.com",
            channels: [
            "announcements"
            ],
            subscriptionPlan: "Free",
            createdAt: "2021-09-03T17:37:13.214Z",
            updatedAt: "2021-09-03T17:37:13.214Z",
            __v: 0
            }
        ]

    })
})


module.exports = router
>>>>>>> c0f25f8b2571b7b95fce168d60ca831688a3e3dd
=======
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
>>>>>>> 012fd747b12c9da8f068bdd3ea593dc87edeae53
