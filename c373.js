/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let p = Array(nums1.length).fill(0)

  let result = []

  let minSum, minIndex

  do {
    minSum = Infinity
    minIndex = -1
    for (let i = 0; i < nums1.length; i++) {
      if (p[i] < nums2.length) {
        let sum = nums1[i] + nums2[p[i]]
        if (sum < minSum) {
          minSum = sum
          minIndex = i
        }
      }
    }
    if (minIndex >= 0) {
      result.push([nums1[minIndex], nums2[p[minIndex]]])
      p[minIndex]++
    }
  } while (result.length < k && minIndex >= 0)

  return result
}

kSmallestPairs([1, 7, 11], [1, 2, 3], 3)
