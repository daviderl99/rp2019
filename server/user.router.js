const express = require("express");
const router = express.Router();
const User = require("./user.model.js");

// Creates a new user (signup)
router.post("/api/users", (req, res) => {
  const user = new User({
    email: "test@123.com",
    username: "test123",
    password: "password123"
  });
  user.save(err => {
    if (err) return handleError(err, res);
    console.log("Successfully saved user");
    res.sendStatus(200).json(user);
  });
});

// Gets all users
router.get("/api/users", (req, res) => {
  User.find({}, (err, docs) => {
    if (err) return handleError(err, res);
    console.log(docs);
    res.sendStatus(200).json(docs);
  })
});

router.delete("/api/users", (req, res) => {
  User.deleteMany({}, (err, docs) => {
    if (err) return handleError(err, res);
    console.log(docs);
    console.log("All users successfully deleted");
    res.sendStatus(204);
  });
})

function handleError(err, res){
  console.log(err);
  res.sendStatus(500);
}

module.exports = router;