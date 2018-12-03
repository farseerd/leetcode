/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {

  let r = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      r.push(i)
    }
  }

  if (S > r.length) return 0

  let count = 0

  if (S === 0) {
    let zr = []
    let p = 0
    for (; p < r.length; p++) {
      zr.push(r[p] - (p > 0 ? (r[p - 1] + 1) : 0))
    }
    zr.push(A.length - (r.length > 0 ? (r[p - 1] + 1) : 0))
    for (let i = 0; i < zr.length; i++) {
      count += zr[i] * (zr[i] + 1) / 2
    }
  } else {
    for (let i = 0; i <= r.length - S; i++) {
      let a, b
      if (r[i] === 0) {
        a = 1
      } else if (i === 0) {
        a = r[i] + 1
      } else {
        a = r[i] - r[i - 1]
      }
      if (r[i + S - 1] === A.length - 1) {
        b = 1
      } else if (i + S === r.length) {
        b = A.length - r[i + S - 1]
      } else {
        b = r[i + S] - r[i + S - 1]
      }
      count += a * b
    }
  }

  return count

};