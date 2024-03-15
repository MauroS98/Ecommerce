const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')

router.get("/lista-producto", mainControllers.listProducts); 


router.get("/editar-producto/:id", mainControllers.updateProduct); 
router.put("/editar-producto/:id", mainControllers.editProduct)

router.get('/dashboard', mainControllers.dashboard)

router.get('/createProduct', mainControllers.createProduct)




module.exports = router