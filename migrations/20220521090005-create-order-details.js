'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid:{
        allowNull: false,
        unique: true,
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"users"
          },
          key: "id"
        },
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING
      },
      payment_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('OrderDetails');
  }
};