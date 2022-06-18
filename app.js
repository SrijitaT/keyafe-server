const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const passport = require("passport");
const cors = require("cors");
const swagger = require('./helpers/swagger');

const indexRouter = require('./routes/api/index');
const usersRouter = require('./routes/api/users');
const productsRouter = require('./routes/api/products');
const categoriesRouter = require('./routes/api/categories');
const flavoursRouter = require("./routes/api/flavours");
const shapesRouter = require("./routes/api/shape");
const typeRouter = require("./routes/api/type");
const productDetailsRouter = require("./routes/api/productDetails");
const cartRouter = require("./routes/api/cart");
const deliveryTimeSlotRouter = require("./routes/api/deliverytimeslot");
const deliveryTypeRouter = require("./routes/api/deliveryType");

const app = express();

const clientUrl = "http://localhost:3000";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('db', require('./models/index.js'));
app.set('port', process.env.DEV_APP_PORT);
app.use('/api/docs', swagger.router);
app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookieParser());
app.use(cookieSession({name:"session", keys:["srijita"], maxAge:24*60*60*100}));
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/images', express.static(path.join(__dirname, 'public', 'images')))

app.use(cors({
  origin: clientUrl,
  methods: "GET,PUT,POST,DELETE",
  credentials: true
}))
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/flavours', flavoursRouter);
app.use('/api/shapes', shapesRouter);
app.use('/api/types',typeRouter);
app.use('/api/product_details',productDetailsRouter);
app.use("/api/carts",cartRouter);
app.use("/api/delivery_time_slots",deliveryTimeSlotRouter);
app.use("/api/delivery_types",deliveryTypeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
