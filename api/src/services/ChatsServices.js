const Services = require('./Services');
const MessagesServices = require('./MessagesServices');

class ChatsServices extends Services{
    constructor(){
        super('Chat');
        this.MessagesServices = new MessagesServices();
    }

    async createNewMessage(data){
        return this.MessagesServices.createRegister(data);
    }
}

module.exports = ChatsServices;