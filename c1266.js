/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  function max(a, b) {
    return a > b ? a : b
  }

  function abs(a) {
    return a > 0 ? a : -a
  }

  function calc(p1, p2) {
    return max(abs(p1[0] - p2[0]), abs(p1[1] - p2[1]))
  }

  let sum = 0
  for (let i = 0; i < points.length - 1; i++) {
    sum += calc(points[i], points[i + 1])
  }
  return sum
}
