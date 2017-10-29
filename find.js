var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbweb');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  fname : String,
  lname : String
});

var Users = mongoose.model("Users",UserSchema);

Users.find('users',function(err,users){
  console.log(users);
});
