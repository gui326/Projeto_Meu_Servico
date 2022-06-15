'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        id: 1,
        companyId: 4,
        price: "19,99",
        name: 'Troca lâmpada',
        description: 'Realização da troca da lâmpada na casa do cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        companyId: 4,
        price: "719,99",
        name: 'Troca Fiação',
        description: 'Realização da troca da fiação na casa do cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        companyId: 4,
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
        companyId: 4,
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
        companyId: 1,
        price: "160,00",
        name: 'Troca Óleo',
        description: 'Troca oleo para Chevrolet,Fiat,VolksWagen,Ford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        companyId: 1,
        price: "300,99",
        name: 'Troca Óleo importados',
        description: 'Nissan,Honda,Audi,BMW,Mercedes,e demais marcas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        companyId: 1,
        price: "400,00",
        name: 'Troca de óleo caminhões',
        description: 'Troca de óleo para veiculos grandes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        companyId: 1,
        price: "100,00",
        name: 'Troca de óleo motos',
        description: 'Troca de óleo para motos e quadriciculos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        companyId: 1,
        price: "250,00",
        name: 'Freios veiculos passeio',
        description: 'Troca das pastilhas e fluido de freio',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 17,
        companyId: 1,
        price: "300,00",
        name: 'Freios veiculos carga',
        description: 'Troca das pastilhas e fluido de freio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        companyId: 1,
        price: "1500,00",
        name: 'Óleo do câmbio',
        description: 'Troca do óleo de cambios CVT',
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
      {
        id: 33,
        companyId: 8,
        price: "99,99",
        name: 'Conserto leitor de chip',
        description: 'Defeito em que o clelular não reconhece o chip',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        companyId: 8,
        price: "200,00",
        name: 'Entrada em novo aparelho',
        description: 'avaliamos o seu aparelho e aceitamos como parte do pagamento em um novo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        companyId: 9,
        price: "200,00",
        name: 'Análise aposentadoria',
        description: 'Assitência e acompanhamento para aposentadoria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        companyId: 9,
        price: "400,00",
        name: 'Cobrança de salários atrasados',
        description: 'Auxiliamos com seu salário , fgts , férias e bônus que você tenha a receber',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        companyId: 9,
        price: "600,00",
        name: 'Demissão injusta',
        description: 'Demissões que você considere injusta, podemos analisar e ajudar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        companyId: 10,
        price: "60,00",
        name: 'Mão e pé',
        description: 'Unhas da mão e pé com agendamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        companyId: 10,
        price: "30,00",
        name: 'Mão',
        description: 'Unhas da mão com agendamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        companyId: 10,
        price: "40,00",
        name: 'Pé',
        description: 'Unhas do pé com agendamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 42,
        companyId: 11,
        price: "550,00",
        name: 'Instalação painel solar',
        description: 'Painel 1x2m instalação em sistema pronto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 41,
        companyId: 11,
        price: "5000,00",
        name: 'Sistema energia solar',
        description: 'Sistema completo + instalação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 43,
        companyId: 11,
        price: "250,00",
        name: 'Bateria',
        description: 'bateria para sistema solar de 100W',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 44,
        companyId: 12,
        price: "0,00",
        name: 'Casa',
        description: 'Agende uma avaliação para a construção de casa em terreno privado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 45,
        companyId: 12,
        price: "0,00",
        name: 'Condominio',
        description: 'Sob contrato para construção de condominios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 46,
        companyId: 13,
        price: "209,99",
        name: 'Bolo Casamento',
        description: 'Bolo 10Kg, 4 andares',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 47,
        companyId: 13,
        price: "120,99",
        name: 'Torta Chocolate',
        description: 'Torta 3Kg, sabor chocolate',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 48,
        companyId: 13,
        price: "20,99",
        name: 'Pote Brigadeiro',
        description: 'Brigadeiro caseiro delicioso',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 49,
        companyId: 14,
        price: "120,00",
        name: 'Corte Feminino',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 50,
        companyId: 14,
        price: "60,00",
        name: 'Corte Masculino',
        description: 'Corte cabelo masculino',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 51,
        companyId: 14,
        price: "70,00",
        name: 'Corte Infantil',
        description: 'Corte cabelo infantil',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 52,
        companyId: 14,
        price: "150,00",
        name: 'Escova',
        description: 'escova cabelo',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 53,
        companyId: 16,
        price: "100,00",
        name: 'Aulas Judô',
        description: 'Plano mensal , aulas com professor faixa preta',
        createdAt: new Date(),
        updatedAt: new Date()
      },       
      {
        id: 54,
        companyId: 16,
        price: "100,00",
        name: 'Aulas Crossfit',
        description: 'Plano mensal,com professor dedicado',
        createdAt: new Date(),
        updatedAt: new Date()
      },           
      {
        id: 55,
        companyId: 16,
        price: "120,00",
        name: 'Academia',
        description: 'Plano mensal , todos aparelhos liberados, todos os dias da semana',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 56,
        companyId: 15,
        price: "150,00",
        name: 'Camisas Futebol',
        description: 'camisas de times nacionais e internacionais',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 57,
        companyId: 15,
        price: "100,00",
        name: 'Escolinha de futebol',
        description: 'Matricule seu filho na escolinha de futebol',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 58,
        companyId: 15,
        price: "140,00",
        name: 'Plano torcedor',
        description: 'Filie se ao plano sócio torcedor de Atlético ou Cruzeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 59,
        companyId: 17,
        price: "200,00",
        name: 'Troca de óleo',
        description: 'troca de óleo para as principais marcas',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 60,
        companyId: 17,
        price: "350,00",
        name: 'Freios',
        description: 'troca de pastilhas e fluido de freio',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 61,
        companyId: 17,
        price: "300,00",
        name: 'Suspensão',
        description: 'Serviço de troca e reparo da suspensão',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 61,
        companyId: 17,
        price: "100,00",
        name: 'Alinhamento',
        description: 'alinhamento e balanceamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 99,
        companyId: 18,
        price: "200,00",
        name: 'Sistema simples de caixa',
        description: 'Mensalidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 62,
        companyId: 18,
        price: "3500,00",
        name: 'Sistema de caixa',
        description: 'Desenvolvimento e implantação de sistema de caixa',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 63,
        companyId: 18,
        price: "100,00",
        name: 'Assitência técnica',
        description: 'Assitência remota por team viewer',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 64,
        companyId: 18,
        price: "300,00",
        name: 'Visita técnica',
        description: 'Assitência no local',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 65,
        companyId: 19,
        price: "5000,00",
        name: 'Área trabalhista',
        description: 'Assistência juridica em todo o processo',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 66,
        companyId: 19,
        price: "8000,00",
        name: 'Área criminal',
        description: 'Assistência juridica em todo o processo',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 67,
        companyId: 19,
        price: "3000,00",
        name: 'Área civil',
        description: 'Assistência juridica em todo o processo',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 68,
        companyId: 19,
        price: "4000,00",
        name: 'Área tributaria',
        description: 'Assistência juridica em todo o processo',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      {
        id: 69,
        companyId: 20,
        price: "60,00",
        name: 'Mãos',
        description: 'Serviço de manicure com hora marcada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 70,
        companyId: 20,
        price: "65,00",
        name: 'Pés',
        description: 'Serviço de pedicure com hora marcada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 71,
        companyId: 21,
        price: "350,00",
        name: 'Troca de tela',
        description: 'Troca de tela trincada por uma nova original',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 72,
        companyId: 21,
        price: "150,00",
        name: 'Troca de bateria',
        description: 'Baterias originais com longa duração',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 73,
        companyId: 21,
        price: "200,00",
        name: 'Recuperação de fotos',
        description: 'Recuperação de arquivos em aparelho travado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 76,
        companyId: 22,
        price: "100,00",
        name: 'Bolo de aniversário',
        description: 'Bolo delicioso, sabor a escolha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 75,
        companyId: 22,
        price: "110,00",
        name: 'Torta de chocolate',
        description: 'Torta recheada,com granulado e pdeaços de chocolate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 74,
        companyId: 22,
        price: "2150,00",
        name: 'Buffet completo',
        description: 'Buffet completo para festas, bolo, docinhos, balinhas, sorvetes, enfeites',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 77,
        companyId: 22,
        price: "90,00",
        name: 'Bolo de Morango',
        description: 'Hummmm bolo de morangooo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 78,
        companyId: 23,
        price: "260,00",
        name: 'Troca escapamento',
        description: 'Escapamento original para Yamaha,Honda,Suzuki',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 79,
        companyId: 23,
        price: "60,00",
        name: 'Troca de óleo',
        description: 'Troca de óleo para motos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 80,
        companyId: 23,
        price: "100,00",
        name: 'Freios',
        description: 'Reparo dos freios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 81,
        companyId: 24,
        price: "170,00",
        name: 'Long bob',
        description: 'Corte de cabelo tipo long bob',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 82,
        companyId: 24,
        price: "180,00",
        name: 'Médio com franjinha',
        description: 'Corte de cabelo médio com franjinha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 83,
        companyId: 24,
        price: "150,00",
        name: 'Repicado',
        description: 'Corte de cabelo tipo repicado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 84,
        companyId: 24,
        price: "170,00",
        name: 'Assimétrico',
        description: 'Corte de cabelo tipo assimétrico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 85,
        companyId: 24,
        price: "165,00",
        name: 'Pixie cut',
        description: 'Corte de cabelo tipo pixie cut',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 86,
        companyId: 1,
        price: "250,00",
        name: 'Multimídia',
        description: 'Configuração e reparos em central multimídia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 87,
        companyId: 1,
        price: "200,00",
        name: 'Alarme',
        description: 'Instalação de alarme',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 88,
        companyId: 1,
        price: "300,00",
        name: 'Fárois',
        description: 'Configuração e reparos em central multimídia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 89,
        companyId: 1,
        price: "3000,00",
        name: 'Pintura',
        description: 'Pintura completa, todas as cores',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 90,
        companyId: 1,
        price: "1700,00",
        name: 'Bancos esportivos',
        description: 'Bancos esportivos diversas marcas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 91,
        companyId: 1,
        price: "150,00",
        name: 'Corta combustivel',
        description: 'Chave secreta que corta combustivel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 92,
        companyId: 1,
        price: "2000,00",
        name: 'Funilária',
        description: 'Reparo de danos causados por impacto na lataria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 93,
        companyId: 1,
        price: "90,00",
        name: 'Alinhamento',
        description: 'Alinhamento automatizado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 94,
        companyId: 1,
        price: "75,00",
        name: 'Balanceamento',
        description: 'Balanceamento profissional sem detalhes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 95,
        companyId: 1,
        price: "750,00",
        name: 'Escapamento esportivo',
        description: 'Instalação de escapamento esportivo em veiculos compativeis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 96,
        companyId: 1,
        price: "200,00",
        name: 'Despachante',
        description: 'Serviço parceiro de despachante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 97,
        companyId: 1,
        price: "650,00",
        name: 'Vidros',
        description: 'Instalação de vidros elétricos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 98,
        companyId: 1,
        price: "5000,00",
        name: 'Seguro privado',
        description: 'Serviço de seguro parceiro terceirizado com desconto para nossos clientes.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
