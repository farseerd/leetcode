/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let sets = new Set()
  let eqs = equations.filter(o => o[1] === '=')
  let neqs = equations.filter(o => o[1] === '!')

  for (let eq of eqs) {
    let [a, b] = eq.split('==')
    let tmp = [a, b]
    for (let sk of sets.keys()) {
      if (sk.has(a) || sk.has(b)) {
        tmp = [...tmp, ...Array.from(sk)]
        sets.delete(sk)
      }
    }
    sets.add(new Set(tmp))
  }

  for (let eq of neqs) {
    let [a, b] = eq.split('!=')
    for (let sk of sets.keys()) {
      if (sk.has(a) && sk.has(b) || a === b) {
        return false
      }
    }
  }

  return true
};