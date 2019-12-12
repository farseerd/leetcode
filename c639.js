/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = []
  let mod = 1e9 + 7
  let m1 = {}
  for (let i = 0; i <= 10; i++) {
    let key = i === 10 ? '*' : i.toString()
    if (i === 0) {
      m1[key] = 0
    } else if (i === 10) {
      m1[key] = 9
    } else {
      m1[key] = 1
    }
  }
  let m2 = {}
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      let key = `${(i === 10 ? '*' : i).toString()}${(j === 10
        ? '*'
        : j
      ).toString()}`
      let key2 = j === 10 ? '*' : j.toString()
      if (i === 1) {
        m2[key] = j === 10 ? 9 : 1
      } else if (i === 2) {
        m2[key] = j === 10 ? 6 : j > 6 ? 0 : 1
      } else if (i !== 10) {
        m2[key] = 0
      } else {
        m2[key] = (j === 10 ? 9 : 1) + (j === 10 ? 6 : j > 6 ? 0 : 1)
      }
    }
  }

  dp[0] = m1[s[0]]
  dp[1] = m1[s[0]] * m1[s[1]] + m2[s[0] + s[1]]

  for (let i = 2; i < s.length; i++) {
    dp[i] = (dp[i - 1] * m1[s[i]] + dp[i - 2] * m2[s[i - 1] + s[i]]) % mod
  }
  return dp[s.length - 1]
}

