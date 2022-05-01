const express = require("express");
const router = express.Router();
const type_controller = require("../../controller/TypeController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");

/**
  * @swagger
  * /types/upload:
  *   post:
  *     tags:
  *       - Types
  *     security:
  *       - Bearer: []
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: upload types
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - name
  *           - desc
  *         properties:
  *           name:
  *             type: string
  *           desc: 
  *             type: string
  *     responses:
  *       200:
  *         description: Type uploaded succesfully
  */
router.post("/upload",verifyUserIsAdmin,type_controller.addNewType.bind(type_controller));
/**
 * @swagger
 * /types:
 *   get:
 *     tags:
 *       - Types
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Retrieved all Types
 */
router.get("/",type_controller.getAllTypes);


module.exports = router;