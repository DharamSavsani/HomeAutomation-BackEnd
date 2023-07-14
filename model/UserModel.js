const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

},{ strict: false });

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;