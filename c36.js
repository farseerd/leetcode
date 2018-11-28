/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function hasEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!board[i][j].val) {
        return true
      }
    }
  }
  return false
}

var solveSudoku = function (board) {
  let data = board.map(row => row.map(o => o === '.' ? ({
    val: null,
    assume: []
  }) : ({
    val: o
  })))

  console.log(data)
 
  // while (1) {
  //   if (!hasEmpty(data)) {
  //     return data.map(row => row.map(o => o.val))
  //   }
  // }

};