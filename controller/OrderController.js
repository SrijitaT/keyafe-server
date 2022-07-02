const BaseController = require("./BaseController");
const reqHandler = require("../helpers/utils/RequestHandler");


class CartController extends BaseController {
	constructor () {
		super();
	}

	async getOrderByUserId (req, res) {
		const { quantity, prod_price, currency, delivery_date, product_id, delivery_type_id, delivery_time_slot_id } = req.body;
		try {
			const result = await this.create(req, 'Cart', { quantity, prod_price, currency, delivery_date, product_id, user_id: req.data.id, delivery_type_id, delivery_time_slot_id });
			reqHandler.sendSuccess(res, 'Cart created successfully')(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}

	async getOrderHistoryByUserId (req, res) {
		try {
			const result = await this.updateById(req, 'Cart', req.body);
			reqHandler.sendSuccess(res, 'Cart updated successfully')(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}


	async getAllOrders (req, res) {
		try {
			const result = await this.updateById(req, 'Cart', req.body);
			reqHandler.sendSuccess(res, 'Cart updated successfully')(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}

	async addNewOrder (req, res) {
		try {
			const result = await this.updateById(req, 'Cart', req.body);
			reqHandler.sendSuccess(res, 'Cart updated successfully')(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}

	async updateOrderDetail (req, res) {
		try {
			const result = await this.updateById(req, 'Cart', req.body);
			reqHandler.sendSuccess(res, 'Cart updated successfully')(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}

	async updateOrderItem (req, res) {
		try {
			const result = await this.updateById(req, 'Cart', req.body);
			reqHandler.sendSuccess(res, 'Cart updated successfully')(result);
		} catch (err) {
			reqHandler.sendError(req, res, err);
		}
	}
	

}


module.exports = new CartController();