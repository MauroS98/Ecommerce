const { loadData } = require("../../data");

module.exports = (req, res) => {
  const products = loadData();
  const { id } = req.params;
  const producto = products.find((p) => p.id === +id);

  res.render("admin/updateProduct", { producto}, (err, containDashboard) => {
    err && res.send(err.message);
    res.render("partials/dashboard", { containDashboard });
  });
};

