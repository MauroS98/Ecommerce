const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get('/', mainControllers.index)


module.exports = router