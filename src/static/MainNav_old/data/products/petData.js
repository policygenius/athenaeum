const submenuItems = [
  {
    header: 'Advice',
    subHeader: 'What Does Pet Insurance Cover?',
    link: '/pet-insurance/learn/pet-insurance-101/',
    imageSrc: 'https://res-4.cloudinary.com/policygenius/image/upload/v1/general/pet-guide-opt',
  },
  {
    header: 'Advice',
    subHeader: 'Pet Insurance FAQ',
    link: '/pet-insurance/learn/pet-insurance-faqs/',
    imageSrc: 'https://res-2.cloudinary.com/policygenius/image/upload/v1/general/pet-faq-opt',
  },
  {
    header: 'Advice',
    subHeader: 'Typical Pet Insurance Policy',
    link: '/pet-insurance/learn/pet-insurance-policy-features/',
    imageSrc: 'https://res-4.cloudinary.com/policygenius/image/upload/v1/general/pet-policy-opt',
  },
];

export default {
  menu: {
    header: 'Pet Insurance',
    link: '/pet-insurance/',
    activeName: 'pet-insurance',
  },
  intro: {
    cta: 'Get A Free Quote',

    imgSrc: 'https://res-4.cloudinary.com/policygenius/image/upload/v1/general/pet',
    linkHref: '/pet-insurance/',
  },
  list: {
    alt: 'Pet Insurance',
    items: submenuItems,
    type: 'articles',
  }
};
