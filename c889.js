/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {

  let gen = (npre, npost) => {
    if (npre.length === 0) return null
    let node = new TreeNode(npre[0])
    if (npre.length > 1) {
      let pos = npost.indexOf(npre[1])
      node.left = gen(npre.slice(1, pos + 2), npost.slice(0, pos + 1))
      node.right = gen(npre.slice(pos + 2), npost.slice(pos + 1, npost.length - 1))
    }
    return node
  }

  let root = gen(pre, post)
  return root

};