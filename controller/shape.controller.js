const models = require("../models");


const getAllShapes = async function(req,res){
    try{
     let shape = await models.Shape.findAll();
     shape = shape.map(s=>s.dataValues);
     res.send(shape)
    }catch(err){
      res.status(500).send({"msg":"Something went wrong while fetching flavours"})
    }
}


const addNewShape = async function(req,res){
    try{
     let {name,desc} = req.body;
     let shape = await models.Shape.create({name,desc});
     console.log(shape)
     res.send(shape)
    }catch(err){
      res.status(500).send({"msg":"Something went wrong while adding shape"})
    }
}

module.exports={getAllShapes,addNewShape};