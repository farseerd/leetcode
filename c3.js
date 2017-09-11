/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let pa = 0,
		pb = 0,
		result = 0,
		len = s.length

	let set = new Set()

	while (pa < len) {
		while (pa < len) {
			if (set.has(s[pa])) {
				break
			} else {
				set.add(s[pa])
				pa++
			}
		}
		result = Math.max(set.size, result)
		set.delete(s[pb])
		pb++
	}
	return result

};
