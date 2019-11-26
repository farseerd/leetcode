/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  let target = s.length / 4

  let count = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  }
  for (let i = 0; i < s.length; i++) {
    count[s[i]]++
  }
  let max = Math.max(...Object.values(count))
  if (max === target) return 0

  let p = 0,
    q = 0

  let min = Infinity
  count[s[p]]--

  while (p < s.length && q < s.length) {
    if (valid()) {
      min = Math.min(min, q - p + 1)
      if (p === q) return min
      count[s[p]]++
      p++
    } else {
      q++
      count[s[q]]--
    }
  }

  function valid() {
    return Object.values(count).every(o => o <= target)
  }

  return min
}
