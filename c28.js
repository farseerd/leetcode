/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// kmp

var strStr = function (haystack, needle) {

  let f

  function next(s) {
    const len = s.length
    f = Array(len)
    f[0] = -1
    let [k, j] = [-1, 0]
    while (j < len - 1) {
      if (k === -1 || s[k] === s[j]) {
        f[++j] = ++k
      } else {
        k = f[k]
      }
    }
  }

  let [i, j] = [0, 0]
  next(needle)
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++
      j++
    } else {
      j = f[j]
    }
  }
  return j === needle.length ? i - j : -1

};