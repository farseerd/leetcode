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
var addTwoNumbers = function(l1, l2) {

	function ListNode(val) {
		this.val = val;
		this.next = null;
	}

	let isAdd = false,
		result = [],
		p

	while (l1 || l2 || isAdd) {
		l1 = l1 || new ListNode(0)
		l2 = l2 || new ListNode(0)
		let v = l1.val + l2.val + (isAdd ? 1 : 0)
		isAdd = v >= 10
		v = v % 10
		result.push(v)
		l1 = l1.next
		l2 = l2.next
	}

	return result

};