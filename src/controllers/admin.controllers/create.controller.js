
module.exports = (req, res) => {
    res.render("admin/createProduct", {}, (err, containDashboard) => {
      err && res.send(err.message)
      res.render("partials/dashboard", { containDashboard });
    });
  };
  
