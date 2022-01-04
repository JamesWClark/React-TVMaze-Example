var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './public/tvmaze/build')));

//app.use('/', indexRouter);
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.use('/users', usersRouter);

module.exports = app;
