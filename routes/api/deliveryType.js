const express = require("express");
const router = express.Router();
const dt = require("../../controller/DeliveryTypeController.js");




router.get("/", dt.getDeliveryTypes.bind(dt));



module.exports = router;