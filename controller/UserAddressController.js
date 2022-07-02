const jwt = require("jsonwebtoken");
const Joi = require('joi');

const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class UserAddressController extends BaseController {
	constructor () {
		super();
	}
	async add (req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				user_id:Joi.number(),
				address_line1: Joi.string().required(),
				address_line2: Joi.string(),
				pincode: Joi.string().min(5).max(6),
				phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
				address_type:Joi.string().valid("Home", "Work", "Other"),
				country: Joi.string(), state: Joi.string(), city: Joi.string(),
				isDefault: Joi.bool()
			});

			const { error } = schema.validate(data);
			reqHandler.validateJoi(error, 400, 'bad Request', error ? error.message : '');
        
			const result = await super.create(req, 'UserAddress', data);
			reqHandler.sendSuccess(res, "Address added successfully!", 201)(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}
	async getAddressByUserId (req, res) {
		try {
			const schema = Joi.object({ user_id: Joi.number().min(1) });
			const { error } = schema.validate(req.params);
			reqHandler.validateJoi(error, 400, 'Bad Request', error ? error.message : 'Invalid user id');
			const options = { where:{ user_id:req.params.user_id } };
			let userAdd = await super.getAllByCustomOptions(req, "UserAddress", options);
			userAdd = super.getDataValueFromSequelizeRes(userAdd);
			reqHandler.sendSuccess(res)(userAdd);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}
}

module.exports = new UserAddressController();