/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {

  let result = []

  function trav(node) {
    if (node === null) return
    trav(node.left)
    result.push(node.val)
    trav(node.right)
  }

  trav(root)

  return result

};