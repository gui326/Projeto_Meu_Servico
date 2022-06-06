const Services = require('./Services');

class MessagesServices extends Services{
    constructor(){
        super('Message');
    }
}

module.exports = MessagesServices;