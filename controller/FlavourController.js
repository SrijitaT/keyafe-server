const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class FlavourController extends BaseController{
  constructor(){
    super();
  }
  async getAllFlavours(req,res){
    //const options = {attributes:['id','variety','desc']};
    const options =  {attributes:{exclude:["flavour_id"]}}; //TODO: find alternative.somehow getting added by sequelize associations
    try{
      let flavour = await super.getAllByCustomOptions(req,"Flavour",options);
      flavour = super.getDataValueFromSequelizeRes(flavour);
      reqHandler.sendSuccess(res)(flavour);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
  async addNewflavour(req,res){
    let {variety,desc} = req.body;
    try{
      let result = await this.create(req, 'Flavour', { variety,desc });
      reqHandler.sendSuccess(res, 'Flavour created successfully')(result);
    }catch(err){
      reqHandler.sendError(req,res,err);
    }
  }
}


module.exports = new FlavourController();