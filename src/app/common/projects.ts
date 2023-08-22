import type { IProject } from '@ts/interfaces';

export const projects: ReadonlyArray<IProject> = [
  {
    label: 'Portfólio',
    primaryColor: '#BAE6f8',
    secondaryColor: '#192BC2',
    slug: 'ryan-web',
    title: 'Ryan Web',
    description: [
      'Portfólio onde há alguns projetos desenvolvidos, tecnologias utilizadas e informações de contato.',
      'Criado com o propósito de evidenciar minhas competências, destacar minha singularidade, fornecer exemplos concretos e refletir meu aprendizado contínuo.',
      'Sendo sua primeira versão desenvolvida em HTML, Sass e JavaScript. E posteriormente com Sass, TypeScript e Angular.'
    ],
    stack: [
      'html',
      'sass',
      'typescript',
      'angular',
      'git',
      'vercel'
    ],
    createdAt: 'Agosto de 2023'
  },
  {
    label: 'Comunidade online',
    primaryColor: '#62D2A2',
    secondaryColor: '#136A47',
    slug: 'earth-community',
    title: 'Earth Community',
    description: [
      'Earth Community é uma comunidade online que tem como objetivo promover o engajamento de pessoas e grupos em causas ambientais e sociais.',
      'Criado a partir de um projeto acadêmico baseado na agenda 2030 da ONU, oferecendo um espaço virtual para que os usuários possam se conectar, compartilhar ideias e iniciativas, e se mobilizarem em prol de um mundo mais sustentável e consciente.',
      'Além disso, a comunidade é uma oportunidade para que os usuários possam aprender mais sobre as temáticas que envolvem a agenda 2030 da ONU e se inspirarem em outras iniciativas ao redor do Brasil.'
    ],
    stack: [
      'html',
      'styled-components',
      'material-ui',
      'typescript',
      'react',
      'next',
      'node',
      'express',
      'git',
      'mongo-db',
      'firebase',
      'vercel'
    ],
    createdAt: 'Janeiro de 2023'
  },
  {
    label: 'Loja virtual',
    primaryColor: '#F4F1EA',
    secondaryColor: '#D9C800',
    slug: '4-store',
    title: '4Store',
    description: [
      'Projeto desenvolvido durante um processo seletivo para estágio, se trata de uma loja fictícia com algumas funcionalides típicas.',
      'Como já dito, foi desenvolvido durante um processo seletivo para estágio, com prazo e requisitos definidos pela empresa, sendo posteriormente refatorado. Foram utilizados React Router, Redux Toolkit e Redux Persist.',
      'A aplicação possui formulários de login e cadastro, visualização de produtos, carrinho de compras com a possibilidade de aplicar um desconto no preço total e tela final de compra.'
    ],
    stack: [
      'html',
      'css',
      'javascript',
      'react',
      'git',
      'vercel'
    ],
    createdAt: 'Fevereiro de 2022'
  },
  {
    label: 'Loja virtual',
    primaryColor: '#37582B',
    secondaryColor: '#9BB725',
    slug: 'farmino',
    title: 'Farmino',
    description: [
      'Projeto pessoal, se trata de uma loja virtual fictícia com foco na venda de produtos orgânicos com algumas funcionalidades típicas.',
      'Criado para uma prova da matéria de Desenvolvimento Web II na Faculdade de Tecnologia de São Paulo. Com requisitos definidos pelo professor.',
      'Há um formulário de contato e a possibilidade de adição de produtos no carrinho de compras. Foram utilizados Vue Router, Vuex, Vue Meta e Vuelidate.'
    ],
    stack: [
      'html',
      'tailwind-css',
      'javascript',
      'vue',
      'git',
      'vercel'
    ],
    createdAt: 'Fevereiro de 2022'
  },
  {
    label: 'Sorveteria',
    primaryColor: '#EA516D',
    secondaryColor: '#000',
    slug: 'petit-glace',
    title: 'Petit Glace',
    description: [
      'Projeto pessoal sobre uma sorveteria fictícia. O usuário pode realizar uma filtragem de produtos, seja pela origem ou preço do produto.',
      'Criado para o aperfeiçoamento de conceitos básicos de Desenvolvimento Web, como: HTML semântico, estilização intermediária e manipulação de dados com JavaScript.',
      'Tudo isso para levar até você e sua família, nossas deliciosas sobremesas, com preço justo e muita variedade.'
    ],
    stack: [
      'html',
      'bootstrap',
      'javascript',
      'git'
    ],
    createdAt: 'Dezembro de 2021'
  },
  {
    label: 'Autoescola',
    primaryColor: '#111A39',
    secondaryColor: '#E71D4F',
    slug: 'vruum',
    title: 'Vruum',
    description: [
      'Projeto pessoal sobre uma autoescola fictícia. A mesma oferece cursos tradicionais de direção e de aperfeiçoamento no trânsito.',
      'Criado para uma prova da matéria de Web Design I na Faculdade de Tecnologia de São Paulo. Consistiu na criação um template da página inicial de um site com o Adobe Illustrator e depois o seu desenvolvimento.',
      'A Autoescola Vruum faz questão de preservar a qualidade e a confiança, mantendo-se à frente em inovações no aprendizado.'
    ],
    stack: [
      'html',
      'css',
      'javascript',
      'git'
    ],
    createdAt: 'Novembro de 2021'
  }
];
