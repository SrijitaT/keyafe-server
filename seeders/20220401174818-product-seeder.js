'use strict';
const {serverUrl} = require('../config/url.config');
const {v4: uuidv4} = require('uuid');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      id:uuidv4(),
      title: 'Fenced Black Forest cake',
      img_url: `${serverUrl}/uploads/images/products/blackforest1-1_1645990159567.jpg`,
      cat_id: 1,
      type_id: 1,
      shape_id: 1,
      original_flavour_id:10,
      prod_det_id:1
    },
    {
      id:uuidv4(),
      title: 'Choco chunk cookies',
      img_url: `${serverUrl}/uploads/images/products/chocochunkcookies_1645990492541.jpeg`,
      cat_id: 2,
      type_id: 7,
      shape_id: 1,
      original_flavour_id:24,
      prod_det_id:2
    },
    {
      id:uuidv4(),
      title: 'Chocolate praline cake',
      img_url: `${serverUrl}/uploads/images/products/chocolate-praline_1645990122535.jpeg`,
      cat_id: 1,
      type_id: 1,
      shape_id: 1,
      original_flavour_id:18,
      prod_det_id:3
    },
    {
      id:uuidv4(),
      title: 'Designer anniversary cake',
      img_url: `${serverUrl}/uploads/images/products/designer1_1645990261513.jpeg`,
      cat_id: 1,
      type_id: 3,
      shape_id: 3,
      original_flavour_id:2,
      prod_det_id:4
    },
    {
      id:uuidv4(),
      title: 'Rasmalai Cake',
      img_url: `${serverUrl}/uploads/images/products/rasmalai_1_1645890860580.jpg`,
      cat_id: 1,
      type_id: 1,
      shape_id: 1,
      original_flavour_id:7,
      prod_det_id:5
    },
    {
      id:uuidv4(),
      title: 'Colourful cake with rice paper sails',
      img_url: `${serverUrl}/uploads/images/products/designer2_1645990261515.jpeg`,
      cat_id: 1,
      type_id: 3,
      shape_id: 1,
      original_flavour_id:13,
      prod_det_id:6
    },
    {
      id:uuidv4(),
      title: 'Housespecial Spicy chicken tikki naan',
      img_url: `${serverUrl}/uploads/images/products/tikkinaan_1645890860585.jpeg`,
      cat_id: 3,
      type_id: 1,
      shape_id: null,
      original_flavour_id:null,
      prod_det_id:7
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
