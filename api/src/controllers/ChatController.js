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

    static async getChats(req, res){  
        try {
            const chat = await chatsServices.getRegister({ where: { id: req.params.id } });

            return res.status(200).json(chat);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMessage(req, res){  
        try {
            const chat = await chatsServices.createNewMessage({...res.body, chatId: res.params.id});

            return res.status(200).json(chat);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ChatController;