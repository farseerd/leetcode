/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

  function trav(node, s) {
    if (!node) return false
    if (!node.left && !node.right && node.val === s) return true
    return trav(node.left, s - node.val) || trav(node.right, s - node.val)
  }

  return trav(root, sum)

};