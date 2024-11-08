/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  
  if ( typeof firstNumber === 'string' && typeof secondNumber === 'string') {
    firstNumber = firstNumber.replaceAll(" ", "");
    secondNumber = secondNumber.replaceAll(" ", "");
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
  } 
  if (typeof secondNumber === 'string') {
   secondNumber = secondNumber.replaceAll(" ", "");
   secondNumber = +secondNumber;
  }
  if (typeof firstNumber === 'string') {
    firstNumber = firstNumber.replaceAll(" ", "");
    firstNumber = +firstNumber;
  }

  let sum = firstNumber + secondNumber;
  return sum;
};
