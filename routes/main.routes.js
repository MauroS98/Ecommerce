const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers')

router.get('/home', mainControllers.index)

module.exports = router