/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {

  let get = (x, y) => {
    if (board[x] === undefined) {
      return undefined
    } else {
      return board[x][y]
    }
  }

  let count = (x, y) => {
    let sum = 0
    sum += get(x - 1, y - 1) === 'M' ? 1 : 0
    sum += get(x - 1, y) === 'M' ? 1 : 0
    sum += get(x - 1, y + 1) === 'M' ? 1 : 0
    sum += get(x, y - 1) === 'M' ? 1 : 0
    sum += get(x, y + 1) === 'M' ? 1 : 0
    sum += get(x + 1, y - 1) === 'M' ? 1 : 0
    sum += get(x + 1, y) === 'M' ? 1 : 0
    sum += get(x + 1, y + 1) === 'M' ? 1 : 0
    return sum
  }

  let fn = (x, y) => {
    let c = get(x, y)
    if (c === 'M') {
      board[x][y] = 'X'
    } else if (c === 'E') {
      let sum = count(x, y)
      if (sum > 0) {
        board[x][y] = sum.toString()
      } else {
        board[x][y] = 'B'
        fn(x - 1, y - 1)
        fn(x - 1, y)
        fn(x - 1, y + 1)
        fn(x, y - 1)
        fn(x, y + 1)
        fn(x + 1, y - 1)
        fn(x + 1, y)
        fn(x + 1, y + 1)
      }
    }
  }

  fn(...click)
  return board

};