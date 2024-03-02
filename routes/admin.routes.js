const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
// const {create, store, edit, update,  } = require('../controllers/admin');

router.get("/lista-producto", mainControllers.listProducts); 
router.get("/editar-producto/:id", mainControllers.updateProduct); 
router.get('/dashboard', mainControllers.dashboard);
router.get("/crearProducto",mainControllers.createProduct);
router.post('/crear-producto', store); 



module.exports = router