/**
 * @param {string} s
 * @return {boolean}
 */

const map = {
  '(': ')',
  '[': ']',
  '{': '}'
}

var isValid = function (s) {

  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      stack.push(s[i])
    } else {
      let p = stack.pop()
      if (map[p] !== s[i]) return false
    }
  }

  return stack.length === 0

};