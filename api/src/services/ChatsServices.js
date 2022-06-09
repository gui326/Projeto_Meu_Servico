const Services = require('./Services');
const MessagesServices = require('./MessagesServices');

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
                    attributes: [['name', 'name']],
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