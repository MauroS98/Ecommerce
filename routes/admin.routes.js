const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers')

router.get("/editar-producto/:id", mainControllers.updateProduct); 
router.get('/dashboard', mainControllers.dashboard)

module.exports = router