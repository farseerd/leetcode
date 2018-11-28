/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function (A) {
  let max = Array(A.length).fill(A[0])
  let min = Array(A.length).fill(A[A.length - 1])
  for (let i = A.length - 2; i >= 0; i--) {
    min[i] = A[i] < min[i + 1] ? A[i] : min[i + 1]
  }
  for (let i = 0; i < A.length - 1; i++) {
    max[i + 1] = A[i + 1] > max[i] ? A[i + 1] : max[i]
    if (max[i] <= min[i + 1]) {
      return i + 1
    }
  }
};