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
var findBottomLeftValue = function(root) {
  let result = root.val
  let rdepth = 0
  let rtag = 0

  function f(node, depth, tag) {
    if (rdepth < depth || (rdepth === depth && tag < rtag)) {
      result = node.val
      rdepth = depth
      rtag = tag
    }
    if (node.left) f(node.left, depth + 1, tag * 2)
    if (node.right) f(node.right, depth + 1, tag * 2 + 1)
  }

  f(root, 0, 1)

  return result
}
