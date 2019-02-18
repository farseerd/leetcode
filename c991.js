/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  let result = 0
  while (Y > X) {
    result++
    if (Y % 2 == 1) {
      Y++
    } else {
      Y /= 2
    }
  }
  return result + X - Y
};