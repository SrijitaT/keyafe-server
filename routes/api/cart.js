const express = require("express");
const router = express.Router();
const cc = require("../../controller/CartController");
const { validateToken } = require("../../middleware/validateToken");




router.post("/",validateToken, cc.addNewCartItem.bind(cc));


router.patch("/:id", validateToken, cc.updateCartItem.bind(cc));


module.exports = router;

