'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        id: 1,
        name: 'Enzo Ozne',
        password: "$2a$12$Lsbwt/L8B2dJRFPeLfb1POwZ64Zk9Zr3we6fCppRNAWtvKKiiufUm",
        email: 'enzoozne@email.com',
        phone: '555554444',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Fulano da Silva',
        password: "$2a$12$Lsbwt/L8B2dJRFPeLfb1POwZ64Zk9Zr3we6fCppRNAWtvKKiiufUm",
        email: 'fulano@email.com',
        phone: '555554444',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Filipe Phelps',
        password: "$2a$12$Lsbwt/L8B2dJRFPeLfb1POwZ64Zk9Zr3we6fCppRNAWtvKKiiufUm",
        email: 'phelsfi@email.com',
        phone: '555554444',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        id: 4,
        name: 'Grosbilda',
        password: "$2a$12$Lsbwt/L8B2dJRFPeLfb1POwZ64Zk9Zr3we6fCppRNAWtvKKiiufUm",
        email: 'orbolato@iftm.edu',
        phone: '565654444',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
