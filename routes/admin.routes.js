const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get("/lista-producto", mainControllers.listProducts); 
router.get("/editar-producto/:id", mainControllers.updateProduct); 
router.get('/dashboard', mainControllers.dashboard);
router.get("/crearProducto", mainControllers.productCreate);
router.post("/crearProducto")


module.exports = router