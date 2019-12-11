/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  function first(i, j) {
    if (i === j) return nums[i]
    return Math.max(nums[i] + second(i + 1, j), nums[j] + second(i, j - 1))
  }

  function second(i, j) {
    if (i === j) return 0
    return Math.min(first(i + 1, j), first(i, j - 1))
  }

  let sum = nums.reduce((a, b) => a + b, 0)
  let score = first(0, nums.length - 1)

  return score >= sum - score
}
