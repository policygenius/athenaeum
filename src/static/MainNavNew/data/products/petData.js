const submenuItems = [
  {
    header: 'Advice',
    subHeader: 'What Does Pet Insurance Cover?',
    link: '/pet-insurance/guide/',
    imageSrc: 'https://res-4.cloudinary.com/policygenius/image/upload/v1/general/pet-guide-opt',
  },
  {
    header: 'Advice',
    subHeader: 'Pet Insurance FAQ',
    link: '/pet-insurance/guide/faqs',
    imageSrc: 'https://res-2.cloudinary.com/policygenius/image/upload/v1/general/pet-faq-opt',
  },
  {
    header: 'Advice',
    subHeader: 'Typical Pet Insurance Policy',
    link: '/pet-insurance/guide/common-policy-features',
    imageSrc: 'https://res-4.cloudinary.com/policygenius/image/upload/v1/general/pet-policy-opt',
  },
];

export default {
  menu: {
    header: 'Pet Insurance',
    shortHeader: 'Pet',
    link: '/pet-insurance/',
    activeName: 'pet-insurance',
    columns: 3,
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'petColor3X',
    linkHref: '/pet-insurance/',
  },
  list: {
    alt: 'Pet Insurance',
    items: submenuItems,
    type: 'articles',
  }
};
