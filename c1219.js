/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  let [col, row] = [grid.length, grid[0].length]

  const max = Math.max

  function dfs(x, y) {
    let tmp = grid[x][y]
    grid[x][y] = 0
    let r = 0

    if (x > 0 && grid[x - 1][y]) {
      r = max(r, grid[x - 1][y] + dfs(x - 1, y))
    }
    if (x < col - 1 && grid[x + 1][y]) {
      r = max(r, grid[x + 1][y] + dfs(x + 1, y))
    }
    if (y > 0 && grid[x][y - 1]) {
      r = max(r, grid[x][y - 1] + dfs(x, y - 1))
    }
    if (y < row - 1 && grid[x][y + 1]) {
      r = max(r, grid[x][y + 1] + dfs(x, y + 1))
    }
    grid[x][y] = tmp

    return r
  }

  let result = 0
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      let t = 0
      if (grid[i][j]) {
        t = dfs(i, j)
      }
      if (t + grid[i][j] > result) result = t + grid[i][j]
    }
  }

  return result
}
