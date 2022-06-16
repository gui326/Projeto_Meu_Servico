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

    static async createService(req, res){
        try {
            const services = await servicesServices.createRegister(req.body);

            return res.status(200).json(services);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteService(req, res){
        try {
            const service = await servicesServices.deleteRegister(req.params.id);

            return res.status(200).json(service);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateService(req, res){
        try {
            const service = await servicesServices.updateRegister(req.body, req.params.id);

            return res.status(200).json(service);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ServiceController;