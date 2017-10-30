const submenuItems = [
  {
    header: 'Types of Life Insurance',
    items: [
      { title: 'Term Life Insurance', url: '/life-insurance/term-life-insurance/', },
      { title: 'Level Term Life Insurance', url: '/life-insurance/level-term-life-insurance/', },
      { title: 'Return of Premium Life Insurance', url: '/life-insurance/return-of-premium-life-insurance/', },
      { title: 'No Medical Exam Life Insurance', url: '/life-insurance/no-medical-exam-life-insurance/', },
      { title: 'Whole Life Insurance', url: '/life-insurance/whole-life-insurance/', },
    ]
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Life Insurance Advice', url: '/life-insurance/learn/', },
      { title: 'Life Insurance Calculator', url: '/life-insurance/quotes/basic_info', },
      { title: 'Best Life Insurance Companies', url: '/life-insurance/best-life-insurance-companies/', },
      { title: 'Term vs. Whole Life Insurance', url: '/life-insurance/learn/whole-life-versus-term-life-insurance/', },
      { title: 'Life Insurance Shopping Guide', url: '/life-insurance/learn/shopping-advice/', },
    ]
  },
  {
    header: 'Life Insurance Company Reviews',
    items: [
      { title: 'Banner Life', url: '/life-insurance/companies/banner-life/review/', },
      { title: 'Lincoln Financial', url: '/life-insurance/companies/lincoln-national-life/review/', },
      { title: 'Pacific Life', url: '/life-insurance/companies/pacific-life/review/', },
      { title: 'Prudential', url: '/life-insurance/companies/prudential/review/', },
      { title: 'View All Companies', url: '/life-insurance/companies/', },
    ]
  },
];

export default {
  menu: {
    header: 'Life Insurance',
    link: '/life-insurance/',
    activeName: 'life-insurance',
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'lifeColor3X',
    linkHref: '/life-insurance/',
  },
  list: {
    key: 'life-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
