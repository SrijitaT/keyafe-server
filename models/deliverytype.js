'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeliveryType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeliveryType.init({
    type: DataTypes.STRING,
    desc: DataTypes.STRING,
    charge_per_km: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DeliveryType',
    timestamps: false
  });
  return DeliveryType;
};