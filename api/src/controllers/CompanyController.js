const { CompaniesServices } = require('../services');
const companiesServices = new CompaniesServices();

class CompanyController{
    
    static async getAllCompanies(req, res){  
        try {
            const companies = await companiesServices.getAllRegisters();

            return res.status(200).json(companies);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = CompanyController;