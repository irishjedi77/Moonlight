const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
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




const User = mongoose.model("User", userSchema);

module.exports = User
