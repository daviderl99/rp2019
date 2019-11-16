const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const userController = require("./user.controller.js");
const jwt = require("jsonwebtoken");

validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

router.post("/verify", (req, res) => {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) return res.send(400);
  const token = bearerHeader.split(" ")[1];
  if (!token) return res.send(400);
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(400);
    res.status(200).send(decoded);
  });
});

// Login
router.post("/login", userController.login);

// Register
router.post("/register",
  [
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({min: 8}).withMessage("Password must be at least 8 characters long.")
    .matches(/\d/).withMessage("Password must contain at least 1 number")
    .not().isIn(['123', 'password1', 'parool1']).withMessage("Do not use a common word as your password")
  ],
  validationMiddleware,
  userController.register
);

module.exports = router;