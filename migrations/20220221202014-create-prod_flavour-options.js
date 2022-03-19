'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prod_Flavour_options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prod_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"products"
          },
          key: "id"
        },
        allowNull: false
      },
      flavour_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"flavours"
          },
          key: "id"
        },
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prod_Flavour_options');
  }
};