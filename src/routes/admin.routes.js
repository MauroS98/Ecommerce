const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
const {create,store,}= require("../controllers/admin.controllers")            

router.get("/lista-producto", mainControllers.listProducts); 
router.get("/editar-producto/:id", mainControllers.updateProduct); 
router.get('/dashboard', mainControllers.dashboard);
router.get("/crear-producto",mainControllers.create);
router.post('/crear-producto', mainControllers.store); 



module.exports = router