const submenuItems = [
  {
    header: 'Advice',
    subHeader: 'What Does Renters Insurance Cover?',
    link: '/renters-insurance/guide/',
    imageSrc: 'https://res-5.cloudinary.com/policygenius/image/upload/v1/general/renters-guide-opt',
    type: 'article',
  },
  {
    header: 'Advice',
    subHeader: 'Renters Insurance FAQ',
    link: '/renters-insurance/guide/faqs',
    imageSrc: 'https://res-5.cloudinary.com/policygenius/image/upload/v1/general/renters-faq-opt',
    type: 'article',
  },
  {
    header: 'Advice',
    subHeader: 'Typical Renters Insurance Policy',
    link: '/renters-insurance/guide/typical-policy',
    imageSrc: 'https://res-3.cloudinary.com/policygenius/image/upload/v1/general/renters-policy-opt',
    type: 'article',
  },
];

export default {
  menu: {
    header: 'Renters Insurance',
    link: '/renters-insurance/',
    activeName: 'renters-insurance',
  },
  intro: {
    cta: 'Get A Free Quote',
    imgSrc: 'https://res-5.cloudinary.com/policygenius/image/upload/v1/general/renters',
    linkHref: '/renters-insurance/',
  },
  list: {
    alt: 'Renters Insurance',
    items: submenuItems,
    type: 'articles',
  }
};
