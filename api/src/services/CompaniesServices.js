const Services = require('./Services');
const database = require('../models');
const ServicesServices = require('./ServicesServices');

class CompaniesServices extends Services{
    constructor(){
        super('Company');
        this.ServicesServices = new ServicesServices();
    }

    async getCompanyAndServices(id){
        const newData =  {
            company : await database[this.modelName].findOne({ where: { id: Number(id) } }),
            services : await this.ServicesServices.getAllRegisters({ companyId: id })
        }

        return newData;
    }
}

module.exports = CompaniesServices;