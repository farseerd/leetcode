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
var pruneTree = function (root) {

  function check(node) {
    if (node === null) return true
    let l = check(node.left)
    let r = check(node.right)
    node.remove = l && r && node.val == 0
    return node.remove
  }

  function remove(node) {
    if (node === null) return
    if (node.left && node.left.remove) {
      node.left = null
    }
    if (node.right && node.right.remove) {
      node.right = null
    }
    remove(node.left)
    remove(node.right)
  }

  check(root)
  if (root.remove) {
    return null
  } else {
    remove(root)
    return root
  }

};