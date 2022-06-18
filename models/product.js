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
      this.belongsTo(models.Categories,{foreignKey:'cat_id'});
      this.belongsTo(models.Type,{foreignKey:'type_id'});
      this.belongsTo(models.Shape,{foreignKey:'shape_id'});
      this.belongsTo(models.Flavour,{foreignKey:'original_flavour_id'});
      this.belongsTo(models.ProductDetails,{foreignKey:'prod_det_id'});
      this.hasMany(models.Cart,{foreignKey:'product_id'});
    }
  }
  Product.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    img_url: DataTypes.STRING,//all foreign keys are added by associations
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};