/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  
  let sum = 0;
  if (typeof start === 'string' || typeof end === 'string') {
    start = +start;
    end = +end;
  }

  if (end < start) {
    start = -start;
    while (start <= end) {
      sum += start;
      start++;
    }
    return Math.abs(sum);
  }

  while (start <= end) {
    sum += start;
    start++;
  }
  return sum;
};
