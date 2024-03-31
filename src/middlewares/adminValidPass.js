modele.exports = (req, res, next)=> {
    const { role } = req.session

    if( role === "regular"){
        next()
    } else {
        console.log("usted debe ser admin para ingresar");
    }
}

