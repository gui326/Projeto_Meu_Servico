const { CompaniesServices } = require('../services');
const companiesServices = new CompaniesServices();
const jwt = require('jsonwebtoken');

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

    static async companyLogin(req, res){
        try{
            const company = await companiesServices.handleLogin(req.body);

            //auth ok
            if(company){
                const id = company.id; //esse id viria do banco de dados
                const token = jwt.sign({ id }, process.env.SECRET);

                return res.status(200).json({ token: token, name: company.name, id: company.id });
            }

            return res.status(400).json({ message: 'Email ou password inválidos.' });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async companyRegister(req, res){
        try{
            const newCompany = await companiesServices.handleRegister(req.body);
            
            return res.status(200).json(newCompany);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async companyUpdate(req, res){
        try{
            const company = await companiesServices.updateRegister(req.body, req.params.id);
            
            return res.status(200).json(company);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = CompanyController;