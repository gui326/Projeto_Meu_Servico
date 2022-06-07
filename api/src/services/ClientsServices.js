const Services = require('./Services');
const bcrypt = require("bcrypt");
const database = require('../models');

class ClientsServices extends Services{
    constructor(){
        super('Client');
    }

    async handleLogin(data){
        const client = await database[this.modelName].findOne({ where: { email: data.email } });

        if(!client){
            return null;
        }

        const teste = await bcrypt.compare(data.password, client.password);

        if(teste){
            return client;
        } 

        return null;
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