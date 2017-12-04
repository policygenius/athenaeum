const submenuItems = [
  {
    header: 'Compare Pet Insurance Policies',
    items: [
      { title: 'What’s Does Pet Insurance Cover?', url: '/pet-insurance/learn/what-does-pet-insurance-cover/', },
      { title: 'Pet Insurance Policy Features', url: '/pet-insurance/learn/pet-insurance-policy-features/', },
      { title: 'Pet Insurance Exclusions', url: '/pet-insurance/learn/what-doesnt-pet-insurance-cover/', },
      { title: 'Pet Insurance FAQs', url: '/pet-insurance/learn/pet-insurance-faqs/', },
    ]
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Pet Insurance Learn Center', url: '/pet-insurance/learn/', },
      { title: 'Pet Insurance 101', url: '/pet-insurance/learn/pet-insurance-101/', },
      { title: 'Who Needs Pet Insurance? ', url: '/pet-insurance/learn/who-needs-pet-insurance/', },
      { title: 'Understanding Pet Insurance Expenses & Risks', url: '/pet-insurance/learn/understanding-pet-insurance-expenses-and-risks/', },
    ]
  },
];

export default {
  menu: {
    header: 'Pet Insurance',
    shortHeader: 'Pet',
    link: '/pet-insurance/',
    activeName: 'pet-insurance',
    columns: 2,
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'petColor3X',
    linkHref: '/pet-insurance/',
  },
  list: {
    alt: 'Pet Insurance',
    items: submenuItems,
    type: 'links',
  }
};
