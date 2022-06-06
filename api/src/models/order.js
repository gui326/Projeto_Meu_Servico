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
      Order.belongsTo(models.Company);
      Order.belongsTo(models.Client);
      Order.belongsTo(models.Service);
      Order.hasOne(models.Chat);
    }
  }
  Order.init({
    price: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};