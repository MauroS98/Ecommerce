const { loadData } = require("../../data");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req, res) => {
  const { keywords } = req.query;
  const products = loadData();
  const productsFilter = products.filter(
    (p) =>
      p.name?.toLowerCase().includes(keywords) ||
      p.description?.toLowerCase().includes(keywords)
  );
  res.render(
    "admin/list",
    { products: productsFilter,toThousand },
    (err, containDashboard) => {
      err && res.send(err.message);
      res.render("partials/dashboard", { containDashboard });
    }
  );
};
