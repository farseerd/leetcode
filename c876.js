/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let p = head,
    q = head,
    b = false

  while (p) {
    p = p.next
    if (b) {
      q = q.next
    }
    b = !b
  }

  return q
}
