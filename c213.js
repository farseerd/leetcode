/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0
  } else if (nums.length === 1) {
    return nums[0]
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let dpa = [nums[0], Math.max(nums[0], nums[1])],
    dpb = [0, nums[1]]
  for (let i = 2; i < nums.length; i++) {
    dpa[i] = Math.max(
      i === nums.length - 1 ? 0 : dpa[i - 2] + nums[i],
      dpa[i - 1]
    )
    dpb[i] = Math.max(dpb[i - 2] + nums[i], dpb[i - 1])
  }
  return Math.max(dpa[dpa.length - 1], dpb[dpb.length - 1])
}
