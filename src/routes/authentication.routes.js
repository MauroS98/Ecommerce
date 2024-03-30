const express = require('express');
const router = express.Router()

const authenticationControllers = require("../controllers/authentication.controllers")
const loginValidation = require("../middlewares/loginValidation")
const { registerValidation } = require("../middlewares/validation/auth.validation");
const {login,register,registerProcess,users}= require("../controllers/authentication.controllers")

router.get('/login', authenticationControllers.login)
router.post('/login', loginValidation, authenticationControllers.loginProcess)

router.get('/register', register)
router.post("/register", registerValidation ,registerProcess)
router.get('/users',users)
module.exports = router