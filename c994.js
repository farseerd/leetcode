/**
 * @param {number[][]} grid
 * @return {number}
 */

function countFreshNum(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++
      }
    }
  }
  return count
}

function rot(grid, check) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === check) {
        if (i > 0 && grid[i - 1][j] === 1) {
          grid[i - 1][j] = check + 1
          count++
        }
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          grid[i + 1][j] = check + 1
          count++
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          grid[i][j - 1] = check + 1
          count++
        }
        if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
          grid[i][j + 1] = check + 1
          count++
        }
      }
    }
  }
  return count
}

var orangesRotting = function (grid) {
  let fresh = countFreshNum(grid)
  let count = 0
  let check = 2
  while (fresh > 0) {
    let rotted = rot(grid, check)
    if (rotted === 0) {
      return -1
    }
    fresh -= rotted
    count++
    check++
  }
  return count
};