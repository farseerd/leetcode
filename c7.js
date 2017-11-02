/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let digit = [],
		sign = 1
	const MAX = Math.pow(2, 31) - 1
	if (x < 0) {
		sign = -1
		x = -x
	}
	let result = parseInt(x.toString().split('').reverse().join(''))
	if (result > MAX) {
		return 0
	} else {
		return result * sign
	}
};