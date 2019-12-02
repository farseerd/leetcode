/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let sp = []
  for (let i = 0; i < s.length; i++) {
    sp.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i)))
  }

  let p = 0,
    q = 0,
    len = 0,
    cost = 0
  while (q < sp.length) {
    if (cost + sp[q] <= maxCost) {
      len = Math.max(len, q - p + 1)
      cost += sp[q]
      q++
    } else {
      cost -= sp[p]
      p++
    }
  }
  return len
}

