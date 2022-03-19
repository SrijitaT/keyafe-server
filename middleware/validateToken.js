const jwt = require("jsonwebtoken");
const keys = require("../config/jwt/keys");
const {getUserRole} = require("../controller/user.controller");

let validateToken = (req,res,next) => {
    let tokenValue = req.headers["authorization"];
    if(tokenValue){
        jwt.verify(tokenValue,keys.secretOrKey,(err,data) => {
            if(err){
                return res.status(500).json({status:0,message:'Invalid Token'}) 
            }else{
               req.data = data;
               next();
            }
        })
    }else{
        return res.status(400).json({status:0,message:'Token Needed'})
    }
}

let verifyUserIsAdmin = (req,res,next) => {
    let tokenValue = req.headers["authorization"];
    if(tokenValue){
        jwt.verify(tokenValue,keys.secretOrKey,async (err,data) => {
            if(err){
                return res.status(500).json({status:0,message:'Invalid Token'}) 
            }else{
                let role = await getUserRole(data.id);
               if(role=="admin"){
                    req.data = data;
                    next();
               }else{
                    return res.status(403).json({status:0,message:'Sorry you are not an admin'}) 
               }
            }
        })
    }else{
        return res.status(400).json({status:0,message:'Token Needed'})
    }
}

module.exports = {validateToken,verifyUserIsAdmin}