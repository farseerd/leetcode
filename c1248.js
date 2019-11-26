/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// TLE

var numberOfSubarrays = function(nums, k) {
  let p = 0,
    q = 0,
    count = 0,
    current = 0

  while (p < nums.length) {
    current += nums[q] % 2 === 1
    if (current <= k && q < nums.length) {
      count += current === k ? 1 : 0
      q++
    } else {
      current = 0
      p++
      q = p
    }
  }

  return count
}
