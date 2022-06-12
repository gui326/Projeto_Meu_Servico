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

    async getChatMessages(id){
        console.log(id);

        const messages = await database['Message'].findAll({ where: { chatId: id } });

        console.log(messages);

        const chat = await database[this.modelName].findOne({ 
            include: [
                { 
                    model: database.Order,
                    include: [
                        {
                            model: database.Company,
                            attributes: [['name', 'name']]
                        },
                        {
                            model: database.Service,
                            attributes: [['name', 'name']]
                        }
                    ]
                },
            ],
            where: { id: id } });

        console.log(messages);

        return {
            messages: messages,
            chat: chat
        }
    }

    async getAllChats(filter){
        return database[this.modelName].findAll({ 
            include: [
                { 
                    model: database.Order,
                    where: { ClientId: filter },
                    include: [
                        {
                            model: database.Company,
                            attributes: [['name', 'name'], ['image', 'image']]
                        }
                    ]
                },
            ],
            
        })
    }
}

module.exports = ChatsServices;