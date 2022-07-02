const express = require("express");
const router = express.Router();
const fl_controller = require("../../controller/FlavourController");
const { verifyUserIsAdmin } = require("../../middleware/validateToken");

/**
  * @swagger
  * /flavours/upload:
  *   post:
  *     tags:
  *       - Flavours
  *     security:
  *       - Bearer: []
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: upload flavours
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - variety
  *           - desc
  *         properties:
  *           variety:
  *             type: string
  *           desc: 
  *             type: string
  *     responses:
  *       200:
  *         description: Flavours uploaded succesfully
  */
router.post("/upload", verifyUserIsAdmin, fl_controller.addNewflavour.bind(fl_controller));
/**
 * @swagger
 * /flavours:
 *   get:
 *     tags:
 *       - Flavours
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Retrieved all Flavours
 */
router.get("/", fl_controller.getAllFlavours);


module.exports = router;