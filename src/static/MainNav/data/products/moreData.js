const submenuItems = [
  {
    header: 'Health',
    items: [
      { title: 'Critical Illness Insurance', url: '/critical-illness-insurance/', },
      { title: 'Vision Insurance', url: '/vision-insurance/', },
      { title: 'Long-term Care Insurance', url: '/long-term-care-insurance/', },
      { title: 'Prescription Discount Cards', url: '/prescription-discount-cards/', },
    ],
  },
  {
    header: 'Other',
    items: [
      { title: 'Jewelry Insurance', url: '/jewelry-insurance/', },
      { title: 'Homeowners Insurance', url: '/homeowners-insurance/', },
      { title: 'Identity Theft Insurance', url: '/identity-theft-insurance/', },
      { title: 'Travel Insurance', url: '/travel-insurance/', },
    ],
  },
];

export default {
  menu: {
    header: 'More',
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
