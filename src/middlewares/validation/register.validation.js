
const { body } = require("express-validator");
const { loadData } = require("../../data");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const registerValidation = [
  body("username")
    .notEmpty().withMessage("Campo requerido").bail()
    .isLength({min: 5, max: 20}).withMessage("Longitud invalida").bail(),

  body("email")
    .notEmpty().withMessage("Campo requerido").bail()
    .isEmail().withMessage("Formato invalido").bail()
    .custom((value, { req }) => {
      const users = loadData("users");
      const existUser = users.find((u) => u.email === value.trim());

      if (existUser) {
        throw new Error("Ya existe un usuario registrado con ese email");
      }
      return true;
    }),

  body("password")
    .notEmpty().withMessage("Campo requerido").bail()
    .isLength({ min: 8, max: 16 }).withMessage("Longitud invalida").bail()
    .matches(regExPass).withMessage("La contraseña es invalida"),

  body("password2")
    .custom((value, {req})=>{
      if(value !== req.body.password){
          throw new Error("Las contraseñas no coinciden")
      }
      return true
    })
]

module.exports = registerValidation
