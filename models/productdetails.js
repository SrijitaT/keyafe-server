'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductDetails.init({
    desc: DataTypes.STRING,
    qty: DataTypes.STRING,
    unit_price: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    currency: DataTypes.INTEGER,
    qty_measure: DataTypes.STRING,
    unit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductDetails',
    timestamps: false
  });
  return ProductDetails;
};