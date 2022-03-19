'use strict';
const {serverUrl} = require('../config/url.config');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      title: 'Fenced Black Forest cake',
      img_url: `${serverUrl}/uploads/images/products/blackforest1-1_1645990159567.jpg`,
      desc: 'A black forest cake surrounded by fence like looking chocolate',
      cat_id: 6,
      qty: 1,
      type_id: 1,
      unit_price: 550,
      weight: 500,
      shape_id: 1,
      original_flavour_id:10
    },
    {
      title: 'Choco chunk cookies',
      img_url: `${serverUrl}/uploads/images/products/chocochunkcookies_1645990492541.jpeg`,
      desc: 'Delicious chewy and crunchy choco chunk cookies',
      cat_id: 7,
      qty: 10,
      type_id: 7,
      unit_price: 150,
      weight: 200,
      shape_id: 1,
      original_flavour_id:24
    },
    {
      title: 'Chocolate praline cake',
      img_url: `${serverUrl}/uploads/images/products/chocolate-praline_1645990122535.jpeg`,
      desc: 'Rich chocolate cake with caramelized nuts.Its so yummy you cant stop at one bite',
      cat_id: 6,
      qty: 1,
      type_id: 1,
      unit_price: 550,
      weight: 500,
      shape_id: 1,
      original_flavour_id:18
    },
    {
      title: 'Designer anniversary cake',
      img_url: `${serverUrl}/uploads/images/products/designer1_1645990261513.jpeg`,
      desc: 'A black forest cake surrounded by fence like looking chocolate',
      cat_id: 6,
      qty: 1,
      type_id: 3,
      unit_price: 1000,
      weight: 600,
      shape_id: 3,
      original_flavour_id:2
    },
    {
      title: 'Rasmalai Cake',
      img_url: `${serverUrl}/uploads/images/products/rasmalai_1_1645890860580.jpg`,
      desc: 'Cake filled with layers of rasmalai cream',
      cat_id: 6,
      qty: 1,
      type_id: 1,
      unit_price: 650,
      weight: 500,
      shape_id: 1,
      original_flavour_id:7
    },
    {
      title: 'Colourful cake with rice paper sails',
      img_url: `${serverUrl}/uploads/images/products/designer2_1645990261515.jpeg`,
      desc: 'Colourful cake with rice paper sails',
      cat_id: 6,
      qty: 1,
      type_id: 3,
      unit_price: 550,
      weight: 500,
      shape_id: 1,
      original_flavour_id:13
    },
    {
      title: 'Housespecial Spicy chicken tikki naan',
      img_url: `${serverUrl}/uploads/images/products/tikkinaan_1645890860585.jpeg`,
      desc: 'Spicy chicken tikki naan',
      cat_id: 8,
      qty: 4,
      type_id: 1,
      unit_price: 250,
      weight: 300,
      shape_id: null,
      original_flavour_id:null
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
