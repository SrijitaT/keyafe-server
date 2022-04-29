const jwt = require("jsonwebtoken");
const {auth} = require("../config/app.config");
const moment = require("moment");
const Joi = require('joi');

const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class UserController extends BaseController{
  constructor(){
    super();
  }
  async getUserRole(req,id){
    try{
        req.params.id = id;
        const user = await this.getById(req,'User',id)
        return user.dataValues.role;
    }catch(err){
          console.log("caught err in getUserRole ",err)
    }
  }
  async registerUser(req,res){
    try{
            const data = req.body;
            const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            const strongPassswordError = new Error("Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length")
			const schema = Joi.object({
				email_id: Joi.string().email().required(),name: Joi.string().required(),
                username: Joi.string().required(),
                phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
                address: Joi.string(),pincode: Joi.string(),gender:Joi.any().valid("Male", "Female"),
                country: Joi.string(),state: Joi.string(),city: Joi.string(),
                password: Joi.string().regex(strongPasswordRegex).error(strongPassswordError).required(),birthday: Joi.date()
			});

			const { error } = schema.validate(data);
			reqHandler.validateJoi(error, 400, 'bad Request', error ? error.message : '');
            
            let result = super.create(req,'User',data);
            reqHandler.sendSuccess(res,"User registered successfully!",201)(result);
    }catch(err){
                reqHandler.sendError(req,res,err);
    }

  }
 async loginUser(req,res){
    const schema = Joi.object({
        email_id: Joi.string().email().required(),
        password: Joi.string().required()
    });
    try {
    const { error } = schema.validate(req.body);
    reqHandler.validateJoi(error, 400, 'bad Request', error ? error.message : '');
    let current_user;
    
        current_user = await super.getByCustomOptions(req,'User',{ where: { email_id:req.body.email_id } })
        
        if (!current_user) {
            reqHandler.throwError(400, 'bad request', 'invalid email address')();
        }
        
        if(!current_user.dataValues.isRegistered || !current_user.dataValues.password){
            reqHandler.throwError(403, 'You cannot login since you are not registered!!', 'Forbidden Access')();
        }
    
    const isMatch = await current_user.isValidPassword(req.body.password);
    current_user = super.getActualObjFromSequelizeRes(current_user);
    if (isMatch) {
        //User Matched
        let payload = {...current_user}; //Create JWT payload
        payload = {id:payload.id,name:payload.username,email_id:payload.email_id};

        //Sign Token
        jwt.sign(
            payload,auth.jwt_secret,{ expiresIn: 3600 },
            (err, token) => {
                if(token){
                    const resp = {token: "Bearer " + token};
                    reqHandler.sendSuccess(res,"Login Successful",200)({},resp);
                }else{
                    reqHandler.sendError(req,res,err);
                }
            }
        );
    } else {
        reqHandler.sendError(req,res,{"msg":"Password Incorrect!",status:400});
    }
}
catch (err) {
    reqHandler.sendError(req,res,err)
}
  }
  
}




module.exports = UserController