const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { loadData } = require("../../data");

module.exports = (req, res) => {
  const products = loadData();

  res.render(
    "admin/list",
    { products, toThousand },
    (err, containDashboard) => {
      err && res.send(err.message);
      res.render("partials/dashboard", { containDashboard });
    }
  );
};