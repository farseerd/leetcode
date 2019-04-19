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
var isSymmetric = function (root) {

  function trav(p, q) {
    if (p === null && q !== null || p !== null && q === null) return false
    if (p === null && q === null) return true
    return p.val === q.val && trav(p.left, q.right) && trav(q.left, p.right)
  }

  return root === null ? true : trav(root.left, root.right)

};