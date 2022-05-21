const express = require("express");
const router = express.Router();
const pc = require("../../controller/ProductController");
const {verifyUserIsAdmin} = require("../../middleware/validateToken");
/**
   * @swagger
   * definitions:
   *   products:
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
  * /products/upload:
  *   post:
  *     tags:
  *       - Products
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
  *       description: Product image upload
  *       required: true
  *     - name: title
  *       in: formData
  *       type: string
  *       description: Product Title
  *       required: true
  *     - name: desc
  *       in: formData
  *       type: string
  *       description: Product detailed description
  *       required: true
  *     - name: cat_id
  *       in: formData
  *       type: integer
  *       description: Category ID
  *       required: true
  *     - name: type_id
  *       in: formData
  *       type: integer
  *       description: Type ID
  *       required: true
  *     - name: shape_id
  *       in: formData
  *       type: integer
  *       description: Shape ID
  *       required: true
  *     - name: original_flavour_id
  *       in: formData
  *       type: integer
  *       description: Original flavour ID
  *       required: true
  *     - name: unit_price
  *       in: formData
  *       type: integer
  *       description: Price per unit(box wise or piece wise)
  *       required: true
  *     - name: unit
  *       in: formData
  *       type: string
  *       description: Unit of weight kg/gm ?
  *       required: false
  *     - name: qty
  *       in: formData
  *       type: integer
  *       description: How many pieces will be there in one box?
  *       required: false
  *     - name: weight
  *       in: formData
  *       type: integer
  *       description: Weight of the box of cake
  *       required: false
  *     - name: currency
  *       in: formData
  *       type: string
  *       description: Currency - default rs
  *       required: false
  *     - name: qty_measure
  *       in: formData
  *       type: string
  *       description: What is the measure of the field qty?piece/box   
  *       required: false   
  *     responses:
  *       200:
  *         description: New Product created
  */
router.post("/upload",verifyUserIsAdmin, pc.upload.bind(pc),pc.insertToDbAfterUpload.bind(pc));

/**
 * @swagger
 * /products/{category_name}:
 *   get:
 *     tags:
 *       - Products
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: category_name
 *        description: category name to get list of all products under that category
 *        in: path
 *        required: true
 *        type: string
 *      - in: query
 *        name: page
 *        required: true
 *        schema:
 *           type: integer
 *        description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: Retrieved all Products of a particular category
 *         schema:
 *           $ref: '#/definitions/products'
 */

router.get("/:category_name",pc.getProductsByCategory.bind(pc))
/**
 * @swagger
 * /products/{prod_id}:
 *   put:
 *     tags:
 *       - Products
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: prod_id
 *        description: category name to get list of all products under that category
 *        in: path
 *        required: true
 *        type: string
 *      - in: body
 *        name: body
 *        required: true
 *        schema:
 *           type: object
 *        properties:
 *           title:
 *             type: string
 *           cat_id: 
 *             type: integer
 *           type_id:
 *             type: integer
 *           prod_det_id: 
 *             type: integer
 *           shape_id:
 *             type: integer
 *           original_flavour_id: 
 *             type: integer
 *           img_url:
 *             type: string
 *     responses:
 *       200:
 *         description: Updated product
 */

router.put("/:prod_id",verifyUserIsAdmin,pc.updateProduct.bind(pc))
module.exports = router;