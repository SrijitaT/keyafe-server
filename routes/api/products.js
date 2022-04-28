const express = require("express");
const router = express.Router();
const product_controller = require("../../controller/ProductController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

//@route GET api/products
//@desc Register User
//@access Public
router.post("/upload",verifyUserIsAdmin, product_controller.upload.single('file'),product_controller.uploadCatalogue);


//@route POST api/users/login
//@desc Login User/Return jwt token
//@access Public
//router.post("/login", user_controller.loginUser);
router.get("/:category_name",product_controller.getProductsByCategory)


module.exports = router;