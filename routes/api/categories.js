const express = require("express");
const router = express.Router();
const cc = require("../../controller/CategoriesController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");
/**
   * @swagger
   * definitions:
   *   category:
   *     required:
   *       - type
   *       - message
   *       - data
   *     properties:
   *       type:
   *         type: integer
   *       message:
   *         type: string
   *       data:
   *         type: array
   */


router.post("/upload",verifyUserIsAdmin, cc.upload.bind(cc), cc.insertToDbAfterUpload.bind(cc));

/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *       - Categories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Retrieved all categories
 *         schema:
 *           $ref: '#/definitions/category'
 */
router.get("/",cc.getAllCategories)

module.exports = router;