/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
  let [fa, fb] = ['a', 'b'];
  if (A < B) {
    [A, B] = [B, A];
    [fa, fb] = ['b', 'a']
  }
  let s2 = A - B - 1
  let result = []
  for (let i = 0; i < B + 1; i++) {
    if (s2 > 0) {
      result.push(fa + fa)
      s2--
      A -= 2
    } else if (A > 0) {
      result.push(fa)
      A--
    }
    if (i < B) {
      result.push(fb)
    }
  }
  return result.join('')
};