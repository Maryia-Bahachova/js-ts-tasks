/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((res, rej) => {
    promisesArray.forEach((indexOfPromises) => {
      Promise.resolve(indexOfPromises)
        .then(res) 
        .catch(rej); 
    });
  });
};
