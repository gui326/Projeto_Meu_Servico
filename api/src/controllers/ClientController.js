const { ClientsServices } = require('../services');
const clientServices = new ClientsServices();
const jwt = require('jsonwebtoken');

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
            const client = await clientServices.handleLogin(req.body);

            //auth ok
            if(client){
                const id = client.id; //esse id viria do banco de dados
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 300 // expires in 5min
                });

                return res.status(200).json({ token: token });
            }

            return res.status(400).json({ message: 'Email ou password inválidos.' });
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