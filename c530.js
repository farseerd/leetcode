/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let list = []

  function f(node) {
    if (!node) return
    list.push(node.val)
    f(node.left)
    f(node.right)
  }
  f(root)
  list.sort((a, b) => a - b)
  let min = Infinity
  for (let i = 1; i < list.length; i++) {
    min = Math.min(list[i] - list[i - 1], min)
  }

  return min
}
