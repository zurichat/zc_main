const express = require('express')
const axios = require('axios').default

const Proxy = express.Router()
const reSubdomain = /^(?:https?:\/\/)([a-zA-Z0-9-]+\.zuri\.chat)/

Proxy.get('/', async (req, res) => {
  let { url, mimeType } = req.query
  mimeType = mimeType || 'text/html'

  if (!url || !reSubdomain.test(url)) {
    return res.status(400).send({ message: 'Invalid Paramaters' })
  }

  try {
    const { data } = await axios.get(url)
    res.header({ 'Content-Type': mimeType }).send(data)
  } catch (_) {
    res.status(500).send({ message: 'Unable to fetch' })
  }
})

module.exports = Proxy
