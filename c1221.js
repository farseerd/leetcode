/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0
  let l = 0,
    r = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      l++
    } else {
      r++
    }
    if (l === r) {
      count++
      l = r = 0
    }
  }
  return count
}
