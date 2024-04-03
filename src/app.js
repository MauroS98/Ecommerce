var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("method-override")
const expressPartials = require('express-partials');
const session = require("express-session")
const dataLocals = require("./middlewares/insertDataLocals")
const { sessionFormCookie, dataLocalsCookie } = require('./middlewares/validation');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride("_method"));
app.use(session({ secret: "palabra secreta" }))
app.use(expressPartials());
app.use(session({secret: "secret message"}))

/* Recordar usuario */
app.use (sessionFormCookie)
app.use (dataLocalsCookie)
//                         //

app.use(dataLocals)

const mainRoutes = require('./routes/main.routes')
const productRoutes = require('./routes/products.routes')
const authenticationRoutes = require('./routes/authentication.routes')
const adminRoutes = require('./routes/admin.routes');




app.use('/', mainRoutes)

app.use('/products', productRoutes)

app.use('/authentication', authenticationRoutes)

app.use('/admin', adminRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
//app.use(function (err, req, res, next) {
//  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
//  res.status(err.status || 500);
//  res.render('./partials/error');
//});

module.exports = app;
