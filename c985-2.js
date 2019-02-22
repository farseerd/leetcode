/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */

function isEven(num) {
  return num % 2 === 0
}

var sumEvenAfterQueries = function (A, queries) {

  let last = 0
  for (let i = 0; i < A.length; i++) {
    if (isEven(A[i])) {
      last += A[i]
    }
  }
  let result = []

  for (let i = 0; i < queries.length; i++) {
    if (isEven(A[queries[i][1]])) {
      if (isEven(queries[i][0])) {
        last += queries[i][0]
      } else {
        last -= A[queries[i][1]]
      }
    } else {
      if (!isEven(queries[i][0])) {
        last += A[queries[i][1]] + queries[i][0]
      }
    }
    result.push(last)
    A[queries[i][1]] += queries[i][0]
  }
  return result

};