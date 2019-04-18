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
var postorderTraversal = function (root) {

  let result = []
  
  function trav(node) {
    if(node === null) return
    trav(node.left)
    trav(node.right)
    result.push(node.val)
  }

  trav(root)

  return result

};