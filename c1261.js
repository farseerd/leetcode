/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  function render(node) {
    if (node.left) {
      node.left.val = 2 * node.val + 1
      render(node.left)
    }
    if (node.right) {
      node.right.val = 2 * node.val + 2
      render(node.right)
    }
  }
  root.val = 0
  render(root)
  this.root = root
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  function find(node) {
    if (!node) return false
    if (node.val === target) return true
    if (node.val > target) return false
    return find(node.left) || find(node.right)
  }
  return find(this.root)
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
