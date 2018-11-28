/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

function last(arr) {
  return arr[arr.length - 1]
}

var validateStackSequences = function (pushed, popped) {

  let s = []

  let [i, j] = [0, 0]
  while (true) {
    if (last(s) != popped[j]) {
      if (i >= pushed.length) {
        return false
      } else {
        s.push(pushed[i])
        i++
      }
    } else {
      if (j >= popped.length || s.length === 0) {
        return false
      } else {
        s.pop()
        j++
      }
    }
  }

};