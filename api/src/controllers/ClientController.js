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

}

module.exports = ClientController;