var express = require('express');
var app = express();

// Database Setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Greeting = require('./models/greeting/');


// Config bodyParser
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// Core Routes
var router = express.Router();
app.use('/api/v1', router); // API Prefix


router.get('/', function(req, res){
  console.log("get to request to api subspace");
  res.json({message: 'welcome from api subspace'});
});

app.get('/', function(req, res){
  console.log("get request to root");
  res.json({message: 'welcome from root' });
});


// Start server
app.listen(3000, function() {
  console.log("Starting server on port 3000....");
})
