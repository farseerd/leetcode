/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let [col, row] = [matrix.length, (matrix[0] || []).length]
  if (col === 0 || row === 0) return 0
  let colOne = matrix[0].some(o => o == 1) ? 1 : 0
  let rowOne = matrix.map(o => o[0]).some(o => o == 1) ? 1 : 0
  let result = colOne || rowOne

  if (col === 1 || row === 1) {
    return result
  }
  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (matrix[i][j] != 0) {
        matrix[i][j] =
          Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) +
          Number(matrix[i][j])
      }
      result = Math.max(result, matrix[i][j])
    }
  }

  return result * result
}