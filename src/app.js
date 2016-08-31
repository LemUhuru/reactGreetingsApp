var express = require('express');
var app = express();

// Config bodyParser
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// Database Setup
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://king:king@jello.modulusmongo.net:27017/dEr9oveq');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Connected!');
});

var Greeting = require('./models/greeting');


// Routing
var router = express.Router();


router.use(function(req, res, next){
  console.log("a request was made");
  next();
});

// testing.....
router.get('/', function(req, res){
  // console.log("get to request to api subspace");
  res.json({message: 'welcome from api/v1'});
});



app.get('/', function(req, res){
  // console.log("get request to root");
  res.json({message: 'welcome from root' });
});



// routes ending in /greetings....

router.route('/greetings')

  // Get all greetings.

  .get(function(req, res) {
    Greeting.find(function(err, greetings){
      if(err)
        res.send(err);

      res.json(greetings);
      });
    })

  .post(function(req, res){
      var greeting = new Greeting();
      greeting.name = req.query.name;
      greeting.greeting = req.query.greeting;
      greeting.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: "Greeting created! "});
      });
    });

router.route('/greetings/:greetings_id')

  .get(function(req, res) {
    Greeting.findById(req.params.greeting_id, function(err, greeting) {
      if(err)
        res.send(err)
      res.json(greeting);
    });
  })


// Register Routes -----------------
// all routes prefixed with /api/v1

app.use('/api/v1', router); // API Prefix


// Start server
app.listen(3000, function() {
  console.log("Starting server on port 3000....");
})
