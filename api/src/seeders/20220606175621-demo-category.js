'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Eletricista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Pedreiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Confeiteira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Soldador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Encanador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Mecânico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Informática',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Advogado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Manicure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Celulares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
