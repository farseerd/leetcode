/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  function f(node1, node2) {
    if (!node1 && !node2) return
    node1.val += node2.val
    if (node1.left && node2.left) {
      f(node1.left, node2.left)
    } else if (!node1.left) {
      node1.left = node2.left
    }
    if (node1.right && node2.right) {
      f(node1.right, node2.right)
    } else if (!node1.right) {
      node1.right = node2.right
    }
  }

  if (!t1) return t2
  if (!t2) return t1

  f(t1, t2)
  return t1
}
