module.exports = {
    index: require('./main.controllers/index.controller'),
    cart: require('./products.controllers/cart.controller'),
    productDetail: require('./products.controllers/product.detail.controller'),
    login: require('./authentication.controllers/login.controller'),
    register: require('./authentication.controllers/register'),
    dashboard: require('./admin.controllers/dashboard.controller'),
    updateProduct: require('./admin.controllers/updateProduct.controller'),
    listProducts: require('./admin.controllers/listProducts.controller')
}