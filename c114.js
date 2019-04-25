/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root || (!root.left && !root.right)) return
  let p, q

  function trav(node) {
    if (!node) return
    if (!p) {
      p = {
        val: node.val,
        left: null,
        right: null
      }
      q = p
    } else {
      p.right = {
        val: node.val,
        left: null,
        right: null
      }
      p = p.right
    }
    trav(node.left)
    trav(node.right)
  }

  trav(root)
  root.right = q.right
  root.left = null
}
