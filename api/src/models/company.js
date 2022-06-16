'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.belongsTo(models.Category);
      Company.hasOne(models.Order);
      Company.hasOne(models.Service);
      Company.hasOne(models.Point);
    }
  }
  Company.init({
    name: DataTypes.STRING,
    resume: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};