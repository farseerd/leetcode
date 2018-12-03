/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {

  if (A.length < 3) return false

  let p = 1
  for (; p < A.length; p++) {
    if (A[p] <= A[p - 1]) break
  }
  if (p === 1 || p === A.length) return false

  for (; p < A.length; p++) {
    if (A[p] >= A[p - 1]) return false
  }

  return true

};