const submenuItems = [
  {
    header: 'Health',
    items: [
      { title: 'Prescription Discount Cards', url: '/prescription-discount-cards/', },
      { title: 'Critical Illness Insurance', url: '/critical-illness-insurance/', },
    ],
  },
  {
    header: 'Property & Travel',
    items: [
      { title: 'Homeowners Insurance', url: '/homeowners-insurance/', },
      { title: 'Travel Insurance', url: '/travel-insurance/', },
    ],
  },
];

export default {
  menu: {
    header: 'More',
    link: 'https://www.policygenius.com/blog/',
    activeName: 'more',
  },
  intro: {
    cta: 'Get Your Insurance Checkup™',
    imgSrc: 'https://res-3.cloudinary.com/policygenius/image/upload/v1/general/checkup-small',
    linkHref: '/insurance-checkup-and-advice/',
  },
  list: {
    key: 'more-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
