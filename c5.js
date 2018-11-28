/**
 * @param {string} s
 * @return {string}
 */

let valid = function (s) {
  let len = s.length
  let half = Math.floor(s.length / 2)
  for (let i = 0; i < half; i++) {
    if (s[i] !== s[len - i - 1]) return false
  }
  return true
}
var longestPalindrome = function (s) {
  let len = s.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i + 1; j++) {
      let tmp = s.substr(j, len - i)
      if (valid(tmp)) {
        return tmp
      }
    }
  }
  return ''
};