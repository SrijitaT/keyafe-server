'use strict';
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('Flavours', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			variety: {
				type: Sequelize.STRING
			},
			desc: {
				type: Sequelize.STRING(500)
			},
			speciality: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			new_flavour:{
				type: Sequelize.BOOLEAN,
				defaultValue: false
			}
		});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Flavours');
	}
};