const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
const { create, store, } = require("../controllers/admin.controllers");
const { upload } = require('../middlewares/upload');


// "/admin"

router.get("/lista-producto", mainControllers.listProducts);
router.get("/editar-producto/:id", mainControllers.updateProduct);
router.get('/dashboard', mainControllers.dashboard);

router.get("/crear-producto", mainControllers.create);
router.post('/crear-producto', upload.single("image"), mainControllers.store);

router.delete("/eliminar-producto/:id", upload.single("image"), mainControllers.destroy)
// router.get('/createProduct', mainControllers.createProduct)




module.exports = router