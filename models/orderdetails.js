'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetails.init({
    user_id: DataTypes.STRING,
    total: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    //payment_id: DataTypes.STRING, //will add later
    address_id: DataTypes.INTEGER,
    source: {
      type: DataTypes.ENUM("website","admin","others"),
      defaultValue: "website"
    },
    taken_by: {
      type:DataTypes.INTEGER,
      allowNull:true
    }, //if its taken by any admin
    reference_name: {
      type:DataTypes.STRING,
      allowNull:true
    },
    reference_relation: {
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};