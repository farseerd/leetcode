/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let s1 = Array(N + 1).fill(0)
  let s2 = Array(N + 1).fill(true)
  for (let i = 0; i < trust.length; i++) {
    s1[trust[i][1]]++
    s2[trust[i][0]] = false
  }
  for (let i = 1; i <= N; i++) {
    if (s1[i] === N - 1 && s2[i]) {
      return i
    }
  }
  return -1
};