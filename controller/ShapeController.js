const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class ShapeController extends BaseController{
  constructor(){
    super();
  }
  async getAllShapes(req,res){
    try{
      const options = null;
      let shape = await super.getAllByCustomOptions(req,"Shape",options);
      shape = super.getDataValueFromSequelizeRes(shape);
      reqHandler.sendSuccess(res)(shape);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
  async addNewShape(req,res){
    const {name,desc} = req.body;
    try{
      const result = await this.create(req, 'Shape', { name,desc });
      reqHandler.sendSuccess(res, 'Shape created successfully')(result);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
}


module.exports = new ShapeController();