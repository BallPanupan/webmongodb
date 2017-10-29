var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbweb');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  fname : String,
  lname : String
});

var Users = mongoose.model("Users",UserSchema);

var users = new Users({
  fname : 'Poom',
  lname : 'Poom'
});

users.save(function(err){
  if(err)
  console.log(err);
  else
  console.log(users);
});
