const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unqiue: [true, "Email exists"]
  },
  password: {
    type: String,
    required: [true, "Please provide an password"],
    unqiue: false
  }
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
