const submenuItems = [
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Health Insurance Marketplace', url: '/health-insurance/learn/how-to-shop-on-marketplaces-and-exchanges/', },
      { title: 'Open Enrollment 2017', url: 'https://www.policygenius.com/blog/2017-health-insurance-open-enrollment-period-state-changes/', },
      { title: 'Obamacare', url: '/health-insurance/faq/how-do-i-apply-for-obamacare/', },
      { title: 'HMO vs PPO vs. EPO vs. POS', url: '/health-insurance/faq/difference-between-hmo-ppo-epo-pos/', },
      { title: 'FSA vs. HSA', url: 'https://www.policygenius.com/blog/flexible-spending-account/', },
      { title: 'Special Enrollment', url: '/health-insurance/glossary/special-enrollment-period/', },
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
    link: '/health-insurance/',
    activeName: 'health-insurance',
  },
  intro: {
    cta: 'Get A Free Quote',
    imgSrc: 'https://res-2.cloudinary.com/policygenius/image/upload/v1/general/health',
    linkHref: '/health-insurance/',
  },
  list: {
    key: 'health-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
