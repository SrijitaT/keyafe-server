'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('shapes', [{
			name: 'Round',
			desc: 'Circlular'
		},
		{
			name: 'Rectangle',
			desc:'Rectangular'
		},
		{
			name: 'Square',
			desc:'Square'
		},
		{
			name: 'Triangle',
			desc:'Triangular'
		},
		{
			name: 'Sphere',
			desc:'Spherical'
		},
		{
			name: 'Alphabet',
			desc:'Cakes looking like Alphabets'
		},
		{
			name: 'Number',
			desc:'Cakes looking like Numbers'
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
