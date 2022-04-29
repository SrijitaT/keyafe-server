const express = require("express");
const router = express.Router();
const pc = require("../../controller/ProductController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");


router.post("/upload",verifyUserIsAdmin, pc.upload.bind(pc),pc.insertToDbAfterUpload.bind(pc));



router.get("/:category_name",pc.getProductsByCategory)


module.exports = router;