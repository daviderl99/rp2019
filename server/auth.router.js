const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const userController = require("./user.controller.js");

validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

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