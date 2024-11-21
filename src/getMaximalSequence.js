/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
    let maxSequence = []; // пустой массив
    let currentSequence = [arr[0]]; // массив со значением 1 элемента

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) { // если соседние равны
            currentSequence.push(arr[i]); // пуш в текущую последовательность
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence; // или обновить макс последовательность
            }
            currentSequence = [arr[i]]; //обновляем текущую последовательность
        }
    }
    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}
