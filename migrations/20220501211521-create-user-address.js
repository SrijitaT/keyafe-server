'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserAddress', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      address_line1: {
        type: Sequelize.STRING
      },
      address_line2: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      },
      country : {
        type : Sequelize.STRING,
        defaultValue: "India"
      },
      state : {
        type : Sequelize.STRING,
        defaultValue: "West Bengal"
      },
      city : {
        type:Sequelize.STRING,
        defaultValue: "Kolkata"
      },
      phone: {
        type: Sequelize.STRING
      },
      isDefault:{
        type: Sequelize.BOOLEAN
      },
      address_type:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserAddress');
  }
};