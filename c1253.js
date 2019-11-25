/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  let result = [Array(colsum.length).fill(0), Array(colsum.length).fill(0)]
  let upsum = 0,
    losum = 0
  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] === 2) {
      result[0][i] = result[1][i] = 1
      upsum++
      losum++
      if (upsum > upper || losum > lower) return []
    }
  }
  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] === 1) {
      if (upsum < upper) {
        result[0][i] = 1
        upsum++
      } else if (losum < lower) {
        result[1][i] = 1
        losum++
      } else {
        return []
      }
    }
  }
  if (upsum !== upper || losum !== lower) return []
  return result
}
