const Services = require('./Services');
const database = require('../models');

class OrdersServices extends Services{
    constructor(){
        super('Order');
    }

    async getAllOrders(filter){
        return database[this.modelName].findAll({ 
            order: [["id","DESC"]],
            include: [
                { 
                    model: database.Service,
                    attributes: [['name', 'name']]
                },
                { 
                    model: database.Company,
                    attributes: [['name', 'name'], ['image', 'image']],
                    include: [
                        {
                            model: database.Category,
                            attributes: [['name', 'name']],
                        }
                    ]
                },
            ],
            where: filter
        })
    }

    async createNewOrder(newOrder){
        const order = await database[this.modelName].create(newOrder);

        await database['Chat'].create({status: "pendente", OrderId: order.id});

        return order;
    }

    async getOrder(orderId){
        return database[this.modelName].findOne({ 
            include: [
                { 
                    model: database.Service,
                    attributes: [['name', 'name'], ['description', 'description'], ['price', 'price']]
                },
                { 
                    model: database.Company,
                    attributes: [['name', 'name'], ['image', 'image']],
                    include: [
                        {
                            model: database.Category,
                            attributes: [['name', 'name']],
                        }
                    ]
                },
            ],
            where: { id: orderId }
        })
    }
}

module.exports = OrdersServices;