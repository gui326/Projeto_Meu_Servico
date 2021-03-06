'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Points', [
      {
        id: 1,
        companyId: 1,
        rate: 4,
        comentary: 'Gostei muito, obrigado ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        companyId: 2,
        rate: 5,
        comentary: 'Excelente serviço, muito obrigado ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        companyId: 1,
        rate: 5,
        comentary: 'Muito bom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        companyId: 1,
        rate: 5,
        comentary: 'Simplemeste a melhor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        companyId: 1,
        rate: 5,
        comentary: 'Excelente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        companyId: 2,
        rate: 4,
        comentary: 'Gostei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        companyId: 1,
        rate: 5,
        comentary: 'Muito bom',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Points', null, {});
  }
};
