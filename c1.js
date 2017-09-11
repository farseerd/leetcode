/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
	for (let i = 0, len = nums.length; i < len; i++) {
		let tmp = nums.slice(i + 1)
		let index = tmp.indexOf(target - nums[i])
		if (index > -1) {
			return [i, index + i + 1]
		}
	}
};