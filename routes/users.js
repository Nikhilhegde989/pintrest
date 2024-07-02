const mongoose = require("mongoose")
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pinterest");

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  contact:Number,
  boards:{
    type:Array,
    default:[]
  }
})

userSchema.plugin(plm);

// // Use passport-local-mongoose plugin with options to specify custom fields
// userSchema.plugin(plm, {
//   usernameField: 'uniquename',
//   passwordField: 'secretKey'
// });

module.exports = mongoose.model("Users",userSchema);
