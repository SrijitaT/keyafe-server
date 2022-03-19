const models = require("../models");


const getAllFlavours = async function(req,res){
    try{
     let flavour = await models.Flavour.findAll({attributes:['id','variety','desc']});
     flavour = flavour.map(c=>c.dataValues);
     res.send(flavour)
    }catch(err){
      res.status(500).send({"msg":"Something went wrong while fetching flavours"})
    }
}


const addNewflavour = async function(req,res){
    try{
     
     let {variety,desc} = req.body;
     console.log("re.body====",variety,desc)
     let flavour = await models.Flavour.create({variety,desc});
     //flavour = flavour.map(c=>c.dataValues);
     console.log(flavour)
     res.send(flavour)
    }catch(err){
      res.status(500).send({"msg":"Something went wrong while adding flavours"})
    }
}

module.exports={getAllFlavours,addNewflavour};