/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  if (A[A.length - 1] <= 0) {
    return A.map(o => o * o).reverse()
  }
  let p = 0,
    q = 1
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] <= 0 && A[i + 1] > 0) {
      p = i
      q = i + 1
      break
    }
  }
  let result = []
  while (p >= 0 || q < A.length) {
    if (p < 0) {
      result.push(A[q] * A[q])
      q++
    } else if (q > A.length - 1) {
      result.push(A[p] * A[p])
      p--
    } else {
      let Ap = A[p] * A[p]
      let Aq = A[q] * A[q]
      if (Ap < Aq) {
        result.push(Ap)
        p--
      } else {
        result.push(Aq)
        q++
      }
    }
  }
  return result
};