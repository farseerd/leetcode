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
var swapPairs = function (head) {
  if (!head) return null
  let p = head
  let q = head.next
  let r = null
  if (q === null) {
    return p
  }

  let first = null

  while (true) {
    p.next = q.next
    q.next = p
    if (first === null) {
      first = q
    }
    if (r !== null) {
      r.next = q
    }
    r = p
    p = p.next
    if (p === null) {
      break
    } else {
      q = p.next
      if (q === null) {
        break
      }
    }
  }

  return first

};