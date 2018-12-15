/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

  let count = 0
  let sum = 0

  let map = new Map()
  map.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.get(sum - k) !== undefined) {
      count += map.get(sum - k)
    }
    if (map.get(sum) !== undefined) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
  }

  return count

};