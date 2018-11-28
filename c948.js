/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function (tokens, P) {
  tokens = tokens.sort((a, b) => Number(a) - Number(b))
  let [p, q] = [0, tokens.length - 1]
  let points = 0
  let max = 0
  while (p <= q) {
    if (tokens[p] <= P) {
      points++
      P -= tokens[p]
      p++
      max = max < points ? points : max
    } else if (points === 0) {
      return 0
    } else {
      points--
      P += tokens[q]
      q--
    }
  }
  return max
};