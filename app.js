var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cookieSession = require('cookie-session');
let passport = require("passport");
let cors = require("cors");

var indexRouter = require('./routes/api/index');
var usersRouter = require('./routes/api/users');
var productsRouter = require('./routes/api/products');
let categoriesRouter = require('./routes/api/categories');
let flavoursRouter = require("./routes/api/flavours");
let shapesRouter = require("./routes/api/shape");
let typeRouter = require("./routes/api/type");

var app = express();
let clientUrl = "http://localhost:3000";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('db', require('./models/index.js'));
app.set('port',5000);
app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookieParser());
app.use(cookieSession({name:"session",keys:["srijita"],maxAge:24*60*60*100}));
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
