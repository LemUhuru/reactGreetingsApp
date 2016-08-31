var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GreetingSchema = new Schema({
  name: String,
  greeting: String
});

module.exports = mongoose.model('Greeting', GreetingSchema);
