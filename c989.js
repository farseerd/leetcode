/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let p = A.length - 1
  let n = K
  while (true) {
    A[p] += n
    let r = A[p] % 10
    n = (A[p] - r) / 10
    if (n > 0) {
      A[p] = r
      if (p === 0) {
        A = [0, ...A]
      } else {
        p--
      }
    } else {
      return A
    }
  }
};