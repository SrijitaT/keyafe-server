const express = require("express");
const router = express.Router();
const type_controller = require("../../controller/type.controller");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

//@route GET api/products
//@desc Register User
//@access Public
router.post("/upload",verifyUserIsAdmin,type_controller.addNewType);

router.get("/",type_controller.getAllTypes);


module.exports = router;