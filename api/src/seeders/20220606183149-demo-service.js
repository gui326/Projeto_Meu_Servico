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
        price: "719,99",
        name: 'Troca Fiação',
        description: 'Realização da troca da fiação na casa do cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        companyId: 1,
        price: "100,00",
        name: 'Avaliação da fiação elétrica',
        description: 'Será realizado uma verificação na casa do cliente, afim de encontrar problemas na fiação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        companyId: 2,
        price: "29,99",
        name: 'Bolo Vulcão',
        description: 'Realização do bolo para o cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        companyId: 2,
        price: "35,99",
        name: 'Bolo de Festa',
        description: 'Bolo de Festa encomendado vendido por KG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        companyId: 1,
        price: "400,00",
        name: 'Troca Padrão/Disjuntor',
        description: 'Sujeito a avaliação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        companyId: 2,
        price: "319,99",
        name: 'Bolo Casamento Deluxe',
        description: 'Bolo 15Kg, 5 andares, recheio com doce de leite',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        companyId: 2,
        price: "119,99",
        name: 'Bolo Casamento 1',
        description: 'Bolo casamento coberto de glace , 8Kg, 3 andares , recheio a escolha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        companyId: 3,
        price: "0,00",
        name: 'Orçamento',
        description: 'Agende um orçamento grátis hoje mesmo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        companyId: 3,
        price: "Troca/Instalação de Portão",
        name: '400,00',
        description: 'Realização da troca do portão de sua casa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        companyId: 3,
        price: "1600,99",
        name: 'Muro',
        description: 'construção de muro em volta do terreno ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        companyId: 4,
        price: "160,00",
        name: 'Troca Óleo',
        description: 'troca oleo para Chevrolet,Fiat,VolksWagen,Ford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        companyId: 4,
        price: "300,99",
        name: 'Troca Óleo importados',
        description: 'Nissan,Honda,Audi,BMW,Mercedes,e demais marcas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        companyId: 4,
        price: "550,00",
        name: 'Amortecedores',
        description: 'Jogo amortecedores x4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        companyId: 4,
        price: "450,00",
        name: 'Suspensão',
        description: 'Suspensão para principais marcas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        companyId: 4,
        price: "70,00",
        name: 'Alinhamento',
        description: 'Alinhamento automatizado rápido e eficaz',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 17,
        companyId: 4,
        price: "60,00",
        name: 'Balanceamento',
        description: 'Balanceamento rápido, na hora, sem demora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        companyId: 4,
        price: "360,00",
        name: 'Pastilhas de Freio',
        description: 'troca das pastilhas com troca da filtro de freio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        companyId: 5,
        price: "50,00",
        name: 'Corte simples feminino',
        description: 'Corte feminino com hora marcada.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        companyId: 5,
        price: "20,00",
        name: 'Corte simples masculino',
        description: 'corte com tesoura e ou máquina, com hora marcada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        companyId: 5,
        price: "120,00",
        name: 'Escova Progressiva',
        description: 'Serviço rápido, indolor e de excelente qualidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        companyId: 5,
        price: "80,00",
        name: 'Pintura',
        description: 'Pintura de qualquer cor com tintas da melhor qualidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        companyId: 6,
        price: "50,00",
        name: 'Bola Futebol',
        description: 'bola profissional , futebol de campo, adidas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        companyId: 6,
        price: "60,00",
        name: 'Bola Basquete',
        description: 'Padrão NBA, garantia 12 meses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        companyId: 6,
        price: "510,00",
        name: 'Equipamento de rapel',
        description: 'Equipamento adidas, maior segurança e confiabilidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        companyId: 6,
        price: "200,00",
        name: 'Camisas de Times',
        description: 'Corinthians,Flamengo,Palmeiras,Real Madrid, Liverpool,Barcelona, etc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        companyId: 6,
        price: "6600,00",
        name: 'Caiaque',
        description: 'Caiaque para canoagem profissional, alta qualidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        companyId: 6,
        price: "189,99",
        name: 'Chuteiras',
        description: 'Chuteira Puma 36 a 44',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        companyId: 7,
        price: "55,00",
        name: 'Formatação',
        description: 'formatação de notebooks e desktops, windows + office',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        companyId: 7,
        price: "60,00",
        name: 'Configuração de Impressora',
        description: 'configuração e instalação de impressoras',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        companyId: 7,
        price: "50,00",
        name: 'Limpeza e manutenção preventiva',
        description: 'higienização do computador e troca de pasta térmica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        companyId: 8,
        price: "259,99",
        name: 'Troca display',
        description: 'troca de telas para as principais marcas do mercado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
   
      

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
