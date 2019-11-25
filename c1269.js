/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const cache = Array(steps + 1).fill(0)
  for (let i = 0; i < cache.length; i++) {
    cache[i] = []
  }
  let f = function(step, pos) {
    if (step < pos) return 0n
    if (step === 0) return pos === 0 ? 1n : 0n
    if (pos >= arrLen || pos < 0) return 0n
    let ch = cache[step][pos]
    if (ch) return ch
    let result = f(step - 1, pos) + f(step - 1, pos + 1) + f(step - 1, pos - 1)
    cache[step][pos] = result
    return result
  }
  return Number(f(steps, 0) % BigInt(1e9 + 7))
}
