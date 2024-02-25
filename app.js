const express = require("express");
const app = express();
const path = require("path");
const port = 3040;

app.use(express.static('public'));
app.set('view engine', 'ejs');

const mainRoutes = require('./routes/main.routes')
const productRoutes = require('./routes/products.routes')
const authenticationRoutes = require('./routes/authentication.routes')
const adminRoutes = require('./routes/admin.routes')

app.use('/', mainRoutes)

app.use('/products', productRoutes)

app.use('/authentication', authenticationRoutes)

app.use('/admin', adminRoutes)

app.listen(port, () => (console.log(`corriendo puerto http://localhost:${port}`)))
