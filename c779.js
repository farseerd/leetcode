/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

var kthGrammar = function (N, K) {

  let fn = (n, k) => {
    if (n == 1) {
      return 0
    } else if (n == 2) {
      return k - 1
    } else {
      if (k <= 2 ** (n - 2)) {
        return fn(n - 1, k)
      } else {
        return 1 - fn(n - 1, k - 2 ** (n - 2))
      }
    }
  }

  return fn(N, K)

};