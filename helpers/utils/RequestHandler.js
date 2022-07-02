const _ = require('lodash');
class RequestHandler {
	constructor () {
		/* if(!RequestHandler._instance){ //singleton
            RequestHandler._instance = this;
        }
        return RequestHandler._instance;*/
	}
	throwIf (cb, status, errorType, errorMessage) {
		return result => (cb(result) ? this.throwError(status, errorType, errorMessage)() : result);
	}

	validateJoi (err, status, errorType, errorMessage) {
		//return !_.isNull(err) ? this.throwError(status, errorType, errorMessage)() : '';
		return err ? this.throwError(status, errorType, errorMessage)() : '';
	}
	throwError (status, errorType, errorMsg) {
		// return (e) => {
		let e = new Error(errorMsg || 'Default Error');
		e.status = status;
		e.errorType = errorType;
		throw e;
		//};
	}
	catchError (res, error) {
		if (!error) error = new Error('Default error');
		res.status(error.status || 500).json({ type: 'error', message: error.message || 'Unhandled error', error });
	}
	sendSuccess (res, message, status) {
		return (data, globalData) => {
			if (_.isUndefined(status)) {
				status = 200;
			}
			res.status(status).json({
				type: 'success', message: message || 'Success result', data, ...globalData,
			});
		};
	}
	sendError (req, res, error) {
		return res.status(error.status || 500).json({
			type: 'error', message: error.message || error.message || 'Unhandled Error', error,
		});
	}
}
const ReqHandler = new RequestHandler();
//Object.freeze(singletonReqHandler)
module.exports = ReqHandler;