/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) {
    return null
  }
  let p1 = l1,
    p2 = l2,
    p
  let result = null

  while (p1 !== null || p2 !== null) {
    if (result === null) {
      if (p1 === null) {
        result = new ListNode(p2.val)
        p = result
        p2 = p2.next
      } else if (p2 === null) {
        result = new ListNode(p1.val)
        p = result
        p1 = p1.next
      } else {
        if (p1.val < p2.val) {
          result = new ListNode(p1.val)
          p = result
          p1 = p1.next
        } else {
          result = new ListNode(p2.val)
          p = result
          p2 = p2.next
        }
      }
    } else {
      if (p1 === null) {
        p.next = new ListNode(p2.val)
        p = p.next
        p2 = p2.next
      } else if (p2 === null) {
        p.next = new ListNode(p1.val)
        p = p.next
        p1 = p1.next
      } else {
        if (p1.val < p2.val) {
          p.next = new ListNode(p1.val)
          p = p.next
          p1 = p1.next
        } else {
          p.next = new ListNode(p2.val)
          p = p.next
          p2 = p2.next
        }
      }
    }
  }
  return result
};