/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {

  let len = A.length

  let can = [true, true, true, true, true, true]
  let up = [Infinity, 0, 0, 0, 0, 0, 0]
  let down = [Infinity, 0, 0, 0, 0, 0, 0]

  for (let i = 0; i < len; i++) {
    if (can.every(o => !o)) return -1
    for (let num = 1; num <= 6; num++) {
      if (!can[num - 1]) continue
      if (A[i] !== num && B[i] !== num) {
        can[num - 1] = false
      } else if (A[i] === num && B[i] !== num) {
        up[num]++
      } else if (A[i] !== num && B[i] === num) {
        down[num]++
      }
    }
  }

  let result = []
  for (let i = 1; i <= 6; i++) {
    if (can[i - 1]) {
      result = [...result, up[i], down[i]]
    }
  }

  return result.length === 0 ? -1 : Math.min(...result)

};