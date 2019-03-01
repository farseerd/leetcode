/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let n = root.val
  let b = true

  function trav(node) {
    if (!node) return
    if (node.val === n) {
      trav(node.left)
      trav(node.right)
    } else {
      b = false
    }
  }

  trav(root)

  return b
};