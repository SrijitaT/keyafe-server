'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('useraddress', [{
			user_id:1,
			phone:'9339072217',
			address_line1:'21 Banku Behari Ghosh lane',
			address_line2:'Belurmath-Howrah',
			pincode:'711202',
			country:'India',
			state:'West Bengal',
			city:'Kolkata',
			isDefault:true,
			address_type:"Home"
		},
		{
			user_id:2,
			address_line1:'95 xyz',
			address_line2:'GT road',
			pincode:'700202',
			country:'India',
			state:'West Bengal',
			city:'Kolkata',
			isDefault:true,
			address_type:"Home",
			phone:'8776532217'
		},
		{
			user_id:3,
			phone:'9674979475',
			address_line1:'246/180 Sahid Ganesh Dutta Road',
			address_line2:' Ramkrishna Pally Birati',
			pincode:'700051',
			country:'India',
			state:'West Bengal',
			city:'Kolkata',
			isDefault:true,
			address_type:"Home",
		}], {});
    
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
