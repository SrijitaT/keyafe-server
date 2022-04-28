const express = require("express");
const router = express.Router();
const shape_controller = require("../../controller/ShapeController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

//@route GET api/products
//@desc Register User
//@access Public
router.post("/upload",verifyUserIsAdmin,shape_controller.addNewShape);

router.get("/",shape_controller.getAllShapes);


module.exports = router;