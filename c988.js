/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

var smallestFromLeaf = function (root) {

  let leaves = []

  function trav(node) {
    if (node.left) {
      node.left.parent = node
      trav(node.left)
    }
    if (node.right) {
      node.right.parent = node
      trav(node.right)
    }
    if (!node.left && !node.right) {
      leaves.push(node)
    }
  }

  trav(root)

  let str

  for (let leaf of leaves) {
    let s = ''
    let n = leaf
    while (n) {
      s += String.fromCharCode(n.val + 97)
      n = n.parent
    }
    str = !str ? s : (str > s ? s : str)
  }

  return str


};