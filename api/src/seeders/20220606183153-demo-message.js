'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        id: 1,
        chatId: 1,
        isCompany: 0,
        content: 'Olá, fiquei com algumas dúvidas, poderia me ajudar?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        chatId: 1,
        isCompany: 1,
        content: 'Tudo bom? Claro, pode falar.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        chatId: 2,
        isCompany: 0,
        content: 'Olá, tudo bom?',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
