'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        id: 1,
        categoryId: 1,
        name: 'Eletromanik',
        resume: 'Instalações elétricas, reparo, manutenção',
        image: 'https://cdn.dribbble.com/users/8639/screenshots/1964347/media/cdf8487c5cc4f9551c76cc339904061f.jpg',
        description: 'Empresa no ramo de eletricidade, especializada e com 20 anos de experiência',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        categoryId: 3,
        name: 'ConfeteBeleza',
        resume: 'Bolos para casamento, aniversário, etc',
        image: 'http://whyd.com/wp-content/uploads/2022/02/Happy-Birthday-Cake-Images.....jpeg',
        description: 'Satisfação garantida, peça já nosso serviço!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        categoryId: 2,
        name: 'Pedro Pedreiro',
        resume: 'Reformas, construção',
        image: '',
        description: 'Obras em geral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        id: 4,
        categoryId: 6,
        name: 'Peixoto Veiculos',
        resume: 'amortecedores,freios,suspensão,troca de óleo',
        image: '',
        description: 'Estamos no mercado a 15 anos, serviço rápido com qualidade e honestidade!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
