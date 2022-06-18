const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class CartController extends BaseController{
  constructor(){
    super();
  }
//   async getAllTypes(req,res){
//     try{
//       const options = null;
//       let type = await super.getAllByCustomOptions(req,"Type",options);
//       type = super.getDataValueFromSequelizeRes(type); 
//       reqHandler.sendSuccess(res)(type);
//     }catch(err){
//       reqHandler.sendError(req,res,err);
//     }
//   }
  async addNewCartItem(req,res){
    const {quantity,prod_price,currency,delivery_date,product_id,delivery_type_id,delivery_time_slot_id} = req.body;
    try {
      const result = await this.create(req, 'Cart', {quantity,prod_price,currency,delivery_date,product_id,user_id: req.data.id ,delivery_type_id,delivery_time_slot_id});
      reqHandler.sendSuccess(res, 'Cart created successfully')(result);
    } catch(err) {
      reqHandler.sendError(req,res,err);
    }
  }

  async updateCartItem(req,res){
    try {
      const result = await this.updateById(req, 'Cart', req.body);
      reqHandler.sendSuccess(res, 'Cart updated successfully')(result);
    } catch(err) {
      reqHandler.sendError(req,res,err);
    }
  }
}


module.exports = new CartController();