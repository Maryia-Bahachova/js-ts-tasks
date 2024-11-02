/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  
  if ( typeof firstNumber === 'string' && typeof secondNumber === 'string') {
    let firstNumber1 = firstNumber.replaceAll(" ", "");
    let secondNumber1 = secondNumber.replaceAll(" ", "");
    let firstNumber2 = Number(firstNumber1);
    let secondNumber2 = Number(secondNumber1);
    let sum = firstNumber2 + secondNumber2;
    return sum;
  } 
    let firstNumber2 = +firstNumber;
    let secondNumber2 = +secondNumber;
  
  let sum = firstNumber2 + secondNumber2;
  return sum;
};
