const express = require('express')
const getUser = express.Router()
const getUserInfo = require('../lib/get_user_details')

getUser.get('/test/get-user', getUserInfo.getUserInfo)

module.exports = getUser
