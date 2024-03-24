const products = require("../../data/quantumDataBase.json");
const { saveData } = require("../../data");

module.exports = (req, res) => {
  const { id } = req.params;
  const { name, description, category, price } = req.body;

  let newImages = [];
    if (req.files.imagesSecondary?.length) {
      newImages = req.files.imagesSecondary?.map((img) => img.filename);
    }
  const productsMap = products.map((p) => {
    if (p.id === +id) {
      const productEdit = {
        ...p, 
        name: name.trim(),
        description: description.trim(),
         imagePrincipal: req.files.imagePrincipal?.length
            ? req.files.imagePrincipal[0]?.filename
            : p.imagePrincipal,
        imagesSecondary: newImages.length ? newImages : p.imagesSecondary,
        image: req.file ? req.file.filename : p.image,
        category: category.trim(),
        price:+price,
      };
      return productEdit;
    }
    return p;
  });
  saveData(productsMap);
  res.redirect("/products/lista");
};

