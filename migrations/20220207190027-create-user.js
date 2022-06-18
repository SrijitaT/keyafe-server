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
      uid: {
        allowNull: false,
        unique: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      username: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email_id: {
        type: Sequelize.STRING,
        validate:{
          isEmail: true,
          notEmpty: true
        },
        allowNull:false
      },
      gender: {
        type: Sequelize.STRING,
        validate:{
          isIn: [['Male', 'Female']]
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      isRegistered: {type : Sequelize.BOOLEAN, defaultValue : true},
      birthday:{type: Sequelize.DATE},
      role: {
              allowNull : false,
              type : Sequelize.STRING,
              defaultValue : "customer"
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
    await queryInterface.dropTable('Users');
  }
};