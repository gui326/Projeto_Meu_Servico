const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');
const ServicesServices = require('./ServicesServices');
const bcrypt = require("bcrypt");

const Op = Sequelize.Op;


class CompaniesServices extends Services{
    constructor(){
        super('Company');
        this.ServicesServices = new ServicesServices();
    }

    async handleLogin(data){
        const company = await database[this.modelName].findOne({ where: { email: data.email } });

        if(!company){
            throw new Error('Esse usuário não existe');
        }

        const verifyPass = await bcrypt.compare(data.password, company.password);

        if(verifyPass){
            return company;
        } 

        return null;
    }

    async handleRegister(data){
        const salt = await bcrypt.genSalt(12);

        const newCompany = {
            ...data,
            resume: '',
            description: '',
            image: '',
            password: await bcrypt.hash(data.password, salt)
        }

        return database[this.modelName].create(newCompany);
    }

    async getCompanyAndServices(id){
        const newData =  {
            company : await database[this.modelName].findOne({ include: [
                { 
                    model: database.Category,
                    attributes: [['name', 'name']]
                }
            ], where: { id: Number(id) } }),
            services : await this.ServicesServices.getAllRegisters({ companyId: id })
        }

        return newData;
    }

    async getCompanies(filter){
        let search = {};

        if(filter) {
            search = { "$Category.name$": { [Op.like]: `%${filter}%` } };
        }

        return database[this.modelName].findAll({ 
            include: [
                { 
                    model: database.Category,
                    require: true,
                    attributes: [['name', 'name']],
                }
            ],
            where: search
         })
    }
}

module.exports = CompaniesServices;