const Services = require('./Services');
const bcrypt = require("bcrypt");
const database = require('../models')

class ClientsServices extends Services{
    constructor(){
        super('Client');
    }

    async handleLogin(){
        return "ainda não foi realizado";
    }

    async handleRegister(data){
        const salt = await bcrypt.genSalt(12);

        const newClient = {
            ...data,
            password: await bcrypt.hash(data.password, salt)
        }

        return database[this.modelName].create(newClient);
    }
}

module.exports = ClientsServices;