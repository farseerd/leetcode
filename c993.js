/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function (root, x, y) {

  let xf, yf, xd, yd

  function trav(r, depth) {
    if (!r) return
    if (r.val === x) {
      xd = depth
    }
    if (r.val === y) {
      yd = depth
    }
    if (r.left && r.left.val === x || r.right && r.right.val === x ) {
      xf = r.val
    }
    if (r.left && r.left.val === y || r.right && r.right.val === y) {
      yf = r.val
    }
    trav(r.left, depth + 1)
    trav(r.right, depth + 1)
  }

  trav(root, 0)

  return (xf !== yf) && (xd === yd)

};