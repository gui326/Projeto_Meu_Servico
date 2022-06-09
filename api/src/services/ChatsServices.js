const Services = require('./Services');
const MessagesServices = require('./MessagesServices');
const database = require('../models');

class ChatsServices extends Services{
    constructor(){
        super('Chat');
        this.MessagesServices = new MessagesServices();
    }

    async createNewMessage(data){
        console.log(data);

        return this.MessagesServices.createRegister(data);
    }

    async getAllChats(filter){
        return database[this.modelName].findAll({ 
            include: [
                { 
                    model: database.Order,
                    include: [
                        {
                            model: database.Company,
                            attributes: [['name', 'name'], ['image', 'image']]
                        }
                    ]
                },
            ],
            where: filter
        })
    }
}

module.exports = ChatsServices;