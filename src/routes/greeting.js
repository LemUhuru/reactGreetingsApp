var express = require('express');
var router = express.Router();
var Greeting = require('../models/greeting');

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
      greeting.name = req.body.name;
      greeting.greeting = req.body.greeting;

      greeting.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: "Greeting created! "});
      });
    });

  // Update a greeting.


  // Delete a greeting.


// router.get('/', function(req, res) {
//   res.json({name: "Joseph", greeting: "Good Morning!"});
// });


module.exports = router;
