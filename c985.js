/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */

function sum(arr) {
  let result = 0
  for (let item of arr) {
    result += item
  }
  return result
}

var sumEvenAfterQueries = function (A, queries) {

  let result = []
  for (let q of queries) {
    A[q[1]] += q[0]
    result.push(sum(A.filter(o => o % 2 === 0)))
  }
  return result

};