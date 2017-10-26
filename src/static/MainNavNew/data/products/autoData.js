const submenuItems = [
  {
    header: 'Advice',
    subHeader: "Can you Get Car Insurance If Your Don't Have A License?",
    link: 'https://www.policygenius.com/blog/can-you-get-car-insurance-if-you-dont-have-a-license/',
    imageSrc: 'https://res-3.cloudinary.com/policygenius/image/upload/v1/general/keys',
  },
  {
    header: 'Advice',
    subHeader: 'The Best Insurance Options If You Have Multiple Cars',
    link: 'https://www.policygenius.com/blog/the-best-insurance-options-if-you-have-multiple-cars/',
    imageSrc: 'https://res-2.cloudinary.com/policygenius/image/upload/v1/general/many-cars',
  },
  {
    header: 'Advice',
    subHeader: 'At What Age Does Auto Insurance Decrease',
    link: 'https://www.policygenius.com/blog/auto-insurance-decrease-age/',
    imageSrc: 'https://res-1.cloudinary.com/policygenius/image/upload/v1/general/money',
  },
];

export default {
  menu: {
    header: 'Auto Insurance',
    link: '/auto-insurance/',
    activeName: 'auto-insurance',
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'autoColor3X',
    linkHref: '/auto-insurance/',
  },
  list: {
    alt: 'Auto Insurance',
    items: submenuItems,
    type: 'articles',
  }
};
