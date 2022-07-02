const jwt = require("jsonwebtoken");
const { auth } = require("../config/app.config");
const uc = require("../controller/UserController");

const validateToken = (req, res, next) => {
	let tokenValue = req.headers["authorization"];
	if (tokenValue) {
		jwt.verify(tokenValue, auth.jwt_secret, (err, data) => {
			if (err) {
				return res.status(500).json({ status:0, message:'Invalid Token' }) 
			} else {
				req.data = data;
				next();
			}
		})
	} else {
		return res.status(400).json({ status:0, message:'Token Needed' })
	}
}
const validateCurrentUser = (req, res, next) => {
	const tokenValue = req.headers["authorization"];
	if (tokenValue) {
		jwt.verify(tokenValue, auth.jwt_secret, (err, data) => {
			const user_id = req.body.user_id ? req.body.user_id : req.params.user_id;
			if (err) {
				return res.status(500).json({ status:-1, message:'Invalid Token' }) 
			} else if (user_id != data.id) {
				return res.status(403).json({ status:-1, message:'You are not perform action for a different user' }) 
			} else {
				req.data = data;
				next();
			}
		})
	} else {
		return res.status(400).json({ status:0, message:'Token Needed' })
	}
}
const verifyUserIsAdmin = (req, res, next) => {
	try {
		let tokenValue = req.headers["authorization"];
		if (tokenValue) {
			jwt.verify(tokenValue, auth.jwt_secret, async (err, data) => {
				if (err) {
					return res.status(500).json({ status:0, message:'Invalid Token' }) 
				} else {
					let role = await uc.getUserRole(req, data.id);
					if (role == "admin") {
						req.data = data;
						next();
					} else {
						return res.status(403).json({ status:0, message:'Sorry you are not an admin' }) 
					}
				}
			})
		} else {
			return res.status(400).json({ status:0, message:'Token Needed' })
		}
	} catch (err) {
		console.log("error occured ==", err);
	}
}

module.exports = { validateToken, verifyUserIsAdmin, validateCurrentUser }