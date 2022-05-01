const _ = require('lodash');
const reqHandler = require("../helpers/utils/RequestHandler");
//p.then(onFulfilled[, onRejected]); - used this after await
class BaseController {
    constructor(options){
        this.limit = 20;
		this.options = options;
    }
	getDataValueFromSequelizeRes(seq_res){
		if(Array.isArray(seq_res)){
			return seq_res.map(s=>{
				return s.dataValues
			});
		}
		return seq_res.dataValues;
	}
    async getById(req,modelName,id){
        const reqParam = req?req.params.id:id;
		let result;
		try {
			result = await req.app.get('db')[modelName].findByPk(reqParam);
			reqHandler.throwIf(result => !result, 404, 'not found', 'Resource not found');
		} catch (err) {
			let errorObj = err.status && err.errorType ? err : {status:500,errorType:"sequelize error ,some thing wrong with either the data base connection or schema",errorMsg:err};
			return Promise.reject(errorObj);
		}
		return result;
    }
    async getByCustomOptions(req,modelName,options){
		console.log("in getByCustom")
        let result;
		try {
			result = await req.app.get('db')[modelName].findOne(options);
		} catch (err) {
			return Promise.reject(err);
		}
		return result;
    }
	async getAllByCustomOptions(req,modelName,options){
        let result;
		try {
			if(options)
				result = await req.app.get('db')[modelName].findAll(options);
			else
				result = await req.app.get('db')[modelName].findAll();
		} catch (err) {
			return Promise.reject(err);
		}
		return result;
    }
    async deleteById(req,modelName){
        const reqParam = req.params.id;
		let result;
		try {
			result = await req.app.get('db')[modelName].destroy({
				where: {
					id: reqParam,
				},
			})
			reqHandler.throwIf(r => r < 1, 404, 'not found', 'No record matches the Id provided');
			//return Promise.resolve(result)
		} catch (err) {
			let errorObj = err.status && err.errorType ? err : {status:500,errorType:"sequelize error",errorMsg:err}; //if errorObj is already formed then use it
			return Promise.reject(errorObj);
		}
		return result;
    }
    async create(req,modelName,data,transaction){
        let obj = data;
		if (_.isUndefined(obj)) {
			obj = req.body;
		}
		let result;
		try {
			result = await req.app.get('db')[modelName].build(obj).save(transaction);
			reqHandler.throwIf(result => !result, 500, 'Internal server error', 'something went wrong couldnt save data')
		} catch (err) {
			let errorObj = err.status && err.errorType ? err : {status:500,errorType:"sequelize error",errorMsg:err}; //if errorObj is already formed then use it
			return Promise.reject(errorObj);
		}
		return result;
    }
    async updateById(req,modelName,data){
        const recordID = req.params.id;
		let result;

		try {
			result = await req.app.get('db')[modelName]
				.update(data, {
					where: {
						id: recordID,
					},
				})
			reqHandler.throwIf(result => !result, 500, 'Internal server error', 'something went wrong couldnt update data')				
			//return Promise.resolve(updatedRecored)	
		} catch (err) {
			let errorObj = err.status && err.errorType ? err : {status:500,errorType:"sequelize error",errorMsg:err}; //if errorObj is already formed then use it
			return Promise.reject(errorObj);
		}
		return result;
    }
    async updateByCustomWhere(req,modelName,data,options){
        let result;

		try {
			result = await req.app.get('db')[modelName]
				.update(data, {
					where: options,
				})
			reqHandler.throwIf(result => !result, 500, 'Internal server error', 'something went wrong couldnt update data')
		} catch (err) {
			let errorObj = err.status && err.errorType ? err : {status:500,errorType:"sequelize error",errorMsg:err}; //if errorObj is already formed then use it
			return Promise.reject(errorObj);
		}
		return result;
    }
    async getList(req,modelName,options){
        const page = req.query.page;

		let results;
		try {
			if (_.isUndefined(options)) {
				options = {};
			}

			if (parseInt(page, 10)) {
				if (page === 0) {
					options = _.extend({}, options, {});
				} else {
					options = _.extend({}, options, {
						offset: this.limit * (page - 1),
						limit: this.limit,
					});
				}
			} else {
				options = _.extend({}, options, {}); // extend it so we can't mutate
			}

			results = await req.app.get('db')[modelName].findAll(options)
			reqHandler.throwIf(results => !results, 500, 'Internal server error', 'something went wrong while fetching data');
			//return Promise.resolve(results);
		} catch (err) {
			let errorObj = err.status && err.errorType ? err : {status:500,errorType:"sequelize error",errorMsg:err}; //if errorObj is already formed then use it
			return Promise.reject(errorObj);
		}
		 return results;
    }
}

module.exports = BaseController;