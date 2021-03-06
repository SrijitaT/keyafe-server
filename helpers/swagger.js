const express = require('express');

const router = express.Router();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const config = require('../config/app.config.js');

const paths=['./routes/api/users.js', './routes/api/categories.js',
	'./routes/api/products.js', './routes/api/shape.js', './routes/api/type.js',
	'./routes/api/flavours.js', './routes/api/productDetails.js']
const options = {
	swaggerDefinition: {
		info: {
			title: 'Keyafe',
			version: '1.0.0',
			description: 'Keyafe ecommerce Swagger doc',
			contact: {
				email: 'keyafe15@gmail.com',
			},
		},
		tags: [
			{
				name: 'Auth',
				description: 'Authentication apis',
			},
			{
				name: 'Users',
				description: 'All apis related to user',
			},
			{
				name: 'Categories',
				description: 'for retrieving, adding,removing and updating categories',
			},
			{
				name: 'Products',
				description: 'for retrieving, adding,removing and updating products',
			},
			{
				name: 'Product Details',
				description: 'for retrieving, adding,removing and updating product details',
			},
			{
				name: 'Types',
				description: 'for retrieving, adding,removing and updating types',

			},
			{
				name: 'Shapes',
				description: 'for retrieving, adding,removing and updating shapes',

			},
			{
				name: 'Flavours',
				description: 'for retrieving, adding,removing and updating flavours',

			},
		],
		schemes: ['http'],
		host: `localhost:${config.app.port}`,
		basePath: '/api/',
		securityDefinitions: {
			Bearer: {
				type: 'apiKey',
				description: 'JWT authorization of an API',
				name: 'Authorization',
				in: 'header',
			},
		},
	},

	apis: paths,
};
const swaggerSpec = swaggerJSDoc(options);
require('swagger-model-validator')(swaggerSpec);

router.get('/json', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec);
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

function validateModel (name, model) {
	const responseValidation = swaggerSpec.validateModel(name, model, false, true);
	if (!responseValidation.valid) {
		throw new Error('Model doesn\'t match Swagger contract');
	}
}

module.exports = {
	router,
	validateModel,
};