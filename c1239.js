/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  function max(a, b) {
    return a > b ? a : b
  }

  function f(list, used = new Set()) {
    if (list.length === 0) return 0
    let head = list[0]
    for (let i = 0; i < head.length; i++) {
      if (used.has(head[i])) return f(list.slice(1), used)
    }
    let u = new Set(used)
    for (let i = 0; i < head.length; i++) {
      if (u.has(head[i])) return f(list.slice(1), used)
      u.add(head[i])
    }
    return max(head.length + f(list.slice(1), u), f(list.slice(1), used))
  }

  return f(arr)
}
