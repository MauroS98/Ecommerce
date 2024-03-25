const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
const { registerValidation } = require("../middlewares/validation/auth.validation");
const {login,register,registerProcess,users}= require("../controllers/authentication.controllers")

router.get('/login', login)

router.get('/register', register)
router.post("/register", registerValidation ,registerProcess)
router.get('/users',users)
module.exports = router