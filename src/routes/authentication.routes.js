const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get('/login', mainControllers.login)
router.post('/login', mainControllers.loginProcess)

router.get('/register', mainControllers.register)
router.post('/register', mainControllers.registerProcess)

module.exports = router