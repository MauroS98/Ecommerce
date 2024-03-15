const express = require('express');
const router = express.Router()
const multer = require("multer")
const path = require("path")
const mainControllers = require('../controllers/products.controllers')
const { create, store, } = require("../controllers/admin.controllers")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/productos'))
    },
    filename: function (req, file, cb) {
        const formatFilename = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, formatFilename)
    }
});

const upload = multer({ storage })
// "/admin"

router.get("/lista-producto", mainControllers.listProducts);
router.get("/editar-producto/:id", mainControllers.updateProduct);
router.get('/dashboard', mainControllers.dashboard);

router.get("/crear-producto", mainControllers.create);

router.get('/createProduct', mainControllers.createProduct)
router.post('/crear-producto', upload.single("image"), mainControllers.store);

router.delete("/eliminar-producto/:id", upload.single("image"), mainControllers.destroy)



module.exports = router