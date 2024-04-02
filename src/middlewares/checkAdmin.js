const { loadData } = require("../data")

module.exports =(req, res, next) => {
const users = loadData("users")
const user = users[0]

if(user.role === "ADMIN") {
return next()
}else{

    return res.redirect("/")
}

}