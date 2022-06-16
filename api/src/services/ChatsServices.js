const Services = require('./Services');
const MessagesServices = require('./MessagesServices');
const database = require('../models');

class ChatsServices extends Services{
    constructor(){
        super('Chat');
        this.MessagesServices = new MessagesServices();
    }

    async createNewMessage(data){
        return this.MessagesServices.createRegister(data);
    }

    async getChatMessages(id){
        const messages = await database['Message'].findAll({ where: { chatId: id } });

        for(let i = 0; i < messages.length; i++){
            let month = messages[i].dataValues.createdAt.getMonth() + 1;
            let day = messages[i].dataValues.createdAt.getDay();
            let year = messages[i].dataValues.createdAt.getFullYear();

            console.log('ok', messages[i].createdAt);
            messages[i].dataValues.createdAt = `${day > 10 ? day : "0"+day }/${ month > 10 ? month : "0"+month}/${year}`;
        }

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
            where: { id: id } 
        });

        return {
            messages: messages,
            chat: chat
        }
    }

    async getAllChats(filter){
        return database[this.modelName].findAll({ 
            order: [["id","DESC"]],
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

    async getAllChatsCompany(filter){
        return database[this.modelName].findAll({ 
            order: [["id","DESC"]],
            include: [
                { 
                    model: database.Order,
                    where: { CompanyId: filter },
                    include: [
                        {
                            model: database.Client,
                            attributes: [['name', 'name']]
                        },
                        {
                            model: database.Service,
                            attributes: [['name', 'name']]
                        },
                    ]
                },
            ],
            
        })
    }
}

module.exports = ChatsServices;