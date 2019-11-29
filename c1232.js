/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length === 2) return true
  let dx = coordinates[1][0] - coordinates[0][0]
  let dy = coordinates[1][1] - coordinates[0][1]
  for (let i = 2; i < coordinates.length; i++) {
    let tdx = coordinates[i][0] - coordinates[0][0]
    let tdy = coordinates[i][1] - coordinates[0][1]
    if (tdx * dy !== dx * tdy) return false
  }
  return true
}
