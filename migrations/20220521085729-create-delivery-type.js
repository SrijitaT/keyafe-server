'use strict';
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('DeliveryTypes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			type: {
				type: Sequelize.STRING
			},
			desc: {
				type: Sequelize.STRING
			},
			charge_per_km: {
				type: Sequelize.INTEGER
			}
		});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('DeliveryTypes');
	}
};