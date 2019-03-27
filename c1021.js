/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {

  let t = 0,
    sum = -Infinity
  for (let i = 1; i < A.length; i++) {
    let s = A[t] + A[i] + t - i
    if (sum < s) sum = s
    if (A[t] - A[i] < i - t) {
      t = i
    }
  }

  return sum

};