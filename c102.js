/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

  let result = []
  if (!root) return result
  result.push([root])

  while (true) {
    let last = result[result.length - 1]
    let queue = []
    for (let item of last) {
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
    }
    if (queue.length === 0) break
    result.push(queue)
  }

  return result.map(o => o.map(o => o.val))

};