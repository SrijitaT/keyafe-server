'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeliveryTimeSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cart,{foreignKey: "delivery_time_slot_id"});
      this.belongsTo(models.DeliveryType,{foreignKey: "delivery_type_id"});
    }
  }
  DeliveryTimeSlot.init({
    from: DataTypes.TIME,
    to: DataTypes.TIME,
    time_format: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DeliveryTimeSlot',
  });
  return DeliveryTimeSlot;
};