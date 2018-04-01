var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: { type: String, required: true },
  location: String,
  age : Number,
  symptoms : String,
  created_at: Date,
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
