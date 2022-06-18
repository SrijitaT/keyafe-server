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
      this.belongsTo(models.Product,{foreignKey: "product_id"});
      this.belongsTo(models.User,{foreignKey: "user_id"});
      this.belongsTo(models.DeliveryType,{foreignKey: "delivery_type_id"});
      this.belongsTo(models.DeliveryTimeSlot, {foreignKey: "delivery_time_slot_id"});
    }
  }
  Cart.init({
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    delivery_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cart',
    freezeTableName: true
  });
  return Cart;
};