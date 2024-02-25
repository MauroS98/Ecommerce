module.exports = (req, res) => {
    const products = require("../../database/products.json"); // 1° traer datos de DB
    const { id } = req.params; // 2° obtener el id del producto que se quiere modificar
    const product = products.find((p) => p.id === +id); // 3° buscamos el producto
  
    res.render('updateProduct')
}
