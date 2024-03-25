module.exports = {
    index: require('../main.controllers/index.controller'),
    search:require("../main.controllers/search.controller"),
    cart: require('./cart.controller'),
    productDetail: require('./product.detail.controller'),
    login: require('../authentication.controllers/login.controller'),
    register: require('../authentication.controllers/register.controller'),
    dashboard: require('../admin.controllers/dashboard.controller'),
    createProduct: require('../admin.controllers/createProduct.controller'),
    updateProduct: require('../admin.controllers/updateProduct.controller'),
    listProducts: require('../admin.controllers/listProducts.controller'),
    header: require('../header.controllers/header.controller'),
    head: require('../header.controllers/head'),
    create: require("../admin.controllers/create.controller"),
    store:require("../admin.controllers/store.controller"),
    list: require("../products.controllers/list.controller"),
    destroy: require("../admin.controllers/destroy.controller"),
    users:require('../authentication.controllers/users.controller')
}
