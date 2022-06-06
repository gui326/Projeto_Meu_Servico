'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Eletricista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedreiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Confeiteira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Soldador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Encanador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mecânico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
