'use strict';
const {
  Model
} = require('sequelize');
const OrderStatus = require("../helpers/utils/constants/status");

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
    msg_on_item: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    custom_instructions: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM(...Object.values(OrderStatus)),
      defaultValue: OrderStatus.RECEIVED
    },
    currency: {
      type: DataTypes.STRING,
      defaultValue: "Rs"
    },
    delivery_date: DataTypes.DATE,
    delivery_type_id: DataTypes.INTEGER,
    delivery_time_slot_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItems',
  });
  return OrderItems;
};