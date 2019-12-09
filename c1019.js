/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  if (!head) {
    return []
  }
  if (!head.next) {
    return [0]
  }

  let current = head
  let result = []
  let i = 0

  while (current) {
    let p = current.next
    while (p) {
      if (p.val > current.val) {
        result[i] = p.val
        break
      }
      p = p.next
    }
    if (result[i] === undefined) {
      result[i] = 0
    }
    i++
    current = current.next
  }

  return result
}
