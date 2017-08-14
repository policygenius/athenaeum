const submenuItems = [
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Health Insurance Marketplace', href: '/health-insurance/learn/how-to-shop-on-marketplaces-and-exchanges/', },
      { title: 'Open Enrollment 2017', href: 'https://www.policygenius.com/blog/2017-health-insurance-open-enrollment-period-state-changes/', },
      { title: 'Obamacare', href: '/health-insurance/faq/how-do-i-apply-for-obamacare/', },
      { title: 'HMO vs PPO vs. EPO vs. POS', href: '/health-insurance/faq/difference-between-hmo-ppo-epo-pos/', },
      { title: 'FSA vs. HSA', href: 'https://www.policygenius.com/blog/flexible-spending-account/', },
      { title: 'Special Enrollment', href: '/health-insurance/glossary/special-enrollment-period/', },
    ],
  },
  {
    header: 'Health Insurance Company Reviews',
    items: [
      { title: 'United Healthcare', href: '/health-insurance/united-healthcare/reviews/', },
      { title: 'Aetna', href: '/health-insurance/aetna/reviews/', },
      { title: 'Blue Cross Blue Shield', href: '/health-insurance/blue-cross-blue-shield/reviews/', },
      { title: 'Humana', href: '/health-insurance/humana/reviews/', },
      { title: 'Kaiser Permanente', href: '/health-insurance/kaiser/reviews/', },
      { title: 'View All Companies', href: '/health-insurance/companies', },
    ],
  },
  {
    header: 'Types of Health Insurance',
    items: [
      { title: 'HMO Plans', href: '/health-insurance/glossary/health-maintenance-organization/', },
      { title: 'PPO Plans', href: '/health-insurance/glossary/preferred-provider-organization/', },
      { title: 'EPO Plans', href: '/health-insurance/glossary/exclusive-provider-organization/', },
    ],
  },
];

export default {
  header: 'Health Insurance',
  link: '/health-insurance/',
  activeName: 'health-insurance',
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
