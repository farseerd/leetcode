/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  if (nums.length < 2) {
    return []
  }
  nums.sort((a, b) => a < b ? -1 : 1)
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i]
    if (a > 0) break
    if (i > 0 && nums[i - 1] === a) continue
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      let b = nums[j]
      let c = nums[k]
      let v = a + b + c
      if (a + b + c === 0) {
        result.push([a, b, c])
        while (j < k && b == nums[++j]) {}
        while (j < k && c == nums[--k]) {}
      } else if (v < 0) {
        j++
      } else {
        k--
      }
    }
  }

  return result
};