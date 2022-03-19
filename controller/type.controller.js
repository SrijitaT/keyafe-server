const models = require("../models");


const getAllTypes = async function(req,res){
    try{
     let type = await models.Type.findAll();
     type = type.map(t=>t.dataValues);
     res.send(type)
    }catch(err){
      res.status(500).send({"msg":"Something went wrong while fetching type"})
    }
}


const addNewType = async function(req,res){
    try{
     let {name,desc} = req.body;
     let type = await models.Type.create({name,desc});
     res.send(type)
    }catch(err){
      res.status(500).send({"msg":"Something went wrong while adding type"})
    }
}

module.exports={getAllTypes,addNewType};