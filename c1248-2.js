/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let gaps = []
  let current = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & 1) {
      gaps.push(current)
      current = 0
    } else {
      current++
    }
  }
  gaps.push(current)

  let count = 0
  for (let i = 0; i < gaps.length - k; i++) {
    count += (gaps[i] + 1) * (gaps[i + k] + 1)
  }
  return count
}
