const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get('/dashboard', mainControllers.dashboard)

router.get('/createProduct', mainControllers.createProduct)




module.exports = router