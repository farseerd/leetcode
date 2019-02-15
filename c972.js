/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

function number(num) {
  return Number(num) || 0
}

function normalNum(num) {
  let reg = /^(\d*).?(\d*)(\(?(\d*)\)?)?$/
  let arr = num.match(reg)
  return {
    i: arr[1],
    n: arr[2],
    r: arr[4]
  }
}

function toFrac(num) {
  if (!num.n && !num.r) {
    return {
      a: number(num.i) || 0,
      b: 1
    }
  } else if (!num.r) {
    return {
      a: 10 ** num.n.length * number(num.i) + number(num.n),
      b: 10 ** num.n.length
    }
  } else {
    let base = 10 ** (num.r.length + num.n.length) - 10 ** num.n.length
    let top = 10 ** num.r.length * number(num.n) + number(num.r) - number(num.n)
    return {
      a: number(num.i) * base + top,
      b: base
    }
  }
}

function checkEqual(m, n) {
  return m.b * n.a === m.a * n.b
}

var isRationalEqual = function (S, T) {
  return checkEqual(toFrac(normalNum(S)), toFrac(normalNum(T)))
};