const express = require('express')
const reportRoute = express.Router()

const { login } = require('../../controllers/reportController.js')

reportRoute.post('/api/report', login)

module.exports = reportRoute