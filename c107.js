/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = []

  function f(node, depth) {
    if (!node) return
    if (!result[depth]) result[depth] = []
    result[depth].push(node.val)
    f(node.left, depth + 1)
    f(node.right, depth + 1)
  }

  f(root, 0)

  return result.reverse()
}
