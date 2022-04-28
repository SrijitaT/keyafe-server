const express = require("express");
const router = express.Router();
const UserController = require("../../controller/UserController");
const uc = new UserController();
//@route POST api/users/register
//@desc Register User
//@access Public
router.post("/register", uc.registerUser);


//@route POST api/users/login
//@desc Login User/Return jwt token
//@access Public
router.post("/login", uc.loginUser.bind(uc));



module.exports = router;