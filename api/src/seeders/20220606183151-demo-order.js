'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        id: 1,
        companyId: 1,
        clientId: 1,
        serviceId: 1,
        price: "19,99",
        paymentMethod: 'Dinheiro',
        status: 'Realizado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        companyId: 1,
        clientId: 1,
        serviceId: 2,
        price: "49,99",
        paymentMethod: 'Cartão',
        status: 'Realizado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        companyId: 2,
        clientId: 2,
        serviceId: 3,
        price: "129,99",
        paymentMethod: 'Cartão',
        status: 'Completado',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
