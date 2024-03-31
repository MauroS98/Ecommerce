const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
const cartControllers = require('../controllers/cart.controllers')

// "/products"

router.get('/cart', cartControllers.cart)
router.post('addToCart')


router.get('/productDetail', mainControllers.productDetail)

router.get('/lista', mainControllers.list) 



module.exports = router