'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        id: 1,
        companyId: 1,
        price: "19,99",
        name: 'Troca lâmpada',
        description: 'Realização da troca da lâmpada na casa do cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        companyId: 1,
        price: "319,99",
        name: 'Troca Fiação',
        description: 'Realização da troca da fiação na casa do cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        companyId: 2,
        price: "29,99",
        name: 'Bolo Vulcão',
        description: 'Realização do bolo para o cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};