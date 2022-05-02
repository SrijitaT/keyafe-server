'use strict';

const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserAddress,{foreignKey:'user_id'})
    }
    async isValidPassword(password) {
      const user = this;
      //Hashes the password sent by the user for login and checks if the hashed password stored in the 
      //database matches the one sent. Returns true if it does else false.
      const compare = await bcrypt.compare(password, user.password);
      return compare;
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    email_id: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args:true,
          "msg":"Please enter valid email"
        },
        notEmpty:{
          args:true,
          msg:"Please enter an email id"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate:{
        isIn: {
          args:[['Male', 'Female' , 'Trans']],
          msg: "Please enter within Male,Female and Transgender"
        }
      }
    },
    password: DataTypes.STRING,
    birthday:DataTypes.DATE,
    isRegistered: {type : DataTypes.BOOLEAN, defaultValue : true},
    role: {type : DataTypes.STRING, defaultValue : "customer"}
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      async beforeCreate(user) {
        // Do other stuff
        //const user = this;
        const hash = await bcrypt.hash(user.dataValues.password, 10);
        //Replace the plain text password with the hash and then store it
        user.dataValues.password = hash;
        //Indicates we're done and moves on to the next middleware
        // next();
      }
    }
  });
  return User;
};