/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  function add(a, b) {
    return a + b
  }

  function min(a, b) {
    return a < b ? a : b
  }

  let sum = nums.reduce(add, 0)
  if (sum % 3 === 0) return sum

  let p,
    q = []
  let dp = sum % 3 === 1 ? 1 : 2
  let dq = 3 - dp

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === dp && (!p || p > nums[i])) {
      p = nums[i]
    }
    if (nums[i] % 3 === dq) {
      q.push(nums[i])
      q = q.sort((a, b) => a - b).slice(0, 2)
    }
  }

  if (p && q.length === 2) {
    return sum - min(p, q[0] + q[1])
  } else if (p) {
    return sum - p
  } else if (q.length === 2) {
    return sum - q[0] - q[1]
  } else {
    return 0
  }
}
