import { RESOURCES } from '../constants';

export const buttons = {
  selectProductButton: {
    text: 'Select a Product',
  },
  newsletterButton: {
    text: 'Get our newsletter',
    attr: {
      href: 'https://visit.policygenius.com/ub/newslettersignup/',
      rel: '',
      target: '',
    },
  }
};

export const resourcesList = {
  [RESOURCES.INSURANCE_GUIDES]: {
    header: 'Insurance Product Guides',
    items: [
      {
        title: 'Life Insurance Advice',
        href: 'https://www.policygenius.com/life-insurance/learn/',
      },
      {
        title: 'Health Insurance Guide',
        href: 'https://www.policygenius.com/health-insurance/learn/',
      },
      {
        title: 'Long Term Disability Insurance Guide',
        href: 'https://www.policygenius.com/long-term-disability-insurance/learn/',
      },
      {
        title: 'Pet Insurance Guide',
        href: 'https://www.policygenius.com/pet-insurance/guide/',
      },
      {
        title: "Renter's Insurance Guide",
        href: 'https://www.policygenius.com/renters-insurance/guide/',
      },
    ]
  },
  [RESOURCES.GENIUS_CENTER]: {
    header: 'Genius Center',
    items: [
      {
        title: 'Insurance Advice',
        href: 'https://www.policygenius.com/blog/category/insurance',
      },
      {
        title: 'Life Advice',
        href: 'https://www.policygenius.com/blog/category/life',
      },
      {
        title: 'Work Advice',
        href: 'https://www.policygenius.com/blog/category/work',
      },
      {
        title: 'Money Advice',
        href: 'https://www.policygenius.com/blog/category/money',
      },
      {
        title: 'Parenting Advice',
        href: 'https://www.policygenius.com/blog/category/parenting',
      },
    ]
  },
  [RESOURCES.HELPFUL_RESOURCES]: {
    header: 'Helpful Resources',
    items: [
      {
        title: 'Life Insurance Advice',
        href: 'https://www.policygenius.com/life-insurance/learn',
      },
      {
        title: 'Health Insurance Marketplace',
        href: 'https://www.policygenius.com/health-insurance/learn/how-to-shop-on-marketplaces-and-exchanges/'
      },
      {
        title: 'Obamacare',
        href: 'https://www.policygenius.com/health-insurance/faq/how-do-i-apply-for-obamacare/'
      },
      {
        title: 'Life Insurance Calculator',
        href: 'https://www.policygenius.com/life-insurance/quotes/basic_info'
      },
    ]
  },
  [RESOURCES.REVIEWS]: {
    header: 'Reviews',
    items: [
      {
        title: 'Trust Pilot Reviews',
        href: 'https://www.trustpilot.com/review/policygenius.com'
      }
    ]
  },
  [RESOURCES.ABOUT]: {
    header: 'About',
    items: [
      {
        title: 'Our Story',
        href: 'https://www.policygenius.com/about',
      },
      {
        title: 'Values',
        href: 'https://www.policygenius.com/about/values',
      },
      {
        title: 'Team',
        href: 'https://www.policygenius.com/about/team',
      },
      {
        title: 'Careers',
        href: 'https://www.policygenius.com/careers',
      },
      {
        title: 'Press',
        href: 'https://www.policygenius.com/about/press',
      },
      {
        title: 'FAQ',
        href: 'https://www.policygenius.com/about/faq',
      },
      {
        title: 'Partnerships',
        href: 'https://www.policygenius.com/about/partnerships',
      },
    ]
  },

};
