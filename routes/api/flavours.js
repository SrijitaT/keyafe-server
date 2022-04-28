const express = require("express");
const router = express.Router();
const fl_controller = require("../../controller/FlavourController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

//@route GET api/products
//@desc Register User
//@access Public
router.post("/upload",verifyUserIsAdmin,fl_controller.addNewflavour);

router.get("/",fl_controller.getAllFlavours);


module.exports = router;