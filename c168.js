/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {

  let result = []
  while (n > 0) {
    let m = n % 26
    if (m === 0) {
      m += 26
    }
    result.unshift(String.fromCharCode(64 + m))
    n = (n - m) / 26
  }
  return result.join('')

};