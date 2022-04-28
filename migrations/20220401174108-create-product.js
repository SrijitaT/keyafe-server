'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING
      },
      cat_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"categories"
          },
          key: "id"
        },
        allowNull: false
      },
      type_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"types"
          },
          key: "id"
        },
        allowNull: false
      },
      img_url: {
        type: Sequelize.STRING
      },
      shape_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"shapes"
          },
          key: "id"
        },
        allowNull: true
      },
      original_flavour_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"flavours"
          },
          key: "id"
        },
        allowNull: true
      },
      prod_det_id:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"productdetails"
          },
          key: "id"
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};