/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  s = s.split('')
  let stack = []
  let error = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        error.push(i)
      } else {
        stack.pop()
      }
    }
  }

  stack.forEach(o => s[o] = '')
  error.forEach(o => s[o] = '')
  
  return s.join('')

}
