/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function (A) {

  function isEven(num) {
    return num % 2 === 0
  }

  let M = new Array(200010)
  const MAX = 200010
  const os = 100005
  for (let item of A) {
    if (!M[item + os]) {
      M[item + os] = 1
    } else {
      M[item + os]++
    }
  }

  let ne = [],
    po = []
  for (let item of A) {
    if (item < 0) {
      ne.push(item)
    } else if (item > 0) {
      po.push(item)
    }
  }
  if (!isEven(A.length - ne.length - po.length)) return false
  ne.sort((a, b) => Number(a) - Number(b))
  po.sort((a, b) => Number(a) - Number(b))
  for (let i = 0; i < ne.length; i++) {
    if (M[ne[i] + os] === 0) continue
    if (!isEven(ne[i])) return false
    let next = ne[i] / 2
    if (M[next + os] > 0) {
      M[ne[i] + os]--
      M[next + os]--
    } else {
      return false
    }
  }
  for (let i = 0; i < po.length; i++) {
    if (M[po[i] + os] === 0) continue
    let next = po[i] * 2
    if (next + os >= MAX) return false
    if (M[next + os] > 0) {
      M[po[i] + os]--
      M[next + os]--
    } else {
      return false
    }
  }
  return true

};