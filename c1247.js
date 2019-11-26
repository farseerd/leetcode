/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  let d1 = 0,
    d2 = 0

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (s1[i] === 'x') {
        d1++
      } else {
        d2++
      }
    }
  }

  if ((d1 + d2) % 2 === 1) {
    return -1
  } else {
    return (d1 + d2) / 2 + (d1 % 2 === 1 ? 1 : 0)
  }
}
