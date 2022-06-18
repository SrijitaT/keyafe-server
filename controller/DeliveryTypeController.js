const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class DeliveryTypeController extends BaseController {
  constructor(){
    super();
  }
  async getDeliveryTypes(req,res) {
    try {
        const options = {"attributes":["id","type","desc"]};
        let deliveryType = await super.getAllByCustomOptions(req,"DeliveryType",options);
        deliveryType = super.getDataValueFromSequelizeRes(deliveryType); 
        reqHandler.sendSuccess(res)(deliveryType);
      } catch(err) {
        reqHandler.sendError(req,res,err);
      }
  }
}

module.exports = new DeliveryTypeController();