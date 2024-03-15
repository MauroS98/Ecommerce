module.exports = (req, res) => {
    const products = require("../../data/quantumDataBase.json"); 
    const { id } = req.params; 
    const product = products.find((p) => p.id === +id); 
  
    res.render("admin/updateProduct", { product } ); 
    
}

