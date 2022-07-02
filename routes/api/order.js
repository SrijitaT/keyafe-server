const express = require("express");
const router = express.Router();
const oc = require("../../controller/OrderController");
const { validateToken, verifyUserIsAdmin } = require("../../middleware/validateToken");


router.get("/:user_id", validateToken, oc.getOrderByUserId.bind(oc)); //get upcoming orders by user_id 

router.get("/history/:user_id", validateToken, oc.getOrderHistoryByUserId.bind(oc)); //get previous orders by user_id 

router.get("/", verifyUserIsAdmin, oc.getAllOrders.bind(oc)); //get order by user_id

router.post("/", validateToken, oc.addNewOrder.bind(oc)); //insert order

router.patch("/:id", validateToken, oc.updateOrderDetail.bind(oc)); //update order detail


router.patch("/:id/:product_id", validateToken, oc.updateOrderItem.bind(oc)); //update order item



module.exports = router;

