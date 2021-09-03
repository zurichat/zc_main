const express = require('express');
const userDetails = require('../lib/get_user');
const getUser = express.Router();

getUser.get('/test/get-user', userDetails.getUser);

module.exports = getUser