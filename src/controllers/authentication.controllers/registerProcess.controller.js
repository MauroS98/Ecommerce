const { hashSync } = require("bcryptjs");
const { loadData, saveData } = require("../../data");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { username, email, password, role, avatar } = req.body;
    const users = loadData("users");

    const newUser = {
      id: !users.length ? 1 : users[users.length - 1].id + 1,
      name: username,
      email: email?.trim().toLowerCase(),
      password: hashSync(password.trim(), 12),
      role:"REGULAR",
      avatar: req.file ? req.file.filename :"default-avatar.jpg",
    };

    users.push(newUser);

    saveData(users, "users");

    res.redirect("/authentication/login");
    return;
  }else{ 
    const errorsMapped = errors.mapped()
    const { username, email} = req.body
    res.render("register", { errors: errorsMapped,old:req.body })
  }
};