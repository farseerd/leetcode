/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {

  let list = []
  for (let i = 0; i < A.length; i++) {
    list.push({
      value: A[i],
      index: i
    })
  }

  list.sort((a, b) => {
    if (a.value === b.value) {
      return a.index - b.index
    } else {
      return a.value - b.value
    }
  })

  let bottom = Infinity
  let result = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i].index < bottom) {
      bottom = list[i].index
    }
    if (list[i].index - bottom > result) {
      result = list[i].index - bottom
    }
  }

  return result

};