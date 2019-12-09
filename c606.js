/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  function f(node) {
    if (!node) return ''
    let left = f(node.left)
    let right = f(node.right)
    if (left !== '' || right !== '') left = `(${left})`
    if (right !== '') right = `(${right})`
    return node.val.toString() + left + right
  }

  return f(t)
}
