const mongoose = require("mongoose");

// need to save to mongoDB
// we will create a schema

const user = {
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
};

const userSchema = new mongoose.Schema(user);

module.exports = mongoose.model("User", userSchema);
