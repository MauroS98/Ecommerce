const { validationResult } = require('express-validator')
const bcryptjs = require ("bcryptjs")
const { loadData } = require('../../data')

module.exports = (req, res) => {
    const users = loadData("users")

    const errors = validationResult(req)

    if(errors.isEmpty()){
        return res.send("logueado sin errores")
    } else {
        res.send("errores en la validacion de datos")
    }

    const {email, password } = req.body

    const userFind = users.find(u => u.email === email)
    if(!userFind) {
        res.send("El usuario no existe")
    }

    const isValidPass = userFind.password === password
    if(!isValidPass) {
        res.send("contraseña incorrecta")
    }

    res.send("usted se ha logeado")
    

    
}