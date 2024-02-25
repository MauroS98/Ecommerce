module.exports = {
    index: require('../main.controllers/index.controller'),
    cart: require('./cart.controller'),
    productDetail: require('./product.detail.controller'),
    login: require('../authentication.controllers/login.controller'),
    register: require('../authentication.controllers/register'),
    dashboard: require('../admin.controllers/dashboard.controller'),
   
}