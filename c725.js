/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let idx = []
  let p = root
  while (p) {
    idx.push(p)
    p = p.next
  }
  let len = idx.length

  let partLen = Math.floor(len / k)
  let modLen = len % k
  let result = []
  for (let i = 0; i < k; i++) {
    if (len < k) {
      if (idx[i]) {
        idx[i].next = null
        result.push(idx[i])
      } else {
        result.push(null)
      }
    } else {
      let start = i * partLen + Math.min(i, modLen)
      let end = start + partLen + (i < modLen ? 1 : 0) - 1
      idx[end].next = null
      result.push(idx[start])
    }
  }
  return result
}
