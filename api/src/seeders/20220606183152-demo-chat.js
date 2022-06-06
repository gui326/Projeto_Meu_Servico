'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chats', [
      {
        id: 1,
        orderId: 1,
        status: "Finalizado",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        orderId: 2,
        status: "Pendente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        orderId: 3,
        status: "Pendente",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chats', null, {});
  }
};
