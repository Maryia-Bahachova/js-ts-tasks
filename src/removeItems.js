/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) !== JSON.stringify(value)) {
      result.push(arr[i]);
    }
  }
  return result;
};
