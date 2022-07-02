'use strict';
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('ProductDetails', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			desc: {
				type: Sequelize.STRING(500)
			},
			qty: {
				type: Sequelize.INTEGER
			},
			unit_price: {
				type: Sequelize.INTEGER
			},
			weight: {
				type: Sequelize.INTEGER
			},
			currency: {
				type: Sequelize.STRING,
				defaultValue: "Rs"
			},
			unit:{
				type: Sequelize.STRING,
				defaultValue: "gm"
			},
			qty_measure:{
				type: Sequelize.STRING,
				defaultValue: "piece"
			}
		});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('ProductDetails');
	}
};