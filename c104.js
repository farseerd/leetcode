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
var maxDepth = function (root) {

  function dept(node, d) {
    if (node === null) return d
    return Math.max(dept(node.left, d + 1), dept(node.right, d + 1))
  }

  return dept(root, 0)

};