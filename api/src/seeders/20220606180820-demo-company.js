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
        description: 'Fazemos manutenção de sua rede elétrica, instalação de paineis solares, faça seu orçamento grátis.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        categoryId: 2,
        name: 'E & C Construções',
        resume: 'Instalações elétricas e Energia Solar',
        image: 'http://1.bp.blogspot.com/-jYOf5Q7P08U/UaZeSGZyLRI/AAAAAAAAAsY/vsO2fMWTHgE/s1600/escuela+construccion+y+obras+civiles+aiep.1.0-01.jpg',
        description: 'Obras prédiais e residenciais, fazemos reformas e construimos sua casa, mais de 20 anos no mercado.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        categoryId: 3,
        name: 'E & C Construções',
        resume: 'Instalações elétricas e Energia Solar',
        image: 'http://1.bp.blogspot.com/-jYOf5Q7P08U/UaZeSGZyLRI/AAAAAAAAAsY/vsO2fMWTHgE/s1600/escuela+construccion+y+obras+civiles+aiep.1.0-01.jpg',
        description: 'Obras prédiais e residenciais, fazemos reformas e construimos sua casa, mais de 20 anos no mercado.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        categoryId: 4,
        name: 'Hair Gold',
        resume: 'Salão de beleza',
        image: 'http://1.bp.blogspot.com/-jYOf5Q7P08U/UaZeSGZyLRI/AAAAAAAAAsY/vsO2fMWTHgE/s1600/escuela+construccion+y+obras+civiles+aiep.1.0-01.jpg',
        description: 'Serviço e produtos de qualidade. Atendimento Unissex e Infantil. Buscamos sempre o melhor para nossos clientes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        categoryId: 5,
        name: 'Sportt Store',
        resume: 'Loja de Artigos Esportivos',
        image: 'https://cdn.awsli.com.br/400x300/1709/1709941/logo/9bfbf88a0d.jpg',
        description: 'A Loja Sporttstore surgiu da nossa vontade de oferecer camisetas esportivas a preços competitivos em um mercado  tão carente de produtos de qualidade. Estamos sempre dispostos a escutar sua opinião sobre como melhorar nosso serviço. Nosso maior comprometimento é com a satisfação dos clientes e por isso utilizamos o mercado pago que é a maior plataforma de pagamento do Brasil, garantindo assim a segurança e rapidez nas transações. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        categoryId: 5,
        name: 'Academia Corpo em Forma',
        resume: 'Academia',
        image: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize/2014/09/19/09/Logo-LV-80702_2750_044514432_2097143041.jpg',
        description: 'A Academia Corpo em Forma oferece uma ampla estrutura, aparelhagem moderna e instrutores capacitados, sempre à disposição para oferecer um treinamento de excelência aos seus associados',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        categoryId: 6,
        name: 'Mechanic Services',
        resume: 'Troca de óleo, pastilhas de freio, suspenção e alinhamento',
        image: 'https://cdn.awsli.com.br/400x300/1709/1709941/logo/9bfbf88a0d.jpg',
        description: 'Uma oficina diferente de tudo o que você já viu. Aqui você tem todos os serviços para seu veículo num único lugar, com a confiança, a qualidade e a tecnologia que se pode oferecer.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        id: 18,
        categoryId: 7,
        name: 'Zebu Soluções',
        resume: 'Desenvolvimento de Software',
        image: 'https://cdn.awsli.com.br/400x300/1709/1709941/logo/9bfbf88a0d.jpg',
        description: 'Há mais de uma década, criamos tecnologia em forma de produtos inovadores que melhoram a “developer experience” e geram valor para grandes empresas e startups, capazes de impactar não só o mercado brasileiro, mas o mundo! ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        categoryId: 8,
        name: 'MGS Advogados',
        resume: 'Escritório full service',
        image: 'data:image/png;base64,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',
        description: 'Completamos 50 anos de história em 2020. Ao longo de nossa trajetória pudemos contar com sócios, colaboradores, clientes e parceiros que nos impulsionaram a ser um dos escritórios mais admirados do país. Olhamos para o futuro comprometidos com a inovação e atuação de excelência, tendo no presente a base de nossas realizações.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        categoryId: 9,
        name: 'Giselle Holy',
        resume: 'Manicure e Pedicure',
        image: 'https://media.istockphoto.com/vectors/vector-logo-design-template-in-linear-style-nail-studio-emblem-vector-id1165085725?k=20&m=1165085725&s=612x612&w=0&h=e3L06_sn8nCuq8pxWMX1JWlM9JTHW3RuMGAZHrLwcaY=',
        description: 'Deixe suas unhas lindas e arrase no seu look, serviço atencioso, higiênico e de qualidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        categoryId: 10,
        name: 'UberCelulares',
        resume: 'reparo de celulares e asseçórios',
        image: 'https://i.pinimg.com/564x/31/01/65/310165bfad10f71b2907e7b3fb02c9b9.jpg',
        description: 'LG,Samsung,Sony,Xiaomi,Motorola,etc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        categoryId: 3,
        name: 'Bolos Maria Maldini',
        resume: 'Bolos de festas e confeitos em geral',
        image: 'https://i.pinimg.com/564x/31/01/65/310165bfad10f71b2907e7b3fb02c9b9.jpg',
        description: 'Bolos para aniversário, casamentos e festas em geral, sob medida, customizados , lindos e deliciosos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
