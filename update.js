var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbweb');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  fname : String,
  lname : String
});

var Users = mongoose.model('Users',UserSchema);

Users.findById("59d5b7bc194b0bac4f5bb2d9",function (err,Users){
  users.fname = "111",
  users.lname = "222",
  users.save();
});
