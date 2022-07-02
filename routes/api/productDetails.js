const express = require("express");
const router = express.Router();
const pdc = require("../../controller/ProductDetailsController");

/**
 * @swagger
 * /product_details/{id}:
 *   get:
 *     tags:
 *       - Product Details
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: id
 *        description: category name to get list of all products under that category
 *        in: path
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         description: Retrieved Productdetails of a particular product
 */

router.get("/:id", pdc.getProdDetails.bind(pdc))


module.exports = router;