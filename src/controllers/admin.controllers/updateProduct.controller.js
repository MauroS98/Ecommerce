module.exports = (req, res) => {
    const products = require("../../data"); 
    const { id } = req.params; 
    const product = products.find((p) => p.id === +id); 
  
    res.render("updateProduct", { product } ) 
}

