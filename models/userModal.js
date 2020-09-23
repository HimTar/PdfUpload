const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hashing password before saving in Database

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) {
      return next();
    }

    this.password = passwordHash;
    next();
  });
});

module.exports = mongoose.model("user", UserSchema);
