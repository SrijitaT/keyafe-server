const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class DeliveryTimeSlotController extends BaseController {
	constructor () {
		super();
	}
	async getTimeSlotsByDeliveryType (req, res) {
		try {
			const { body } = req;
			const today = new Date();
			const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			const lastOrderTime = '18:00:00';
			const whereOptions = { delivery_type_id: req.params.delivery_type_id };
			let delivery_type = await super.getById(null, "DeliveryType", req.params.delivery_type_id);
			console.log("delivery_type==", delivery_type);
			delivery_type = super.getDataValueFromSequelizeRes(delivery_type);
			console.log("delivery_type==", delivery_type);
			console.log("date======", date);
			console.log("time====", currentTime);
			console.log(currentTime > '00:00:00')
			if (body.delivery_day == "tomorrow") {
				if (currentTime > lastOrderTime) {
					//dont include early morning delivery
				}
			}
			const options = { attributes:["id", "from", "to", "time_format"], where: whereOptions  };
			let deliveryTimeSlot = await super.getAllByCustomOptions(req, "DeliveryTimeSlot", options);
			console.log("now=======", new Date())
			deliveryTimeSlot = super.getDataValueFromSequelizeRes(deliveryTimeSlot); 
			reqHandler.sendSuccess(res)(deliveryTimeSlot);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}
  
}


module.exports = new DeliveryTimeSlotController();