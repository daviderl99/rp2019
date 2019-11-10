const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({ 
  email: { type: String, reqired: true, unique: true },
  hash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Creates a new user (register)
userSchema.statics.register = function({email, password}){
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);
      const user = new User({email, hash});
      user.save(err => {
        if (err) return reject(err);
        resolve(user);
      })
    });
  });
}

// Check for user
userSchema.statics.login = function({email, password}){
  return new Promise((resolve, reject) => {
    this.findOne({email}, (err, doc) => {
      if (err) return reject(err);
      if (doc === null) return reject("User not found!");
      bcrypt.compare(password, doc.hash, (err, res) => {
        if (err) return reject(err);
        resolve(res);
      });
    });
  });
}

const User = mongoose.model("User", userSchema);

module.exports = User;