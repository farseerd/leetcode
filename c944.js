/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let count = 0
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i].charCodeAt() > A[j + 1][i].charCodeAt()) {
        count++
        break
      }
    }
  }
  return count
};