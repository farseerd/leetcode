/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

  function trav(pNode, qNode) {
    if (pNode === null && qNode !== null || pNode !== null && qNode === null) return false
    if (pNode === null && qNode === null) return true
    if (pNode.val !== qNode.val) return false
    return trav(pNode.left, qNode.left) && trav(pNode.right, qNode.right)
  }

  return trav(p, q)

};