/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let arr = num.split('').map(o => Number(o))

  for (let i = 0; i < k; i++) {
    let len = arr.length
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr.splice(j, 1)
        break
      }
    }
    if (len === arr.length) {
      arr.splice(len - 1, 1)
    }
  }

  let result = arr.join('').replace(/^0+/, '')
  return result || '0'
}
