const { loadData} = require("../../data/index")

module.exports = (req, res) => {
    const products = loadData()
    const { id } = req.params; 
    const product = products.find((p) => p.id === +id); 
  
    res.render("updateProduct", { product } ) 
}

