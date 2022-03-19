const express = require("express");
const router = express.Router();
const user_controller = require("../../controller/user.controller");

//@route POST api/users/register
//@desc Register User
//@access Public
router.post("/register", user_controller.registerUser);


//@route POST api/users/login
//@desc Login User/Return jwt token
//@access Public
router.post("/login", user_controller.loginUser);



module.exports = router;