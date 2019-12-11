/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  let result = [[1]]
  for (let i = 1; i < numRows; i++) {
    let last = result[result.length - 1]
    let next = []
    for (let j = 0; j <= last.length; j++) {
      next[j] = (last[j] || 0) + (last[j - 1] || 0)
    }
    result.push(next)
  }
  return result
}
