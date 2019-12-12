/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!t) return true
  function isSame(a, b) {
    if (!a && !b) return true
    if ((!a && b) || (!b && a)) return false
    if (a.val !== b.val) return false
    return isSame(a.left, b.left) && isSame(a.right, b.right)
  }

  function check(a, b) {
    if (!a) return false
    if (isSame(a, b)) return true
    return check(a.left, b) || check(a.right, b)
  }

  return check(s, t)
}
