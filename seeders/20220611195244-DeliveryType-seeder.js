'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('DeliveryTypes', [{
			type: "Standard",
			desc: "Standard delivery type",
			charge_per_km: 10
		},
		{
			type: "Specific time slot",
			desc: "Delivery within the selected 3 hours slot",
			charge_per_km: 15
		},
		{
			type: "Midnight",
			desc: "Midnight delivery type",
			charge_per_km: 20
		},
		{
			type: "Early morning",
			desc: "Early morning delivery type",
			charge_per_km: 20
		}
		], {})   
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	}
};
