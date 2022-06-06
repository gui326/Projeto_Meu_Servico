const { ClientsServices } = require('../services');
const clientServices = new ClientsServices();

class ClientController{

    static async getClients(req, res){  
        try {
            const clients = await clientServices.getAllRegisters();

            return res.status(200).json(clients);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async clientLogin(req, res){
        try{
            const login = await clientServices.handleLogin();

            return res.status(200).json(login);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async registerClient(req, res){
        const newClient = req.body;

        try{
            const client = await clientServices.handleRegister(newClient);
            
            return res.status(200).json(client);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ClientController;