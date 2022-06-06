'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        categoryId: 1,
        name: 'Eletromanik',
        resume: 'Empresa no ramo de eletricidade, especializada e com 20 anos de experiência',
        image: '',
        description: 'Estamos no mercado a 20 anos, contamos com profissionais altamente capacitados, e estamos aqui para te ajudar, peça já nosso serviço!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'ConfeteBeleza',
        resume: 'Empresa no ramo de confeitaria, especializada e com 20 anos de experiência',
        image: '',
        description: 'Estamos no mercado a 20 anos, contamos com profissionais altamente capacitados, e estamos aqui para te ajudar, peça já nosso serviço!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Pedro Pedreiro',
        resume: 'Empresa no ramo de pedreiro, especializada e com 20 anos de experiência',
        image: '',
        description: 'Estamos no mercado a 20 anos, contamos com profissionais altamente capacitados, e estamos aqui para te ajudar, peça já nosso serviço!',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
