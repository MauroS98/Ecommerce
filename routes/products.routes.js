const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get('/cart', mainControllers.cart)

router.get('/productDetail', mainControllers.productDetail)



module.exports = router