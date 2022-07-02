'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('types', [{
			name: 'Regular cakes',
			desc: 'These are cakes and designs which one may be familiar with. The normal regular ones.'
		},
		{
			name: 'Customized cakes',
			desc:'We customize cakes according to your needs. Trust us on this and we will nail it.'
		},
		{
			name: 'Designer cakes',
			desc:'We customize cakes according to your needs. Trust us on this and we will nail it.'
		},
		{
			name: 'Tall cakes',
			desc:'Tall cakes are in trend now,order yours!'
		},
		{
			name: 'Multi tier cakes',
			desc:'We make beautiful 2,3 etc tier cakes.'
		}, {
			name:"Trending cakes",
			desc:"We have got you covered with all sorts of trends so that you dont miss out on any."
		},
		{
			name:'Crunchy chewy cookies',
			desc:'Medium sized crunchy chewy cookies'
		}
		])
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
