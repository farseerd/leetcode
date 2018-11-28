/**
 * @param {number} n
 * @return {string[]}
 */

function gen(arr, cur, open, close, max) {
  if (cur.length == max * 2) {
    arr.push(cur)
    return
  }
  if (open < max) {
    gen(arr, cur + '(', open + 1, close, max)
  }
  if (close < open) {
    gen(arr, cur + ')', open, close + 1, max)
  }
}

var generateParenthesis = function (n) {
  let result = []
  gen(result, '', 0, 0, n)
  return result
};