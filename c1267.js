/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  function initArr(m) {
    let t = Array(m).fill(0)
    for (let i = 0; i < m; i++) {
      t[i] = []
    }
    return t
  }

  let [m, n] = [grid.length, grid[0].length]
  let c = initArr(m)
  let r = initArr(m)

  for (let j = 0; j < n; j++) {
    let col = 0
    for (let i = 0; i < m; i++) {
      col += grid[i][j]
      if (col >= 2) {
        for (let i = 0; i < m; i++) {
          c[i][j] = grid[i][j]
        }
        break
      }
    }
  }

  for (let i = 0; i < m; i++) {
    let row = 0
    for (let j = 0; j < n; j++) {
      row += grid[i][j]
      if (row >= 2) {
        for (let j = 0; j < n; j++) {
          r[i][j] = grid[i][j]
        }
        break
      }
    }
  }

  let sum = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (c[i][j] || r[i][j]) sum++
    }
  }

  return sum
}
