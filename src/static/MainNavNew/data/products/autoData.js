const submenuItems = [
  {
    header: 'Compare Renters Insurance',
    items: [
      { title: 'Non-owner Car Insurance', url: '/auto-insurance/learn/non-owner-car-insurance/', },
      { title: 'Gap Insurance', url: '/auto-insurance/learn/gap-insurance-protection/', },
      { title: 'Ride-share Insurance', url: '/rideshare-insurance/', },
      { title: 'Rental Car Insurance', url: '/auto-insurance/learn/rental-car-insurance/', },
    ],
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'Auto Insurance Advice', url: '/auto-insurance/learn/', },
      { title: 'How to Compare Auto Insurance Quotes', url: '/auto-insurance/learn/auto-insurance-quotes-comparison/', },
      { title: 'How Much is Car Insurance in Each State', url: '/auto-insurance/learn/how-much-is-car-insurance/', },
      { title: 'Finding the Best Car Insurance for You', url: '/auto-insurance/learn/finding-the-best-car-insurance-for-you/', },
      { title: 'Auto Insurance Discounts, Features, and Riders', url: '/auto-insurance/learn/auto-insurance-tips-features-discounts-riders/', },
      { title: 'Auto Insurance FAQ', url: '/auto-insurance/learn/auto-insurance-frequently-asked-questions/', },
    ],
  },

];

export default {
  menu: {
    header: 'Auto Insurance',
    shortHeader: 'Auto',
    link: '/auto-insurance/',
    activeName: 'auto-insurance',
    columns: 2,
  },
  intro: {
    cta: 'Start Shopping Now',
    icon: 'autoColor3X',
    linkHref: '/auto-insurance/',
    secondaryLinkHref: '/auto-insurance/learn';,
  },
  list: {
    alt: 'Auto Insurance',
    items: submenuItems,
    type: 'links',
  }
};
