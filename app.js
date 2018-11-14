require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var carsRouter = require('./routes/cars');
var transactionsRouter = require('./routes/transactions');
var locationsRouter = require('./routes/locations');
var partnersRouter = require('./routes/partners');
var bookingsRouter = require('./routes/bookings');
var pessengersRouter = require('./routes/pessengers');


var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/v1/cars', carsRouter);
app.use('/api/v1/transactions', transactionsRouter);
app.use('/api/v1/locations', locationsRouter);
app.use('/api/v1/partners', partnersRouter);
app.use('/api/v1/bookings', bookingsRouter);
app.use('/api/v1/pessengers', pessengersRouter);

module.exports = app;
