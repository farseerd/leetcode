/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let result = []
  if (!root) return result
  function f(node, depth) {
    if (result[depth] === undefined) {
      result[depth] = node.val
    } else {
      result[depth] = Math.max(result[depth], node.val)
    }
    if (node.left) f(node.left, depth + 1)
    if (node.right) f(node.right, depth + 1)
  }
  f(root, 0)
  return result
}
