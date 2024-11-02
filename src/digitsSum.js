/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {

    const nAbs = Math.abs(n) // -2 to 2
    const nAbsToString = nAbs.toString(); // number to string
    const splitted = nAbsToString.split(''); // array

    let sum = 0; //sum of digits

    for (let i = 0; i < splitted.length; i++) {
      sum += +splitted[i]; // +word => short version of string to number
    } 
    return sum;
  }