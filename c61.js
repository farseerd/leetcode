/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head

  let len = 0
  let p = head
  let final
  while (p) {
    len++
    if (!p.next) final = p
    p = p.next
  }

  k = k % len
  if (k === 0) return head
  p = head
  for (let i = 0; i < len - k - 1; i++) {
    p = p.next
  }
  let result = p.next
  final.next = head
  p.next = null

  return result
}
