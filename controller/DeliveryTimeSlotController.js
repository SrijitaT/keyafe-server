const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class DeliveryTimeSlotController extends BaseController {
  constructor(){
    super();
  }
  async getTimeSlotsByDeliveryType(req,res) {
    try {
      const options = { attributes:["id","from","to","time_format"], where:{delivery_type_id: req.params.delivery_type_id}  };
      let deliveryTimeSlot = await super.getAllByCustomOptions(req,"DeliveryTimeSlot",options);
      console.log("now=======",new Date())
      deliveryTimeSlot = super.getDataValueFromSequelizeRes(deliveryTimeSlot); 
      reqHandler.sendSuccess(res)(deliveryTimeSlot);
    } catch(err) {
      reqHandler.sendError(req,res,err);
    }
  }
  
}


module.exports = new DeliveryTimeSlotController();