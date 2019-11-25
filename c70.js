/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let f = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1]
  }
  return f[n]
}
