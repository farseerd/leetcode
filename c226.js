/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null
  function invert(node) {
    ;[node.left, node.right] = [node.right, node.left]
    if (node.left) invert(node.left)
    if (node.right) invert(node.right)
  }
  invert(root)
  return root
}
