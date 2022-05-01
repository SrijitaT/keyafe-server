const express = require("express");
const router = express.Router();
const uc = require("../../controller/UserController");
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
  *           address:
  *             type: string
  *           pincode:
  *             type: string
  *           gender:
  *             type: string
  *           country:
  *             type: string
  *           state:
  *             type: string
  *           city:
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



module.exports = router;