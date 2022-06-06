const database = require('../models');

class Services{
    constructor(modelName){
        this.modelName = modelName;
    }

    async getAllRegisters(where = {}) {
        return database[this.modelName].findAll({where : { ...where }});
    }

    async getRegister(where = {}){
        return database[this.modelName].findOne({ where: {...where} });
    }

    async createRegister(data){ 
        return database[this.modelName].create(data);
    }

    async updateRegister(newData, id){
        return database[this.modelName].update(newData, { where: { id: id } });
    }

    async deleteRegister(id){
        return database[this.modelName].destroy({where : { id: id }})
    }
}

module.exports = Services;