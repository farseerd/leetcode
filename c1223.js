/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  const D = 1e9 + 7

  let dp = [[1, 1, 1, 1, 1, 1, 6]]
  for (let i = 1; i < n; i++) {
    let next = []
    let sum = 0
    for (let j = 0; j < 6; j++) {
      if (i < rollMax[j]) {
        next[j] = dp[i - 1][6]
      } else if (i === rollMax[j]) {
        next[j] = dp[i - 1][6] - 1
      } else {
        next[j] =
          dp[i - 1][6] - dp[i - rollMax[j] - 1][6] + dp[i - rollMax[j] - 1][j]
      }
      next[j] %= D
      next[j] += D
      sum += next[j]
    }
    next[6] = sum
    dp.push(next)
  }
  return dp[dp.length - 1][6] % D
}
