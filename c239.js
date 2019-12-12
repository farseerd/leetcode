/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k === 0) return []
  let result = []
  let len = nums.length
  for (let i = 0; i <= len - k; i++) {
    result.push(Math.max(...nums.slice(i, i + k)))
  }

  return result
}
