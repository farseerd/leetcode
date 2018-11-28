/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {

  const LEN = 80002

  let count = Array(LEN).fill(0)
  for (let num of A) {
    count[num]++
  }

  let ans = 0
  let taken = 0

  for (let i = 0; i < LEN; i++) {
    if (count[i] >= 2) {
      taken += count[i] - 1
      ans -= i * (count[i] - 1)
    } else if (taken > 0 && count[i] == 0) {
      taken--
      ans += i
    }
  }

  return ans


};