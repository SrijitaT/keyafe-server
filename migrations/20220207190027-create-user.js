'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email_id: {
        type: Sequelize.STRING,
        validate:{
          isEmail: true,
          notEmpty: true
        }
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING,
        validate:{
          isIn: [['Male', 'Female']]
        }
      },
      password: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER
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
      isRegistered: {type : Sequelize.BOOLEAN, defaultValue : true},
      birthday:{type: Sequelize.DATE},
      role: {type : Sequelize.STRING, defaultValue : "customer"},
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
    await queryInterface.dropTable('Users');
  }
};