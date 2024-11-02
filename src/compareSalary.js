/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let maxValue;
  let minValue;
  if (firstSalary >= secondSalary && firstSalary >= thirdSalary) {
    maxValue = firstSalary;
  } else if (thirdSalary >= secondSalary && thirdSalary >= firstSalary) {
    maxValue = thirdSalary;
  } else if (secondSalary >= firstSalary && secondSalary >= thirdSalary) {
    maxValue = secondSalary;
  }
  
  if (firstSalary <= secondSalary && firstSalary <= thirdSalary) {
    minValue = firstSalary;
  } else if (thirdSalary <= secondSalary && thirdSalary <= firstSalary) {
    minValue = thirdSalary;
  } else if (secondSalary <= firstSalary && secondSalary <= thirdSalary) {
    minValue = secondSalary;
  }
  return maxValue - minValue
};
