const express = require("express");
const router = express.Router();
const uc = require("../../controller/UserController");
const uac = require("../../controller/UserAddressController");
const { validateCurrentUser } = require("../../middleware/validateToken");
/**
  * @swagger
  * /users/register:
  *   post:
  *     tags:
  *       - Auth
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: Register user
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - email_id
  *           - password
  *         properties:
  *           email_id:
  *             type: string
  *           password: 
  *             type: string
  *           username:
  *             type: string
  *           name:
  *             type: string
  *           phone:
  *             type: string
  *           gender:
  *             type: string
  *           birthday:
  *             type: string
  *             format: date
  *     responses:
  *       201:
  *         description: User registered successfully!
  */
router.post("/register", uc.registerUser);

/**
  * @swagger
  * /users/login:
  *   post:
  *     tags:
  *       - Auth
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: the login credentials
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - email_id
  *           - password
  *         properties:
  *           email_id:
  *             type: string
  *           password: 
  *             type: string
  *     responses:
  *       200:
  *         description: user logged in succesfully
  */
router.post("/login", uc.loginUser.bind(uc));

/**
  * @swagger
  * /users/address:
  *   post:
  *     tags:
  *       - Users
  *     security:
  *       - Bearer: []
  *     produces:
  *       - application/json
  *     parameters:
  *     - name: body
  *       in: body
  *       description: Add address
  *       required: true
  *       schema:
  *         type: object
  *         required:
  *           - user_id
  *           - address_line1
  *           - pincode
  *         properties:
  *           user_id:
  *             type: integer
  *           phone:
  *             type: string
  *           address_line1:
  *             type: string
  *           address_line2:
  *             type: string
  *           pincode:
  *             type: string
  *           country:
  *             type: string
  *           state:
  *             type: string
  *           city:
  *             type: string
  *           isDefault:
  *             type: boolean
  *           address_type:
  *             type: string
  *     responses:
  *       201:
  *         description: Address added successfully!
  */

router.post("/address", validateCurrentUser, uac.add.bind(uac))
/**
 * @swagger
 * /users/address/{user_id}:
 *   get:
 *     tags:
 *       - Users
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *      - name: user_id
 *        description: Get all addresses of the given user_id
 *        in: path
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         description: Retrieved Productdetails of a particular product
 */
router.get("/address/:user_id", validateCurrentUser, uac.getAddressByUserId.bind(uac))

module.exports = router;