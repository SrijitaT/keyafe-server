'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flavour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.hasMany(models.Product);
    }
  }
  Flavour.init({
    variety: DataTypes.STRING,
    desc: DataTypes.STRING,
    speciality: DataTypes.BOOLEAN,
    new_flavour: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Flavour',
    timestamps: false
  });
  return Flavour;
};