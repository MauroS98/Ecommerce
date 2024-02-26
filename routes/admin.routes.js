const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers')

router.get("/lista-producto", mainControllers.listProducts); 
router.get("/editar-producto/:id", mainControllers.updateProduct); 
router.get('/dashboard', mainControllers.dashboard)

module.exports = router