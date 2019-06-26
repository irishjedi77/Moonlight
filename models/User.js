const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

// Create Schema
const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    // allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true
    //   }
  },
  password: {
    type: String,
    required: true,
    // allowNull: false
  }, 

  avatar: {
      type: String,
      required: false
  },

  phone: {
      type: String,
      required: false
  },

  description: {
      type: String,
      required: false
  }
});

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model("User", userSchema);

module.exports = User
