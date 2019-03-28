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

function count(node) {
  if (node === null) return 0
  let l = count(node.left)
  let r = count(node.right)
  node.more = l + r + node.val - 1
  return node.more
}

function calc(node) {
  if (node === null) return 0
  node.calc = calc(node.left) + calc(node.right) + Math.abs(node.more)
  return node.calc
}

var distributeCoins = function (root) {
  count(root)
  calc(root)
  return root.calc
};