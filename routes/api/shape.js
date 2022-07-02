const express = require("express");
const router = express.Router();
const shape_controller = require("../../controller/ShapeController");
const { verifyUserIsAdmin } = require("../../middleware/validateToken");

/**
  * @swagger
  * /shapes/upload:
  *   post:
  *     tags:
  *       - Shapes
  *     security:
  *       - Bearer: []
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: upload shapes
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
  *         description: Shape uploaded succesfully
  */
router.post("/upload", verifyUserIsAdmin, shape_controller.addNewShape.bind(shape_controller));
/**
 * @swagger
 * /shapes:
 *   get:
 *     tags:
 *       - Shapes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Retrieved all Shapes
 */
router.get("/", shape_controller.getAllShapes);


module.exports = router;