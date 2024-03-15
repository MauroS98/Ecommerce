module.exports = {
    index: require('../main.controllers/index.controller'),
    cart: require('./cart.controller'),
    productDetail: require('./product.detail.controller'),
    login: require('../authentication.controllers/login.controller'),
    register: require('../authentication.controllers/register'),
    dashboard: require('../admin.controllers/dashboard.controller'),
    createProduct: require('../admin.controllers/createProduct.controller'),
    updateProduct: require('../admin.controllers/updateProduct.controller'),
    editProduct: require("../admin.controllers/editProduct.controller"),
    listProducts: require('../admin.controllers/listProducts.controller'),
    header: require('../header.controllers/header.controller'),
    head: require('../header.controllers/head'),
    create: require("../admin.controllers/create.controller"),
    store:require("../admin.controllers/store.controller"),
    list: require("../products.controllers/list.controller")
}
