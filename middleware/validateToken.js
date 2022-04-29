const jwt = require("jsonwebtoken");
const {auth} = require("../config/app.config");
const UC = require("../controller/UserController");
const uc = new UC();

let validateToken = (req,res,next) => {
    let tokenValue = req.headers["authorization"];
    if(tokenValue){
        jwt.verify(tokenValue,auth.jwt_secret,(err,data) => {
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
    try{
    let tokenValue = req.headers["authorization"];
    if(tokenValue){
        jwt.verify(tokenValue,auth.jwt_secret,async (err,data) => {
            if(err){
                return res.status(500).json({status:0,message:'Invalid Token'}) 
            }else{
                let role = await uc.getUserRole(req,data.id);
               if(role == "admin"){
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
}catch(err){
    console.log("error occured ==",err);
}
}

module.exports = {validateToken,verifyUserIsAdmin}