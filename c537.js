/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {

  let [ra, ia, rb, ib] = [...a.split('+'), ...b.split('+')];
  [ia, ib] = [ia, ib].map(o => o.replace(/i/g, ''));
  [ra, ia, rb, ib] = [ra, ia, rb, ib].map(o => Number(o));
  return `${ra * rb - ia * ib}+${ra * ib + ia * rb}i`

};