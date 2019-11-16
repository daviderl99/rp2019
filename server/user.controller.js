const User = require("./user.model.js");
const jwt = require("jsonwebtoken");

const JWT_PRIVATE_KEY = "7581A678822A7361A559D171AC565";

exports.login = (req, res) => {
  User.login(req.body)
    .then(user => {
      jwt.sign(user, JWT_PRIVATE_KEY, function(err, token) {
        if (err) {
          return res.status(500);
        }
        console.log(user);
        res.status(200).send({
          user,
          token
        });
      });
    })
    .catch(err => {
      res.send(401);      
    });
}

exports.register = (req, res) => {
  User.register(req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.send(500);
    });
}