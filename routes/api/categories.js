const express = require("express");
const router = express.Router();
const cc = require("../../controller/CategoriesController");
const { verifyUserIsAdmin } = require("../../middleware/validateToken");
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
/**
  * @swagger
  * /categories/upload:
  *   post:
  *     tags:
  *       - Categories
  *     security:
  *       - Bearer: []
  *     consumes:
  *       - multipart/form-data
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: file
  *       in: formData
  *       type: file
  *       description: Category image upload
  *       required: true
  *     - name: title
  *       in: formData
  *       type: string
  *       description: Category Title
  *       required: true
  *     - name: desc
  *       in: formData
  *       type: string
  *       description: Category detailed description
  *       required: false
  *     - name: name
  *       in: formData
  *       type: string
  *       description: Category name
  *       required: false
  *     responses:
  *       200:
  *         description: New category created
  */

router.post("/upload", verifyUserIsAdmin, cc.upload.bind(cc), cc.insertToDbAfterUpload.bind(cc));

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
router.get("/", cc.getAllCategories)

module.exports = router;