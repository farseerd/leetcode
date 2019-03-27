/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */

function toBinary(n) {
  let s = []
  while (n > 0) {
    s.push(n % 2)
    n = n >> 1
  }
  return s.reverse().join('')
}

var queryString = function (S, N) {
  for (let i = 1; i <= N; i++) {
    if (!S.includes(toBinary(i))) {
      return false
    }
  }
  return true
};