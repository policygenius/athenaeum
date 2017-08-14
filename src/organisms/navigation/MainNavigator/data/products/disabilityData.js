const submenuItems = [
  {
    header: 'Types of Disability Insurance',
    items: [
      { title: 'Long Term Disability Insurance', href: '/long-term-disability-insurance', },
      { title: 'Short Term Disability Insurance', href: 'https://www.policygenius.com/blog/is-short-term-disability-insurance-worth-it/', },
      { title: 'Social Security Disability', href: 'https://www.policygenius.com/blog/what-is-social-security-disability-insurance/', },
    ],
  },
  {
    header: 'Helpful Resources',
    items: [
      { title: 'How To Apply For Disability Insurance?', href: '/long-term-disability-insurance/guide/application-process/', },
      { title: 'Long Term vs. Short Term Disability Insurance', href: 'https://www.policygenius.com/blog/long-term-disability-vs-short-term-disability-explained/', },
      { title: 'How Does Disability Insurance Work?', href: '/long-term-disability-insurance/guide/', },
      { title: 'Real Claims Stories', href: '/long-term-disability-insurance/guide/real-claims-stories/', },
      { title: 'How Long Do Disability Benefits Last?', href: 'https://www.policygenius.com/blog/long-term-disability-insurance-benefits/', },
    ],
  },
];

export default {
  header: 'Disability Insurance',
  link: '/long-term-disability-insurance/',
  activeName: 'disability-insurance',
  intro: {
    cta: 'Get A Free Quote',

    imgSrc: 'https://res-1.cloudinary.com/policygenius/image/upload/v1/general/disability',
    linkHref: '/long-term-disability-insurance/',
  },
  list: {
    key: 'disability-submenu-list-',
    items: submenuItems,
    type: 'links',
  }
};
