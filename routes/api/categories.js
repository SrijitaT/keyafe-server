const express = require("express");
const router = express.Router();
const cat_controller = require("../../controller/categories.controller");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

//@route POST api/categories/upload
//@desc Register User
//@access Public
router.post("/upload",verifyUserIsAdmin, cat_controller.upload.single('file'), cat_controller.uploadCatalogue);


router.get("/",cat_controller.getAllCategories)

module.exports = router;