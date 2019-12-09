/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let sum = (a, b) => a + b
  let [col, row] = [matrix.length, matrix[0].length]
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (matrix[i][j] && i && j) {
        matrix[i][j] += Math.min(
          matrix[i - 1][j],
          matrix[i][j - 1],
          matrix[i - 1][j - 1]
        )
      }
    }
  }
  return matrix.map(o => o.reduce(sum, 0)).reduce(sum, 0)
}
