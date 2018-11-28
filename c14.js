/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return ''
	let result = []
	let first = strs[0]
	for (let i = 0; i < first.length; i++) {
		let b = true
		for (let str of strs) {
			b = b && str[i] === first[i]
		}
		if (b) {
			result.push(first[i])
		} else {
			return result.join('')
		}
	}
	return result.join('')
};