'use strict';
const { serverUrl } = require('../config/url.config');

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('categories', [{
			name: 'Celebration cakes',
			title: 'Celebration cakes',
			img_url: `${serverUrl}/uploads/images/categories/cake2_1645899193450.jpg`,
			desc: 'We make all sorts of Regular,designer and customized cakes. We donot compromise in quality and taste'
		},
		{
			name: 'Cookies',
			title: 'Delicious cookies of all varieties',
			img_url: `${serverUrl}/uploads/images/categories/cookies_1645900171939.jpeg`,
			desc: 'Cookies of different flavours and textures are made. Super delicious!'
		},
		{
			name: 'Savoury items(Snacks)',
			title: 'Innovative and delicious savoury items',
			img_url: `${serverUrl}/uploads/images/categories/chickenpopcorn_1645900353513.jpg`,
			desc: 'We are here to satisfy your snacks cravings with mouthwatering savoury items'
		},
		{
			name: 'Dry cake',
			title: 'Loaf cakes,brownies,brookies,blondies',
			img_url: `${serverUrl}/uploads/images/categories/loafcakes_1645900120732.jpg`,
			desc: 'Dont like creamy cakes? No problem,try our range of cakes without cream'
		},
		{
			name: 'Pizza and Breads',
			title: 'Pizza and Breads',
			img_url: `${serverUrl}/uploads/images/categories/pizza_1645900398678.jpg`,
			desc: 'Delectable pizzas and regular breads'
		}
		], {});
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
