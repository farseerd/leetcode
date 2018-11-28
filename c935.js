/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function (N) {

  const MOD = 1e9 + 7

  const map = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [3, 9, 0],
    [],
    [1, 7, 0],
    [2, 6],
    [1, 3],
    [2, 4]
  ]

  let [dp1, dp2] = [
    Array(10).fill(1),
    Array(10).fill(0)
  ]

  for (let hop = 0; hop < N - 1; hop++) {
    for (let i = 0; i <= 9; i++) {
      for (let pos of map[i]) {
        dp2[i] += dp1[pos]
      }
    }
    dp1 = dp2.map(o => o % MOD)
    dp2 = Array(10).fill(0)
  }

  return dp1.reduce((a, b) => a + b) % MOD

};