/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let findMax = arr => {
    let max = -Infinity,
      index = -1
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i]
        index = i
      }
    }
    return [max, index]
  }

  let fn = arr => {
    if (arr.length === 0) return null
    let [max, index] = findMax(arr)
    let node = new TreeNode(max)
    node.left = fn(arr.slice(0, index))
    node.right = fn(arr.slice(index + 1))
    return node
  }

  return fn(nums)
};