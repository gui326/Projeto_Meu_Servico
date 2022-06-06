'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasOne(models.Company);
      Order.hasOne(models.Client);
      Order.hasOne(models.Service);
      Order.belongsTo(models.Chat);
    }
  }
  Order.init({
    price: DataTypes.STRING,
    dayRealize: DataTypes.DATE,
    paymentMethod: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};