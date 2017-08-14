const submenuItems = [
  {
    header: 'Health',
    items: [
      { title: 'Prescription Discount Cards', href: '/prescription-discount-cards/', },
      { title: 'Critical Illness Insurance', href: '/critical-illness-insurance/', },
    ],
  },
  {
    header: 'Property & Travel',
    items: [
      { title: 'Homeowners Insurance', href: '/homeowners-insurance/', },
      { title: 'Travel Insurance', href: '/travel-insurance/', },
    ],
  },
];

export default {
  header: 'More',
  link: 'https://www.policygenius.com/blog/',
  activeName: 'more',
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
