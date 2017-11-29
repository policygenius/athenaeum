const urlMatchData = [
  {
    regex: new RegExp(/^\/blog/),
    active: 'magazine',
  },
  {
    regex: new RegExp(/^\/about/),
    active: 'about',
  },
  {
    regex: new RegExp(/^\/careers/),
    active: 'about',
  },
];

export default urlMatchData;
