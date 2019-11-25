/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let m = [triangle[0]]
  for (let i = 1, len = triangle.length; i < len; i++) {
    m[i] = []
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        m[i][j] = m[i - 1][j] + triangle[i][j]
      } else if (j === triangle[i].length - 1) {
        m[i][j] = m[i - 1][j - 1] + triangle[i][j]
      } else {
        m[i][j] = Math.min(m[i - 1][j], m[i - 1][j - 1]) + triangle[i][j]
      }
    }
  }
  return Math.min(...m[m.length - 1])
}
