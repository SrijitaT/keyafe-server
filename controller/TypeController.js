const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class TypeController extends BaseController{
  constructor(){
    super();
  }
  async getAllTypes(req,res){
    //const options = {attributes:["id","name"]};
    const options =  {attributes:{exclude:["type_id"]}}; //TODO: find alternative.somehow getting added by sequelize associations.
    try{
      let type = await super.getAllByCustomOptions(req,"Type",options);
      type = super.getDataValueFromSequelizeRes(type); 
      reqHandler.sendSuccess(res)(type);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
  async addNewType(req,res){
    let {name,desc} = req.body;
    try{
      let result = await this.create(req, 'Type', { name,desc });
      reqHandler.sendSuccess(res, 'Type created successfully')(result);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
}


module.exports = new TypeController();