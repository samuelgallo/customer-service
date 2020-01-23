// requests commonjs
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// start express 
var app = express(); 

/*
*  Template engine
*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*
*  static files
*  encode to send data
*  form validation
*/
app.use(express.static('./app/public')); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator()); 

/* 
*  autoload scripts
*  routes
*  db connection
*  models
*  controlls
*  run app
*/
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;