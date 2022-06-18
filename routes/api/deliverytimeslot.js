const express = require("express");
const router = express.Router();
const dts = require("../../controller/DeliveryTimeSlotController.js");




router.get("/:delivery_type_id", dts.getTimeSlotsByDeliveryType.bind(dts));



module.exports = router;