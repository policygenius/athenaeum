const submenuItems = [
  {
    header: 'Compare Renters Insurance',
    items: [
      { title: 'How to Buy Cheap Renters Insurance Online', url: '/renters-insurance/learn/how-to-buy-cheap-renters-insurance-online/', },
      { title: 'Replacement Cost Renters Insurance', url: '/renters-insurance/learn/replacement-cost-renters-insurance/', },
      { title: 'Cash Value Renters Insurance', url: '/renters-insurance/learn/actual-cash-value-renters-insurance/', },
      { title: 'The Best Renters Insurance Companies', url: '/renters-insurance/learn/the-best-renters-insurance-companies/', },
    ],
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'What Does Renters Insurance Cover?', url: '/renters-insurance/learn/what-does-renters-insurance-cover/', },
      { title: 'How Much Is Renters Insurance?', url: '/renters-insurance/learn/how-much-is-renters-insurance/', },
      { title: 'How Does Renters Insurance Work?', url: '/renters-insurance/learn/how-renters-insurance-works/', },
      { title: 'How Much Renters Insurance Do I Need?', url: '/renters-insurance/learn/how-much-renters-insurance-do-i-need/', },
      { title: 'Renters Insurance FAQ', url: '/renters-insurance/learn/renters-insurance-faqs/', },
    ],
  },
  {
    header: 'Renters Insurance Company Reviews',
    items: [
      { title: 'Geico', url: '/renters-insurance/companies/geico/', },
      { title: 'Progressive', url: '/renters-insurance/companies/progressive/', },
      { title: 'State Farm', url: '/renters-insurance/companies/state-farm/', },
      { title: 'Allstate', url: '/renters-insurance/companies/allstate/', },
      { title: 'Lemonade', url: '/renters-insurance/companies/lemonade/', },
      { title: 'Stillwater', url: '/renters-insurance/companies/stillwater/', },
      { title: 'Liberty Mutual', url: '/renters-insurance/companies/liberty-mutual/', },
    ],
  },

];

export default {
  menu: {
    header: 'Renters Insurance',
    link: '/renters-insurance/',
    activeName: 'renters-insurance',
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'rentersColor3X',
    linkHref: '/renters-insurance/',
  },
  list: {
    alt: 'Renters Insurance',
    items: submenuItems,
    type: 'links',
  }
};
