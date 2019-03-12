/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function N(val) {
  this.val = val
  this.left = this.right = null
}

function makeTree(list) {
  if (list.length === 0) return null
  let root = new N(list[0])
  let i = 1
  for (; i < list.length; i++) {
    if (list[i] > list[0]) break
  }
  root.left = makeTree(list.slice(1, i))
  root.right = makeTree(list.slice(i))
  return root
}


/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {

  return makeTree(preorder)

};