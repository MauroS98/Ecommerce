const { loadData, saveData } = require("../../data");
const path = require('path')
const fs = require('fs')
module.exports = (req, res) => {
    const { id } = req.params;
    const products = loadData();

    const productsLessOne = products.filter(p => p.id !== +id);
    const productToDelete = products.find(p => p.id === +id)
    
     if (productToDelete){
         const imagePath = path.join(__dirname, `../../../public/images/productos/${productToDelete.image}`)
         fs.unlink(imagePath, () => {})
     }

    saveData(productsLessOne)
    res.redirect("/admin/lista-producto")
}