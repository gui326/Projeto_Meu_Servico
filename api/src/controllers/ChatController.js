const { ChatsServices } = require('../services');
const chatsServices = new ChatsServices();

class ChatController{

    static async getChats(req, res){  
        try {
            const chat = await chatsServices.getAllChats(req.clientId);

            return res.status(200).json(chat);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getChat(req, res){  
        try {
            const chat = await chatsServices.getChatMessages(req.params.id);

            return res.status(200).json(chat);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createChat(req, res){
        try {
            const chat = await chatsServices.createRegister(req.body);

            return res.status(200).json(chat);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createMessage(req, res){  
        const data = {
            ...req.body, 
            ChatId: req.params.id
        };

        try {
            const message = await chatsServices.createNewMessage(data);

            return res.status(200).json(message);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ChatController;