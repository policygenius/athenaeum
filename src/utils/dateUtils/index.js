export default {
  // eslint-disable-next-line
  months: () => {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  },

  dateStrObj: (dateString) => {
    const [ month, day, year ] = dateString.split('-');

    return { month, day, year };
  },

  daysInMonth: (month = 1, year = 2017) => new Date(year, month, 0).getDate()

};
