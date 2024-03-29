const { check } = require("express-validator")

const loginDatesValidation = [
    check("email")
    .notEmpty().withMessage("Ingresa un email").bail()
    .isEmail().withMessage("Debe ingresar un email valido").bail(),

    check("password")
    .notEmpty().withMessage("debe ingresar una contraseña").bail()

]

module.exports = loginDatesValidation