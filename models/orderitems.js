'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItems.init({
    order_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    prod_price: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    delivery_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'OrderItems',
  });
  return OrderItems;
};