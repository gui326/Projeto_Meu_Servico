const Services = require('./Services');
const database = require('../models');

class OrdersServices extends Services{
    constructor(){
        super('Order');
    }

    async getAllOrders(filter){
        return database[this.modelName].findAll({ 
            include: [
                { 
                    model: database.Service,
                    attributes: [['name', 'name']]
                },
                { 
                    model: database.Company,
                    attributes: [['name', 'name'], ['image', 'image']]
                },
            ],
            where: filter
        })
    }
}

module.exports = OrdersServices;