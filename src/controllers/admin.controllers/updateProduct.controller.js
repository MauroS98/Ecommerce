const { loadData } = require("../../data");

module.exports = (req, res) => {
  const products = loadData();
  const { id } = req.params;
  const product = products.find((p) => p.id === +id);

  res.render("admin/updateProduct", { product }, (err, containDashboard) => {
    err && res.send(err.message);
    res.render("partials/dashboard", { containDashboard });
  });
};

