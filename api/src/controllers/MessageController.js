const { MessagesServices } = require('../services');
const messagesServices = new MessagesServices();

class MessageController{
    
    static async getAllMessages(req, res){  
        try {
            const messages = await messagesServices.getAllRegisters();

            return res.status(200).json(messages);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MessageController;