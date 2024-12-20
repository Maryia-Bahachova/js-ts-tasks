/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
    return new Promise((resolve, reject) => {
      const results = []; 
      let resolvedCount = 0; 
      for (let i = 0; i < promisesArray.length; i++) {
        Promise.resolve(promisesArray[i]) 
          .then((value) => {
            results[i] = value;
            resolvedCount++;
            if (resolvedCount === promisesArray.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          })
      }
      if (promisesArray.length === 0) {
        resolve(results);
      }
    })
  }
