/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let sp = []
  for (let i = 0; i < s.length; i++) {
    let last = sp[sp.length - 1]
    if (last && last[0] === s[i]) {
      last[1]++
      if (last[1] === k) sp.pop()
    } else {
      sp.push([s[i], 1])
    }
  }
  let result = ''
  for(let item of sp) {
    result += item[0].repeat(item[1])
  }
  return result
}
