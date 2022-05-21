'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    product_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    prod_price: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    delivery_date: DataTypes.DATE,
    delivery_type_id: DataTypes.INTEGER,
    delivery_time_slot_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};