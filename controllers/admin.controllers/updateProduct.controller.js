module.exports = (req, res) => {
    const products = require("../../database/products.json"); 
    const { id } = req.params; 
    const product = products.find((p) => p.id === +id); 
  
    res.render("updateProduct", { product } ) 
}

