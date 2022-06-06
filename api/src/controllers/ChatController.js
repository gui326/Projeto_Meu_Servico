const { ChatsServices } = require('../services');
const chatsServices = new ChatsServices();

class ChatController{

    static async getChats(req, res){  
        try {
            const chat = await chatsServices.getAllRegisters();

            return res.status(200).json(chat);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ChatController;