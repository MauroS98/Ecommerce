const { loadData} = require("../../data/index")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const products = loadData()
    const { id } = req.params; 
    const product = products.find((p) => p.id === +id); 
  
    res.render("updateProduct", { product, toThousand } ) 
}

