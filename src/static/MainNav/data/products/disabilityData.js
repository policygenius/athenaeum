const submenuItems = [
  {
    header: 'Types of Disability Insurance',
    items: [
      { title: 'Long-Term Disability Insurance', url: '/long-term-disability-insurance/', },
      { title: 'Short-Term Disability Insurance', url: '/long-term-disability-insurance/learn/short-term-disability-insurance', },
      { title: 'Supplemental Disability Insurance', url: '/long-term-disability-insurance/learn/supplemental-disability-insurance', },
      { title: 'Mortgage Disability Insurance', url: '/long-term-disability-insurance/learn/mortgage-disability-insurance', },
    ],
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Disability Insurance Learn Center', url: '/long-term-disability-insurance/learn', },
      { title: 'How Does Long-Term Disability Insurance Work?', url: '/long-term-disability-insurance/learn/how-does-long-term-disability-insurance-work', },
      { title: 'How Much Does Long-Term Disability Insurance Cost?', url: '/long-term-disability-insurance/learn/how-much-does-long-term-disability-insurance-cost', },
      { title: 'Disability Insurance Features & Riders', url: '/long-term-disability-insurance/learn/disability-insurance-riders', },
    ],
  },
  {
    header: 'Disability Insurance Company Reviews',
    items: [
      { title: 'Mutual of Omaha', url: '/long-term-disability-insurance/companies/mutual-of-omaha/', },
      { title: 'Principal', url: '/long-term-disability-insurance/companies/principal/', },
      { title: 'MassMutual', url: '/long-term-disability-insurance/companies/massmutual/', },
      { title: 'Ameritas', url: '/long-term-disability-insurance/companies/ameritas/', },
      { title: 'Guardian', url: '/long-term-disability-insurance/companies/guardian-berkshire/', },
      { title: 'The Standard', url: '/long-term-disability-insurance/companies/the-standard/', },
      { title: 'Assurity', url: '/long-term-disability-insurance/companies/assurity/', },
    ],
  },

];

export default {
  menu: {
    header: 'Disability Insurance',
    link: '/long-term-disability-insurance/',
    activeName: 'disability-insurance',
  },
  intro: {
    cta: 'Get A Free Quote',

    imgSrc: 'https://res-1.cloudinary.com/policygenius/image/upload/v1/general/disability',
    linkHref: '/long-term-disability-insurance/',
  },
  list: {
    key: 'disability-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
