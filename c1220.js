/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const D = 1e9 + 7

  let dp = {
    a: [1],
    e: [1],
    i: [1],
    o: [1],
    u: [1]
  }

  for (let i = 1; i < n; i++) {
    dp.a[i] = dp.e[i - 1] % D
    dp.e[i] = (dp.a[i - 1] + dp.i[i - 1]) % D
    dp.i[i] = (dp.a[i - 1] + dp.e[i - 1] + dp.o[i - 1] + dp.u[i - 1]) % D
    dp.o[i] = (dp.i[i - 1] + dp.u[i - 1]) % D
    dp.u[i] = dp.a[i - 1] % D
  }

  return (
    Object.values(dp)
      .map(o => o[o.length - 1])
      .reduce((a, b) => a + b, 0) % D
  )
}
