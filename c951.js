/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {

  function check(node1, node2) {
    if (node1 === null && node2 === null) return true
    if (node1 === null && node2 !== null || node1 !== null && node2 === null) return false
    if (node1.val !== node2.val) return false
    if (node1.left === null || node1.right === null) {
      if (node1.left === null && node2.left === null || node1.right === null && node2.right === null) {
        return check(node1.left, node2.left) && check(node1.right, node2.right)
      } else {
        return check(node1.left, node2.right) && check(node1.right, node2.left)
      }
    } else {
      if (node2.left === null || node2.right === null) return false
      if (node1.left.val === node2.left.val) {
        return check(node1.left, node2.left) && check(node1.right, node2.right)
      } else {
        return check(node1.left, node2.right) && check(node1.right, node2.left)
      }
    }
  }

  return check(root1, root2)

};