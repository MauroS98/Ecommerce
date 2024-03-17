const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get('/login', mainControllers.login)

router.get('/registor', mainControllers.register)
router.post("/registro", registerValidation ,registerProcess)
module.exports = router