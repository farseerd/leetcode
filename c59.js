/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const N = n
  let result = []
  for (let i = 0; i < N; i++) {
    result[i] = []
  }
  let from = 1

  function gen(size) {
    let offset = (N - size) / 2
    if (size > 1) {
      for (let i = 0; i < size - 1; i++) {
        result[offset][i + offset] = from + i
        result[i + offset][size + offset - 1] = from + i + (size - 1)
        result[size + offset - 1][size - i + offset - 1] = from + i + 2 * (size - 1)
        result[size - i + offset - 1][offset] = from + i + 3 * (size - 1)
      }
    } else {
      result[offset][offset] = from
    }
  }

  while (n > 0) {
    gen(n)
    from += n * n - (n - 2) * (n - 2)
    n -= 2
  }

  return result
}
