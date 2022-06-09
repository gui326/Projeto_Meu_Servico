const { CompaniesServices } = require('../services');
const companiesServices = new CompaniesServices();

class CompanyController{

    static async getAllCompanies(req, res){  
        try {
            const companies = await companiesServices.getCompanies(req.query.filter);

            return res.status(200).json(companies);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getCompany(req, res){  
        try {
            const data = await companiesServices.getCompanyAndServices(req.params.id);

            return res.status(200).json(data);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = CompanyController;