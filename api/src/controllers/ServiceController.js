const { ServicesServices } = require('../services');
const servicesServices = new ServicesServices();

class ServiceController{
    
    static async getAllServices(req, res){  
        try {
            const services = await servicesServices.getAllRegisters();

            return res.status(200).json(services);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ServiceController;