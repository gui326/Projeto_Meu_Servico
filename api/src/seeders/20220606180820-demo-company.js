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
        image: 'https://i.pinimg.com/originals/86/3b/1c/863b1cb756751b615038ed199e22bd71.jpg',
        description: 'Satisfação garantida, peça já nosso serviço!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        categoryId: 2,
        name: 'Pedro Pedreiro',
        resume: 'Reformas, construção',
        image: 'https://i.pinimg.com/originals/4e/11/d0/4e11d07336fd1efdf18342bd9d2256d7.jpg',
        description: 'Obras em geral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        categoryId: 6,
        name: 'Peixoto Veiculos',
        resume: 'amortecedores,freios,suspensão,troca de óleo',
        image: 'https://media.istockphoto.com/vectors/car-repairing-logo-vector-automotive-and-transportation-logo-template-vector-id1069245396?k=6&m=1069245396&s=170667a&w=0&h=714Oy4CS50A3fDV2GKor2oxLWvZb_KazgQSCndNRRFU=',
        description: 'Estamos no mercado a 15 anos, serviço rápido com qualidade e honestidade!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        categoryId: 4,
        name: 'Mychelle Cunha',
        resume: 'Cortes feminino e masculino',
        image: 'https://media.istockphoto.com/vectors/beauty-and-hair-salon-vector-logo-with-woman-face-and-letter-s-vector-id1027575870?k=6&m=1027575870&s=170667a&w=0&h=SyL34rmpAT8CdwM6Qd4ojhkg6W_1wJBwMXXTvSl2i3k=',
        description: 'Atendemos com hora marcada e a domicilio, escova progressiva, alisamento, pintura, alongamento, mega-hair, ambiente agradável serviço de primeira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        categoryId: 5,
        name: 'Bazar boleiro',
        resume: 'Artigos esportivos em geral',
        image: 'https://www.easywallprints.com/upload/designs/sport-equipment-and-balls-in-front-of-black-background-small-1.jpg',
        description: 'Uniformes, bolas, equipamento de rapel, canoagem, paint ball, volleyball, basquete, chuteiras de todas as marcas, artigos novos e usados com garantia. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        categoryId: 7,
        name: 'Joel Guttemberg',
        resume: 'Serviçõs de Informática',
        image: 'http://clipart-library.com/images/8i6oojBXT.png',
        description: 'Formatação, limpeza, montagem, manutenção em computadores e notebooks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        categoryId: 10,
        name: 'Raul Mobiles',
        resume: 'Conserto de celulares e revenda',
        image: 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/01/AirPods.jpg?w=2000&quality=82&strip=all&ssl=1',
        description: 'Trocamos tela, consertamos seu celular de qualquer marca, revenda de usados e acessórios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        categoryId: 8,
        name: 'Saldanha & Souza',
        resume: 'Assitência jurídica',
        image: 'https://img.indiefolio.com/fit-in/1100x0/filters:fill(transparent)/project/body/BACK_8a551448899902.jpg',
        description: 'Grupo de advogados a mais de 15 anos no mercado, somos especializados em disputas trabalhistas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        categoryId: 9,
        name: 'Jaqueline Milena',
        resume: 'Manicure e pedicure',
        image: 'https://media.istockphoto.com/vectors/beautiful-woman-hand-with-elegant-red-nail-polish-manicure-vector-id1026440908?k=6&m=1026440908&s=612x612&w=0&h=hzBOA8sf1oNcwJhw_F_cvvTziTrPqaX_Jc5mmmh4eEw=',
        description: 'agende um horário e deixe suas unhas lindas, atendemos também a domicílio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        id: 11,
        categoryId: 1,
        name: 'EletroService',
        resume: 'Instalações elétricas e Energia Solar',
        image: 'data:image/png;base64,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',
        description: 'Fazemos manutenção de sua rede elétrica, instalação de paineis solares',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
