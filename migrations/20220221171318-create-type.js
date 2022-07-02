'use strict';
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('Types', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			desc: {
				type: Sequelize.STRING
			}
		}, { timestamps:false });
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Types');
	}
};