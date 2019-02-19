/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {

  let i = A.length - 1

  while (i > 0) {
    let [l, r] = [0, i]
    while (r < A.length) {
      if (A[l] <= A[r]) {
        return r - l
      } else {
        l++
        r++
      }
    }
    i--
  }

  return 0

};