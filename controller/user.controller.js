const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const models = require("../models");
const keys = require("../config/jwt/keys");
const moment = require("moment");


const getUserRole = async function(id){
    const user = await models.User.findOne({ where: { id } });
    return user.dataValues.role;
}

const registerUser = async (req, res) => {
    /* const { errors, isValid } = validateRegisterInput(req.body);
     //Check validation
     if (!isValid) {
       return res.status(400).json(errors);
     }*/
    const errors = {};
    console.log("req.body.email---",req.body);
    const user = await models.User.findOne({ where: { email_id: req.body.email_id } });
    if (user) {
        errors.email_id = "Email already exists!";
        return res.status(400).json(errors);
    }
    else {
        try {
            models.User.create({
                name:req.body.name,
                username: req.body.username,
                phone: req.body.phone,
                address: req.body.address,
                pincode: req.body.pincode,
                email_id: req.body.email_id,
                gender:req.body.gender,
                country: req.body.country,
                state: req.body.state,
                city: req.body.city,
                password: req.body.password,
                birthday: moment(req.body.birthday, "DD-MM-YYYY")
            })
                .then(user => {
                    const { password, ...rest } = user.dataValues;
                    return res.status(200).json(rest);
                })
                .catch(err => res.status(400).json(err))
        }
        catch (err) {
            console.log(err);
        }
    }

}

const loginUser = async (req, res) => {
    const { email_id, password } = req.body;
    /*const { errors, isValid } = validateLoginInput(req.body);
    //Check validation
  
    if (!isValid) {
      return res.status(400).json(errors);
    }*/
    //Find the user by email
    const errors = {};
    try {
        var current_user = await models.User.findOne({ where: { email_id } });
        if (!current_user) {
            errors.email_id = "User not found!";
            return res.status(404).json(errors);
        }
        if(!current_user.dataValues.isRegistered || !current_user.dataValues.password){
            return res.status(403).json({"msg":"You cannot login since you are not registered!!"});
        }
    }
    catch (err) {
        console.log(err);
    }
    //Check   
    const isMatch = await current_user.isValidPassword(password);
    if (isMatch) {
        //User Matched
        let payload = {...current_user.dataValues}; //Create JWT payload
        payload = {id:payload.id,name:payload.username,email_id:payload.email_id};

        //Sign Token
        jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
                if(token){
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }else{
                throw err;
            }
            }
        );
    } else {
        errors.password = "Password incorrect!";
        return res.status(400).json(errors);
    }

}

module.exports = { registerUser, loginUser,getUserRole };