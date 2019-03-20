/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let map = Array(60).fill(0)
  for (let item of time) {
    map[item % 60]++
  }
  let count = map[0] * (map[0] - 1) / 2 + map[30] * (map[30] - 1) / 2
  for (let i = 1; i <= 29; i++) {
    count += map[i] * map[60 - i]
  }
  return count
};