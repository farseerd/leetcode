/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (word.length === 0) return true

  let [col, row] = [board.length, board[0].length]

  function getPos(char) {
    let result = []
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (board[i][j] === char) {
          result.push([i, j])
        }
      }
    }
    return result
  }

  function check([x, y], index) {
    if (index === word.length) return true
    if ((board[x] || [])[y] !== word[index]) return false
    let t = board[x][y]
    board[x][y] = 0
    if (
      check([x - 1, y], index + 1) ||
      check([x + 1, y], index + 1) ||
      check([x, y - 1], index + 1) ||
      check([x, y + 1], index + 1)
    )
      return true
    board[x][y] = t
    return false
  }

  let posList = getPos(word[0])
  for (let pos of posList) {
    if (check(pos, 0)) return true
  }
  return false
}
