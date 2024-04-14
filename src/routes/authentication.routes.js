const express = require('express');
const router = express.Router()

const authenticationControllers = require("../controllers/authentication.controllers")
const loginValidation = require("../middlewares/validation/login.validation")
const registerValidation = require("../middlewares/validation/register.validation")
const {login,register,registerProcess,users}= require("../controllers/authentication.controllers")

router.get('/login', authenticationControllers.login)
router.post('/login', loginValidation, authenticationControllers.loginProcess)

router.get('/register', register)
router.post("/register", registerValidation, registerProcess)

router.get('/users',users)


module.exports = router