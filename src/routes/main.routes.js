const express = require('express');
const router = express.Router()

const { index, search } = require('../controllers/products.controllers')

router.get('/', index)
router.get('/buscar', search); 

module.exports = router