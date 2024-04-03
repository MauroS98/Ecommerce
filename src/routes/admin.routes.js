const express = require('express');
const router = express.Router()

const mainControllers = require('../controllers/products.controllers')
const { create, store,search, } = require("../controllers/admin.controllers");
const { upload } = require('../middlewares/upload');
const {editProduct} = require('../controllers/admin.controllers/editProduct.controller');
const checkAdmin = require('../middlewares/validation/checkAdmin');


// "/admin"

router.get("/lista-producto",mainControllers.listProducts);
router.get("/search", search);
router.get("/editar-producto/:id", mainControllers.updateProduct);
router.put('/editar-producto/:id',upload.single("image"),mainControllers.updateProduct)
router.get('/dashboard', mainControllers.dashboard);

router.get("/crear-producto", checkAdmin , mainControllers.create);

router.get('/createProduct', mainControllers.createProduct)
router.post('/crear-producto', upload.single("image"), checkAdmin, mainControllers.store);

router.delete("/eliminar-producto/:id", upload.single("image") ,checkAdmin, mainControllers.destroy)
router.delete("/eliminar-producto/:id", upload.single("image"), mainControllers.destroy)
//router.get('/createProduct', mainControllers.createProduct)




module.exports = router