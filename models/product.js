'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Categories,{foreignKey:'cat_id'})
      this.hasOne(models.Type,{foreignKey:'type_id'})
      this.hasOne(models.Shape,{foreignKey:'shape_id'})
      this.hasOne(models.Flavour,{foreignKey:'original_flavour_id'})
      this.hasOne(models.ProductDetails,{foreignKey:'prod_det_id'})
    }
  }
  Product.init({
    title: DataTypes.STRING,
    cat_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    shape_id: DataTypes.INTEGER,
    original_flavour_id: DataTypes.INTEGER,
    prod_det_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};