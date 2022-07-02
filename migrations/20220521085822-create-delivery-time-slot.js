'use strict';
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('DeliveryTimeSlots', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			from: {
				type: Sequelize.TIME
			},
			to: {
				type: Sequelize.TIME
			},
			delivery_type_id: {
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"deliverytypes"
					},
					key: "id"
				},
				allowNull: false
			},
			time_format: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
			}
		});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('DeliveryTimeSlots');
	}
};