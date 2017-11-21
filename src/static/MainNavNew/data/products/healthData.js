const submenuItems = [
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Health Insurance Learn Center', url: '/health-insurance/learn/', },
      { title: 'Health Insurance 101', url: '/health-insurance/learn/health-insurance-basics-and-guide/', },
      { title: 'ACA: How to Shop the Exchanges', url: '/health-insurance/learn/how-to-shop-on-marketplaces-and-exchanges/', },
      { title: 'Open Enrollment State Guide 2018', url: 'https://www.policygenius.com/blog/health-insurance-open-enrollment-state-guide/', },
      { title: 'FSA vs. HSA', url: 'https://www.policygenius.com/blog/flexible-spending-account/', },
    ],
  },
  {
    header: 'Health Insurance Company Reviews',
    items: [
      { title: 'United Healthcare', url: '/health-insurance/united-healthcare/reviews/', },
      { title: 'Aetna', url: '/health-insurance/aetna/reviews/', },
      { title: 'Blue Cross Blue Shield', url: '/health-insurance/blue-cross-blue-shield/reviews/', },
      { title: 'Humana', url: '/health-insurance/humana/reviews/', },
      { title: 'Kaiser Permanente', url: '/health-insurance/kaiser/reviews/', },
      { title: 'View All Companies', url: '/health-insurance/companies', },
    ],
  },
  {
    header: 'Types of Health Insurance',
    items: [
      { title: 'HMO Plans', url: '/health-insurance/glossary/health-maintenance-organization/', },
      { title: 'PPO Plans', url: '/health-insurance/glossary/preferred-provider-organization/', },
      { title: 'EPO Plans', url: '/health-insurance/glossary/exclusive-provider-organization/', },
    ],
  },
];

export default {
  menu: {
    header: 'Health Insurance',
    shortHeader: 'Health',
    link: '/health-insurance/',
    activeName: 'health-insurance',
    columns: 3,
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'healthColor3X',
    linkHref: '/health-insurance/',
  },
  list: {
    key: 'health-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
