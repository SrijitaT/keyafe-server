const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");
const Joi = require("joi");

class ProductDetailsController extends BaseController {
	constructor () {
		super();
	}
	async getProdDetails (req, res) {
		try {
			const schema = Joi.object({ id: Joi.number().min(1) });
			const { error } = schema.validate(req.params);
			reqHandler.validateJoi(error, 400, 'Bad Request', error ? error.message : 'Requires product details id to fetch details');
			const options = { where:{ id:req.params.id } };
			let prodDet = await super.getAllByCustomOptions(req, "ProductDetails", options);
			prodDet = super.getDataValueFromSequelizeRes(prodDet);
			reqHandler.sendSuccess(res)(prodDet);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}
}


module.exports = new ProductDetailsController();