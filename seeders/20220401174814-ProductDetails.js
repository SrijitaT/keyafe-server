'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productdetails', [{
      desc:'A black forest cake surrounded by fence like looking chocolate',
      qty: 1,
      qty_measure:"piece",
      unit_price: 550,
      currency:"Rs",
      weight: 500,
      unit:"gm"
    },
    {
      desc: 'Delicious chewy and crunchy choco chunk cookies',
      qty: 10,
      qty_measure:"per box",
      unit_price: 150,
      currency:"Rs",
      unit:"gm",
      weight: 200
    },
    {
      desc: 'Rich chocolate cake with caramelized nuts.Its so yummy you cant stop at one bite',
      qty: 1,
      unit_price: 550,
      weight: 500,
      currency:"Rs",
      unit:"gm",
      qty_measure:"piece"
    },
    {
      desc: 'A black forest cake surrounded by fence like looking chocolate',
      qty: 1,
      unit_price: 1000,
      weight: 600,
      currency:"Rs",
      unit:"gm",
      qty_measure:"piece"
    },
    {
      desc: 'Cake filled with layers of rasmalai cream',
      qty: 1,
      unit_price: 650,
      weight: 500,
      currency:"Rs",
      unit:"gm",
      qty_measure:"piece"
    },
    {
      desc: 'Colourful cake with rice paper sails',
      qty: 1,
      unit_price: 550,
      weight: 500,
      currency:"Rs",
      unit:"gm",
      qty_measure:"piece"
    },
    {
      desc: 'Spicy chicken tikki naan',
      qty: 4,
      unit_price: 250,
      weight: 300,
      currency:"Rs",
      unit:"gm",
      qty_measure:"per box"
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
