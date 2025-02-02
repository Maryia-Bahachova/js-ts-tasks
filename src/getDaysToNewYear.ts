/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let date: Date;
  if (typeof targetDate === 'string') {
      const [day, month, year] = targetDate.split('.').map(Number);
      date = new Date(Date.UTC(year!, month! - 1, day));
  } else {
      date = new Date(Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()));
  }
  const newYear = new Date(Date.UTC(date.getUTCFullYear() + 1, 0, 1));
  const diffTime = newYear.getTime() - date.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}