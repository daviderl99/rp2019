const express = require("express");
const router = express.Router();
const User = require("./user.model.js");

// Creates a new user (register)
router.post("/api/users/register", (req, res) => {
  User.register(req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      return handleError(err, res);
    });
});

// Login
router.post("/api/users/login", (req, res) => {
  User.login(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      return handleError(err, res);
    });
});

// Gets all users
router.get("/api/users", (req, res) => {
  User.find({}, (err, docs) => {
    if (err) return handleError(err, res);
    console.log(docs);
    res.status(200).json(docs);
  })
});

// Delete all users
router.delete("/api/users", (req, res) => {
  User.deleteMany({}, (err, docs) => {
    if (err) return handleError(err, res);
    console.log("All users successfully deleted");
    res.send(204);
  });
})

function handleError(err, res){
  console.log(err);
  res.send(500);
}

module.exports = router;