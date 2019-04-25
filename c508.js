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
var findFrequentTreeSum = function(root) {
  let m = new Map()

  function calc(node) {
    if (!node) return 0
    node.sum = node.val + calc(node.left) + calc(node.right)
    return node.sum
  }
  function trav(node) {
    console.log(node)
    if(!node) return
    if(!m.has(node.sum)) {
      m.set(node.sum, 1)
    } else {
      m.set(node.sum, m.get(node.sum) + 1)
    }
    trav(node.left)
    trav(node.right)
  }
  
  calc(root)
  trav(root)
  let max = Math.max(...m.values())
  return Array.from(m.keys()).filter(o => m.get(o) === max)

}
