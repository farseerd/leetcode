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
  let stack = []
  let p = root

  while (p || stack.length > 0) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    p = stack.pop()
    if (p) {
      result.push(p.val)
      p = p.right
    }
  }

  return result

};