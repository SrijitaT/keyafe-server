'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{foreignKey:'user_id'})
    }
  }
  UserAddress.init({
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    pincode: DataTypes.STRING,
    country : {
      type : DataTypes.STRING,
      default: "India"
    },
    state : {
      type : DataTypes.STRING,
      default: "West Bengal"
    },
    city : {
      type:DataTypes.STRING,
      default: "Kolkata"
    },
    phone: DataTypes.STRING,
    isDefault:DataTypes.BOOLEAN,
    address_type:{
      type: DataTypes.STRING,
      validate:{
        isIn: {
          args:[['Home', 'Work' , 'Other']],
          msg: "Please enter within Home,work,other"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserAddress',
    freezeTableName: true
  });
  return UserAddress;
};