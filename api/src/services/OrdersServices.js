const Services = require('./Services');

class OrdersServices extends Services{
    constructor(){
        super('Order');
    }
}

module.exports = OrdersServices;