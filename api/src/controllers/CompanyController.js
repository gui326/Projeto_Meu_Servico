const { CompaniesServices } = require('../services');
const companiesServices = new CompaniesServices();

class CompanyController{

    static async getAllCompanies(req, res){  
        const filters = req.query.filter ? { categoryId: req.query.filter} : null;

        try {
            const companies = await companiesServices.getCompanies(filters);

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