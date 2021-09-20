const express = require('express')
const router = express.Router();
const {getFiles} = require('../../controllers/searchController')


router.get('/files', getFiles);

