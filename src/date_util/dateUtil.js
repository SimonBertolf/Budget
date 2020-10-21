const monthNames = [
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
  'December',
];

const dateUtil = {

  /**
   * @param {Date} date
   */
  formatDate(date) {
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${day}. ${month}`;
  },
};

export default dateUtil;
