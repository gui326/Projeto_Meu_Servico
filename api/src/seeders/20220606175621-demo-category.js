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
        name: 'Técnico em Informática',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 8,
        name: 'Alfaiate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Marceneiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Advogado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Dentista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Manicure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Imóveis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Utilidades para o Lar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Celulares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 16,
        name: 'Computadores e Notebooks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 17,
        name: 'Veículos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 18,
        name: 'Vestuário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 19,
        name: 'Restaurantes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 20,
        name: 'Esporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
