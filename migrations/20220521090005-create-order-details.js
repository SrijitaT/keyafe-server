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
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
        type: Sequelize.STRING,
        defaultValue: "Rs"
      },
      /*payment_id: {
        type: Sequelize.STRING
      },*/
      source: {
        type: Sequelize.ENUM("website","admin","others"),
        defaultValue: "website"
      },
      taken_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"users"
          },
          key: "id"
        }
      }, //if its taken by any admin
      reference_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      reference_relation: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('OrderDetails');
  }
};