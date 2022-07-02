'use strict';
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('Cart', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			product_id: {
				type: Sequelize.UUID,
				references:{
					model:{
						tableName:"products"
					},
					key: "id"
				},
				allowNull: false
			},
			user_id: {
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"users"
					},
					key: "id"
				},
				allowNull: false
			},
			quantity: {
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			total_price: {
				type: Sequelize.INTEGER
			},
			currency: {
				type: Sequelize.STRING,
				defaultValue:"Rs"
			},
			delivery_date: {
				type: Sequelize.DATE
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
			delivery_time_slot_id: {
				type: Sequelize.INTEGER,
				references:{
					model:{
						tableName:"deliverytimeslots"
					},
					key: "id"
				},
				allowNull: true
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Cart');
	}
};