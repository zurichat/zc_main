const express = require('express')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = (app) => {
  app.use(
    (_, res, next) => {
      if (!isProduction) {
        return res.redirect('http://127.0.0.1:3000') // redirect to frontend in dev build
      }
      next()
    }, // below this are for production
    express.static(path.resolve(__dirname, '../zc_frontend/build')),
    (_, res) =>
      res.sendFile(path.resolve(__dirname, '../zc_frontend/build/index.html')) // let frontend handle 404
  )
}
