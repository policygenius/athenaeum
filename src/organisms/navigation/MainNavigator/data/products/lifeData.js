const submenuItems = [
  {
    header: 'Types of Life Insurance',
    items: [
      { title: 'Term Life Insurance', href: '/life-insurance/term-life-insurance/', },
      { title: 'Level Term Life Insurance', href: '/life-insurance/level-term-life-insurance/', },
      { title: 'Return of Premium Life Insurance', href: '/life-insurance/return-of-premium-life-insurance/', },
      { title: 'No Medical Exam Life Insurance', href: '/life-insurance/no-medical-exam-life-insurance/', },
      { title: 'Whole Life Insurance', href: '/life-insurance/whole-life-insurance/', },
    ]
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Life Insurance Advice', href: '/life-insurance/learn/', },
      { title: 'Life Insurance Calculator', href: '/life-insurance/quotes/basic_info', },
      { title: 'Best Life Insurance Companies', href: '/life-insurance/best-life-insurance-companies/', },
      { title: 'Term vs. Whole Life Insurance', href: '/life-insurance/learn/whole-life-versus-term-life-insurance/', },
      { title: 'Life Insurance Shopping Guide', href: '/life-insurance/learn/shopping-advice/', },
    ]
  },
  {
    header: 'Life Insurance Company Reviews',
    items: [
      { title: 'Banner Life', href: '/life-insurance/companies/banner-life/review/', },
      { title: 'Lincoln Financial', href: '/life-insurance/companies/lincoln-national-life/review/', },
      { title: 'Pacific Life', href: '/life-insurance/companies/pacific-life/review/', },
      { title: 'Prudential', href: '/life-insurance/companies/prudential/review/', },
      { title: 'View All Companies', href: '/life-insurance/companies/', },
    ]
  },
];

export default {
  header: 'Life Insurance',
  link: '/life-insurance/',
  activeName: 'life-insurance',
  intro: {
    cta: 'Get A Free Quote',
    imgSrc: 'https://res-2.cloudinary.com/policygenius/image/upload/v1/general/life',
    linkHref: '/life-insurance/',
  },
  list: {
    key: 'life-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
