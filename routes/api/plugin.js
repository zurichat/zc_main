const { default: axios } = require('axios')
const express = require('express')

const plugin = express.Router()

// /GET get all plugins
plugin.get('/plugin/list', (_, res) => {
  axios
    .get('https://api.zuri.chat/marketplace/plugins/')
    .then(r => res.send(r.data))
    .catch(e => res.status(400).json({ message: e }))
  // return res.send({
  //   'chess.zuri.chat': {
  //     name: 'ChessBoard'
  //   },
  //   'whiteboard.zuri.chat': {
  //     name: 'Whiteboard'
  //   },
  //   'calendar.zuri.chat': {
  //     name: 'Company Holiday Calendar'
  //   },
  //   'noticeboard.zuri.chat': {
  //     name: 'Notice Board Plugin'
  //   },
  //   'channels.zuri.chat': {
  //     name: 'Channels Plugin'
  //   },
  //   'todo.zuri.chat': {
  //     name: 'Zuri Todo App'
  //   },
  //   'goals.zuri.chat': {
  //     name: 'Goals Zuri App'
  //   },
  //   'tracker.zuri.chat': {
  //     name: 'Tracker Zuri App'
  //   },
  //   'sales.zuri.chat': {
  //     name: 'Sales Zuri App'
  //   }
  // })
})

plugin.get('/plugin/sidebar', (req, res) => {
  const { url } = req.query
  console.log(req.query)
  if (url) {
    axios
      .get(url)
      .then(r => res.json(r.data))
      .catch(e => {
        return res.status(404).json({
          messages: `${url} couldn't be reached!`
        })
      })
  } else {
    return res.status(404).json({
      messages: 'URL not found'
    })
  }
})

plugin.get('/plugin/:name', (req, res) => {
  const { name } = req.params
  if (name in defaultData === false) {
    return res.status(404).send({
      messages: 'not found!'
    })
  } else {
    return res.status(200).send({
      messages: 'success',
      [name]: defaultData[name]
    })
  }
})

const defaultData = {
  channels: [
    {
      id: 1,
      name: 'announcements',
      description: ''
    },
    {
      id: 2,
      name: 'games',
      description: ''
    },
    {
      id: 3,
      name: 'designers',
      description: ''
    },
    {
      id: 4,
      name: 'developers',
      description: ''
    }
  ],
  messages: [
    {
      id: 1,
      name: 'John Doe',
      display_name: 'johndoe',
      avatar: '/avatar1.svg',
      description: ''
    },
    {
      id: 2,
      name: 'Ige Damilola',
      display_name: 'idmcalculus',
      avatar: '/avatar2.svg',
      description: ''
    },
    {
      id: 3,
      name: 'Mark Essien',
      display_name: 'markessien',
      avatar: '/avatar1.svg',
      description: ''
    },
    {
      id: 4,
      name: 'Seyi Onifade',
      display_name: 'xyluz',
      avatar: '/avatar2.svg',
      description: ''
    }
  ]
}

module.exports = plugin
