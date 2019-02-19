/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let [X, Y] = [matrix.length, matrix[0].length]
  let result = Array(X)
  for (let i = 0; i < X; i++) {
    result[i] = []
  }

  let refresh = 0

  let get = (m, x, y) => {
    let mx = m[x]
    if (mx === undefined) {
      return undefined
    } else {
      return mx[y]
    }
  }

  let test = function (x, y) {
    let arr = [get(result, x - 1, y), get(result, x + 1, y), get(result, x, y - 1), get(result, x, y + 1)]
    return arr.some(o => o === refresh)
  }

  let check = () => {
    for (let i = 0; i < X; i++) {
      for (let j = 0; j < Y; j++) {
        if (result[i][j] === undefined) return false
      }
    }
    return true
  }

  for (let i = 0; i < X; i++) {
    for (let j = 0; j < Y; j++) {
      if (matrix[i][j] === 0) result[i][j] = 0
    }
  }

  while (!check()) {
    for (let i = 0; i < X; i++) {
      for (let j = 0; j < Y; j++) {
        if (result[i][j] === undefined) {
          result[i][j] = test(i, j) ? refresh + 1 : undefined
        }
      }
    }
    refresh++
  }

  return result

};