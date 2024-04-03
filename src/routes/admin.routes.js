const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
const { create, store,search, } = require("../controllers/admin.controllers");
const { upload } = require('../middlewares/upload');
const {editProduct} = require('../controllers/admin.controllers/editProduct.controller');
const admin = require("../middlewares/checkAdmin")

// "/admin"

router.get("/lista-producto",mainControllers.listProducts);
router.get("/search", search);
router.get("/editar-producto/:id", mainControllers.updateProduct);
router.put('/editar-producto/:id',upload.single("image"),mainControllers.updateProduct)
router.get('/dashboard',admin, mainControllers.dashboard);

router.get("/crear-producto", mainControllers.create);

router.get('/createProduct', mainControllers.createProduct)
router.post('/crear-producto', upload.single("image"), mainControllers.store);

router.get("/eliminar-producto/:id",  mainControllers.destroy)
router.delete("/eliminar-producto/:id", upload.single("image"), mainControllers.destroy)
// router.get('/createProduct', mainControllers.createProduct)




module.exports = router