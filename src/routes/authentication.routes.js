const express = require('express');
const router = express.Router()

const authenticationControllers = require("../controllers/authentication.controllers")
const loginValidation = require("../middlewares/loginValidation")

// "/authentication"

router.get('/login', authenticationControllers.login)
router.post('/login', loginValidation, authenticationControllers.loginProcess)

router.get('/register', authenticationControllers.register)

module.exports = router