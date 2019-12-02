/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let m = new Map()
  for(let item of arr) m.set(item, m.has(item) ? m.get(item) + 1 : 1)
  let mv = [...m.values()]
  return mv.length === new Set(mv).size
}
