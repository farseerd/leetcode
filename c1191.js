/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  const add = (a, b) => a + b

  let sum = arr.reduce(add, 0)

  // calc mid dp
  let dp = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(arr[i], arr[i] + dp[i - 1])
  }
  let max = Math.max(...dp)

  // calc left
  let left = 0,
    maxLeft = 0
  for (let i = 0; i < arr.length; i++) {
    left += arr[i]
    maxLeft = Math.max(left, maxLeft)
  }

  // calc right
  let right = 0,
    maxRight = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    right += arr[i]
    maxRight = Math.max(right, maxRight)
  }

  return (
    Math.max(max, Math.max(k - 2, 0) * Math.max(sum, 0) + maxLeft + maxRight) %
    (1e9 + 7)
  )
}
