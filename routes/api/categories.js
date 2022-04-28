const express = require("express");
const router = express.Router();
const cc = require("../../controller/CategoriesController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

//@route POST api/categories/upload
//@desc Register User
//@access Public
router.post("/upload",verifyUserIsAdmin, cc.upload().single('file'), cc.validateAndInsertToDbAfterUpload);


router.get("/",cc.getAllCategories)

module.exports = router;