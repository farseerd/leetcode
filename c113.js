/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let result = []

  function trav(node, arr, n) {
    if (node === null) return
    if (node.left === null && node.right === null) {
      if (sum - node.val === n) result.push([...arr, node.val])
    } else {
      trav(node.left, [...arr, node.val], n + node.val)
      trav(node.right, [...arr, node.val], n + node.val)
    }
  }

  trav(root, [], 0)
  return result
}
