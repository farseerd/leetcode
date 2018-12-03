/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {

  let S = new Set(G)
  let count = 0
  let p = head
  let remain = false
  while (p) {
    if (S.has(p.val)) {
      remain = true
    } else {
      if (remain) {
        count++
      }
      remain = false
    }
    p = p.next
  }
  if (remain) {
    count++
  }
  return count
};