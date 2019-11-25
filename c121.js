/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let m = 0
  let b = prices[0]
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] < b) {
      b = prices[i]
    } else {
      let t = prices[i] - b
      m = t > m ? t : m
    }
  }
  return m
}
