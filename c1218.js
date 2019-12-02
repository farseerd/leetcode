/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  let m = new Map()
  let result = 1
  m.set(arr[0], 1)

  for (let i = 1; i < arr.length; i++) {
    let item = arr[i]
    let idf = item - difference
    if (m.has(idf)) {
      let t = m.get(idf) + 1
      result = result > t ? result : t
      m.set(item, t)
    } else {
      m.set(item, 1)
    }
    console.log(m)
  }
  return result
}

console.log(longestSubsequence([1, 2, 2, 2, 3, 4], 1))
