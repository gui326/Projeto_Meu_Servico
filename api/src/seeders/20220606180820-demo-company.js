'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        id: 4,
        categoryId: 1,
        name: 'Eletromanik',
        resume: 'Instalações elétricas, reparo, manutenção',
        image: 'https://cdn.dribbble.com/users/8639/screenshots/1964347/media/cdf8487c5cc4f9551c76cc339904061f.jpg',
        description: 'Empresa no ramo de eletricidade, especializada e com 20 anos de experiência',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 2,
        categoryId: 3,
        name: 'ConfeteBeleza',
        resume: 'Bolos para casamento, aniversário, etc',
        image: 'https://i.pinimg.com/originals/86/3b/1c/863b1cb756751b615038ed199e22bd71.jpg',
        description: 'Satisfação garantida, peça já nosso serviço!',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 3,
        categoryId: 2,
        name: 'Pedro Pedreiro',
        resume: 'Reformas, construção',
        image: 'https://i.pinimg.com/originals/4e/11/d0/4e11d07336fd1efdf18342bd9d2256d7.jpg',
        description: 'Obras em geral',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 1,
        categoryId: 6,
        name: 'Peixoto Veiculos',
        resume: 'amortecedores,freios,suspensão,troca de óleo',
        image: 'https://media.istockphoto.com/vectors/car-repairing-logo-vector-automotive-and-transportation-logo-template-vector-id1069245396?k=6&m=1069245396&s=170667a&w=0&h=714Oy4CS50A3fDV2GKor2oxLWvZb_KazgQSCndNRRFU=',
        description: 'Estamos no mercado a 15 anos, serviço rápido com qualidade e honestidade!',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 5,
        categoryId: 4,
        name: 'Mychelle Cunha',
        resume: 'Cortes feminino e masculino',
        image: 'https://media.istockphoto.com/vectors/beauty-and-hair-salon-vector-logo-with-woman-face-and-letter-s-vector-id1027575870?k=6&m=1027575870&s=170667a&w=0&h=SyL34rmpAT8CdwM6Qd4ojhkg6W_1wJBwMXXTvSl2i3k=',
        description: 'Atendemos com hora marcada e a domicilio, escova progressiva, alisamento, pintura, alongamento, mega-hair, ambiente agradável serviço de primeira',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 6,
        categoryId: 5,
        name: 'Bazar boleiro',
        resume: 'Artigos esportivos em geral',
        image: 'https://e7.pngegg.com/pngimages/616/840/png-clipart-blue-and-white-soccer-ball-illustration-football-stars-other-emblem.png',
        description: 'Uniformes, bolas, equipamento de rapel, canoagem, volleyball, basquete, chuteiras de todas as marcas, artigos novos e usados com garantia. ',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 7,
        categoryId: 7,
        name: 'Joel Guttemberg',
        resume: 'Serviços de Informática',
        image: 'http://clipart-library.com/images/8i6oojBXT.png',
        description: 'Formatação, limpeza, montagem, manutenção em computadores e notebooks',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 8,
        categoryId: 10,
        name: 'Raul Mobiles',
        resume: 'Conserto de celulares e revenda',
        image: 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/01/AirPods.jpg?w=2000&quality=82&strip=all&ssl=1',
        description: 'Trocamos tela, consertamos seu celular de qualquer marca, revenda de usados e acessórios',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 9,
        categoryId: 8,
        name: 'Saldanha & Souza',
        resume: 'Assitência jurídica',
        image: 'https://img.indiefolio.com/fit-in/1100x0/filters:fill(transparent)/project/body/BACK_8a551448899902.jpg',
        description: 'Grupo de advogados a mais de 15 anos no mercado, somos especializados em disputas trabalhistas.',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 10,
        categoryId: 9,
        name: 'Jaqueline Milena',
        resume: 'Manicure e pedicure',
        image: 'https://media.istockphoto.com/vectors/beautiful-woman-hand-with-elegant-red-nail-polish-manicure-vector-id1026440908?k=6&m=1026440908&s=612x612&w=0&h=hzBOA8sf1oNcwJhw_F_cvvTziTrPqaX_Jc5mmmh4eEw=',
        description: 'agende um horário e deixe suas unhas lindas, atendemos também a domicílio',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 11,
        categoryId: 1,
        name: 'EletroService',
        resume: 'Instalações elétricas e Energia Solar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKivAyHsK554QcSJYBIWHpdIFGO9Vh10t0KiPBvAh3sYvJnHbdwBzQZpT6l1NnyhNHG_Y&usqp=CAU',
        description: 'Fazemos manutenção de sua rede elétrica, instalação de paineis solares, faça seu orçamento grátis.',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 12,
        categoryId: 2,
        name: 'E & C Construções',
        resume: 'Alvenaria e obras em geral',
        image: 'http://1.bp.blogspot.com/-jYOf5Q7P08U/UaZeSGZyLRI/AAAAAAAAAsY/vsO2fMWTHgE/s1600/escuela+construccion+y+obras+civiles+aiep.1.0-01.jpg',
        description: 'Obras prédiais e residenciais, fazemos reformas e construimos sua casa, mais de 20 anos no mercado.',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 13,
        categoryId: 3,
        name: 'Bolos e Confeitos Suzi',
        resume: 'Confeitaria sob encomenda',
        image: 'https://img.myloview.com.br/adesivos/cake-logo-700-194423718.jpg',
        description: 'Bolos deliciosos, docinhos, brigadeiro, e tudo feito com amor e carinho',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 14,
        categoryId: 4,
        name: 'Hair Gold',
        resume: 'Salão de beleza',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrk93Qe04MgRuyV_3KvL2cbMRuVWtCnGFL3Q&usqp=CAU',
        description: 'Serviço e produtos de qualidade. Atendimento Unissex e Infantil. Buscamos sempre o melhor para nossos clientes',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 15,
        categoryId: 5,
        name: 'Sportt Store',
        resume: 'Loja de Artigos Esportivos',
        image: 'https://cdn.awsli.com.br/400x300/1709/1709941/logo/9bfbf88a0d.jpg',
        description: 'A Loja Sporttstore surgiu da nossa vontade de oferecer camisetas esportivas a preços competitivos em um mercado  tão carente de produtos de qualidade. Estamos sempre dispostos a escutar sua opinião sobre como melhorar nosso serviço. Nosso maior comprometimento é com a satisfação dos clientes e por isso utilizamos o mercado pago que é a maior plataforma de pagamento do Brasil, garantindo assim a segurança e rapidez nas transações. ',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 16,
        categoryId: 5,
        name: 'Academia Corpo em Forma',
        resume: 'Academia',
        image: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize/2014/09/19/09/Logo-LV-80702_2750_044514432_2097143041.jpg',
        description: 'A Academia Corpo em Forma oferece uma ampla estrutura, aparelhagem moderna e instrutores capacitados, sempre à disposição para oferecer um treinamento de excelência aos seus associados',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 17,
        categoryId: 6,
        name: 'Mechanic Services',
        resume: 'Troca de óleo, pastilhas de freio, suspenção e alinhamento',
        image: 'https://www.creativefabrica.com/wp-content/uploads/2021/06/07/Mechanic-logo-design-services-Graphics-13017436-1-1-580x386.png',
        description: 'Uma oficina diferente de tudo o que você já viu. Aqui você tem todos os serviços para seu veículo num único lugar, com a confiança, a qualidade e a tecnologia que se pode oferecer.',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
       {
        id: 18,
        categoryId: 7,
        name: 'Zebu Soluções',
        resume: 'Desenvolvimento de Software',
        image: 'https://img.lovepik.com/element/40148/0244.png_860.png',
        description: 'Há mais de uma década, criamos tecnologia em forma de produtos inovadores que melhoram a “developer experience” e geram valor para grandes empresas e startups, capazes de impactar não só o mercado brasileiro, mas o mundo! ',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 19,
        categoryId: 8,
        name: 'MG Advogados',
        resume: 'Escritório full service',
        image: 'https://img.freepik.com/vetores-gratis/logotipo-de-consideracao-de-advogado-e-direito_204719-24.jpg',
        description: 'Completamos 50 anos de história em 2020. Ao longo de nossa trajetória pudemos contar com sócios, colaboradores, clientes e parceiros que nos impulsionaram a ser um dos escritórios mais admirados do país. Olhamos para o futuro comprometidos com a inovação e atuação de excelência, tendo no presente a base de nossas realizações.',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 20,
        categoryId: 9,
        name: 'Giselle Holy',
        resume: 'Manicure e Pedicure',
        image: 'https://w7.pngwing.com/pngs/874/184/png-transparent-logo-nail-salon-nail-art-fashion-beauty-text-hand-fashion.png',
        description: 'Deixe suas unhas lindas e arrase no seu look, serviço atencioso, higiênico e de qualidade',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 21,
        categoryId: 10,
        name: 'UberCelulares',
        resume: 'reparo de celulares e acessórios',
        image: 'https://i.pinimg.com/564x/31/01/65/310165bfad10f71b2907e7b3fb02c9b9.jpg',
        description: 'LG,Samsung,Sony,Xiaomi,Motorola,etc',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 22,
        categoryId: 3,
        name: 'Bolos Maria Maldini',
        resume: 'Bolos de festas e confeitos em geral',
        image: 'https://thumbs.dreamstime.com/z/cake-logo-vector-ilustration-template-cake-logo-vector-ilustration-122858667.jpg',
        description: 'Bolos para aniversário, casamentos e festas em geral, sob medida, customizados , lindos e deliciosos.',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 23,
        categoryId: 6,
        name: 'MotoShopUra',
        resume: 'Oficina de motos',
        image: 'https://logopond.com/logos/4fc9f9c3cabd62f0e651c9af774d25f5.png',
        description: 'Oficina especializada em motos, manutenção preventiva, troca de oleo, freios, eletrica, cuidadmos desde sua 150 até sua Harley ',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      {
        id: 24,
        categoryId: 4,
        name: 'Salão da Alice',
        resume: 'Cabelereira feminina',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXjOSS3cL7AUeFw6ZUYZg6OTnMpYbOKYmMA&usqp=CAU',
        description: 'Cortes de alto padrão, cabelereira experiente e inovadora , a melhor da região',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'gui@hotmail.com',
        password: '$2a$12$8MJsxYrBAGfUQdDaR/muH.YIOYQDAN3F.ZOEZVZF0AVcrY2iO.SNO'
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
