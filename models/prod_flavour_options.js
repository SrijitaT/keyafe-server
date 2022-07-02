'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Prod_Flavour_options extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate (models) {
			// define association here
			//this.hasMany(models.Flavour,{foreignKey:'flavour_id'});
			//this.hasMany(models.Product,{foreignKey:'prod_id'});
		}
	}
	Prod_Flavour_options.init({
		prod_id: DataTypes.INTEGER,
		flavour_id: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Prod_Flavour_options',
		timestamps: false
	});
	return Prod_Flavour_options;
};