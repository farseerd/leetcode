/**
 * @param {string} S
 * @return {number[]}
 */

function last(arr) {
  return arr[arr.length - 1]
}

var diStringMatch = function (S) {
  const I = 'I'
  const D = 'D'

  let isReverse = S[0] === D
  if (isReverse) {
    S = S.replace(/D/g, 'X').replace(/I/g, 'D').replace(/X/g, 'I')
  }

  let len = S.length
  let pattern = []
  for (let i = 0; i < len; i++) {
    if (pattern.length > 0 && last(pattern).type === S[i]) {
      last(pattern).len++
    } else {
      pattern.push({
        type: S[i],
        len: 1
      })
    }
  }

  let result = [0]
  let [p, q] = [0]
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i].type === I) {
      for (let j = 1; j <= pattern[i].len - 1; j++) {
        result.push(p + j)
      }
      if (i < pattern.length - 1) {
        p = p + pattern[i].len + pattern[i + 1].len
        result.push(p)
        q = p - 1
      } else {
        result.push(p + pattern[i].len)
      }
    } else {
      for (let j = 0; j < pattern[i].len; j++) {
        result.push(q - j)
      }
    }
  }

  if (isReverse) {
    return result.map(o => len - o)
  } else {
    return result
  }
};