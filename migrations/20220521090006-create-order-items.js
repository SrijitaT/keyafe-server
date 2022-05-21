'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.UUID,
        references:{
          model:{
            tableName:"orderdetails"
          },
          key: "uid"
        },
        allowNull: false
      },
      product_id: {
        type: Sequelize.UUID,
        references:{
          model:{
            tableName:"products"
          },
          key: "id"
        },
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      prod_price: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING,
        defaultValue:"Rs"
      },
      delivery_date: {
        type: Sequelize.DATE
      },
      delivery_type_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"deliverytypes"
          },
          key: "id"
        },
        allowNull: false
      },
      delivery_time_slot_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"deliverytimeslots"
          },
          key: "id"
        },
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItems');
  }
};