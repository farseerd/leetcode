/**
 * @param {number} N
 * @return {number}
 */

var bitwiseComplement = function (N) {
  if (N === 0) return 1
  let c = 0,
    n = N
  while (n > 0) {
    n = n >> 1
    c++
  }
  return 2 ** c - N - 1
};